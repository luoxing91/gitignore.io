
var http = require('http')
var fs = require('fs')
var path = require('path')
var mime = require('mime')
var capitalize = require('capitalize')

var cache = {};

function send404(response){
	response.writeHead(404, {'Content-Type' : 'text/plain'});
	response.write('Error 404: resource not found');
	response.end();
}

function sendFile(response, filePath, fileContents){
	response.writeHead(
		200,
		{"content-type": mime.lookup(path.basename(filePath))});
	response.end(fileContents);
}
function serverStatic(response, cache, absPath){
	// in memory
	console.log('find absPath ', absPath)
	if(cache[absPath]){
		sendFile(response, absPath, cache[absPath]);
	}else{
		fs.exists(absPath, function(exists){
			if(exists){
				fs.readFile(absPath, function(err, data){
					if(err){
						send404(response);
						return 
					}else{
						cache[absPath] = data;
						sendFile(response, absPath, data);
					}
				});
			}else{
				send404(response);
			}
		});
		
	}
	
}

var listenPort = 8080
http.createServer(function (request, response){
	if(request.url =='/'){
		send404(response);
		return;
	}
	// 首字母大写。
	url = capitalize(request.url.substring(1, request.url.length))
	var absPath = process.cwd()+
		"/../gitignore/templates/"+url+".gitignore"
	serverStatic(response, cache, absPath);
	
}).listen(listenPort)
console.log('server running at http://localhost:%d', listenPort)



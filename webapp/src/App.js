import React, { Component } from 'react';
import logo from './gitignoreio.svg';
import './App.css';
import CreatableSelect from 'react-select/lib/Creatable';


export const OPTIONS = [
  { label: '01234567', value: 'zero' },
  { label: '1', value: 'one' },
  { label: '2', value: 'two' },
  { label: '3', value: 'three' },
  { label: '4', value: 'four' },
  { label: '5', value: 'five' },
  { label: '6', value: 'six' },
  { label: '7', value: 'seven' },
  { label: '8', value: 'eight' },
  { label: '9', value: 'nine' },
  { label: '10', value: 'ten' },
  { label: '11', value: 'eleven' },
  { label: '12', value: 'twelve' },
  { label: '13', value: 'thirteen' },
  { label: '14', value: 'fourteen' },
  { label: '15', value: 'fifteen' },
  { label: '16', value: 'sixteen' },
];


class App extends Component {
    handleChange = (newValue, actionMeta) =>{
        //this.setState({selectedOption});
        //console.log(`Option selected:`, selectedOption);
        console.log(newValue)
    }
    handleInputChange = (inputValue, actionMeta)=>{
        console.log(inputValue)
    }
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="lead">
            Ccreate useful .gitignore files for your project
          </p>
          <div className="input-group">
            <CreatableSelect
            isClearable
            onChange={this.handleChange}
            onInputChange={this.handleInputChange}
            options = {OPTIONS}
              className="form-control ignore-search input"/>
            
            <button type="button" onClick="generateGitIgnore()"
                    className="btn btn-gitignore group-btn">Create</button>
			</div>
          
          <ul class="nav masthead-nav">
<li><a href="https://github.com/joeblau/gitignore.io" alt="GitHub hosted source code for .gitignore.io">Source Code</a></li>
<li><p class="lead">|</p></li>
<li><a href="/docs" alt="Learn how to run .gitignore.io from the command line">Command Line Docs</a></li>
<li><p class="lead">|</p></li>
<li><a href="https://vimeo.com/204803019" alt="Watch a video to learn how .gitignore.io works">Watch Video Tutorial</a></li>
			</ul>

			<a href="https://your-url" className="github-corner" aria-label="View source on GitHub">
			<svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
			<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
			<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor"  className="octo-arm"></path>
			<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
			</svg>
			
			</a>
      </div>
    );
  }
}

export default App;

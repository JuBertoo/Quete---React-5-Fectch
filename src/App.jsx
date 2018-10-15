import React, { Component } from 'react';
import logo from './LogoSimpson.png';
import './App.css';
import DisplayQuotes from './DisplayQuotes';
import GenerateQuotes from './GenerateQuotes';

class App extends Component {
  constructor(props){
    super(props);
        this.state = {
            quotes : null
        }; 
    }

getQuotes() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        console.log(data)
        this.setState({
          quotes:  data[0],
        });
    });
  }

  componentDidMount(){
    this.getQuotes();
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        {this.state.quotes && 
        <DisplayQuotes
        quotes = {this.state.quotes}/>
        }
        <GenerateQuotes
        newQuotes = {() =>{this.getQuotes()} }
        />
        </header>
      </div>
    );
  }
}

export default App;

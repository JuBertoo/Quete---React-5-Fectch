import React, { Component } from 'react'

export default class DisplayQuotes extends Component {
    render() {
    return (
    <div >
        <img className="SimpsonImg"  src={this.props.quotes.image}  alt="Simpson"  />
        <ul>
            <li className="quote">{this.props.quotes.quote}</li>
            <li className="character">{this.props.quotes.character} </li>
        </ul>
    </div> 
    )
}
}


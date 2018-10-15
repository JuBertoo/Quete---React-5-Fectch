import React, { Component } from 'react'
import Button from '@material-ui/core/Button';



export default class GenerateQuotes extends Component {
    render() {
      return (
          <div>
          <Button variant="extendedFab" aria-label="Delete" onClick={this.props.newQuotes}>New Quote</Button>
          </div>
      )
    }
  }
import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="loading">
            <div className="circle">
              <h1>...Loading</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Loading
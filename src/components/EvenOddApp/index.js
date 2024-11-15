// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickBtn = () => {
    this.setState({
      count: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {count} = this.state
    const valuOfNumber = parseInt(count) % 2
    const eOrOnumberText = valuOfNumber === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">
            Count<span className="padding-left">{count}</span>
          </h1>
          <p>{eOrOnumberText}</p>
          <button type="button" className="btn" onClick={this.onClickBtn}>
            Increment
          </button>
          <p className="paragraph2">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

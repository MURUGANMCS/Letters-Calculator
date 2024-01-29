// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputValue: ''}

  onChangeInput = event => {
    const {value} = event.target
    this.setState({inputValue: value})
  }

  render() {
    const {inputValue} = this.state

    return (
      <div className="bg-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-img"
          />
        </div>
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="search-input-container">
            <label htmlFor="input-phrase" className="details">
              Enter the phrase
            </label>
            <input
              type="text"
              id="input-phrase"
              placeholder="Enter the phrase"
              className="search-input"
              onChange={this.onChangeInput}
              value={inputValue}
            />
          </div>
          <p className="number-counts">No.of letters: {inputValue.length}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

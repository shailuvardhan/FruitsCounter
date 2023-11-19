import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onClickedMangoButton = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onClickedBananaButton = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="title">
            Bob ate <span className="count-color">{mangoCount}</span> mangoes{' '}
            <span className="count-color">{bananaCount}</span> bananas
          </h1>
          <div className="cards-container">
            <div className="card-image-button-container">
              <img
                className="img"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              />
              <button
                type="button"
                className="btn"
                onClick={this.onClickedMangoButton}
              >
                Eat Mango
              </button>
            </div>
            <div className="card-image-button-container">
              <img
                className="img"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              />
              <button
                type="button"
                className="btn"
                onClick={this.onClickedBananaButton}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

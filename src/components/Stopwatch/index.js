import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElaspeInSeconds: 0
  }

  updateTime = () => {
    this.setState(prevState => ({timeElaspeInSeconds: prevState.timeElaspeInSeconds + 1}))
  }

  onStartTimer = () => {
    this.timeinterval = setInterval(this.updateTime,1000)
    this.setState({isTimerRunning: true})
  }

  onStopTimer = () => {
    clearInterval(this.timeinterval)
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    clearInterval(this.timeinterval)
    this.setState({isTimerRunning: false, timeElaspeInSeconds: 0})
  }

  renderSeonds = () => {
    const {timeElaspeInSeconds} = this.state
    const seconds = Math.floor(timeElaspeInSeconds % 60)
    if (seconds < 10){
      return `0${seconds}`
    }
    return seconds
  }
  
  renderMinutes = () => {
    const {timeElaspeInSeconds} = this.state
    const minutes = Math.floor(timeElaspeInSeconds / 60)
    if (minutes < 10){
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeonds()}`
    return (
      <div className="bg-container">
        <div className="heading-card-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-card-container">
            <div className="icon-text-div">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="text">Timer</p>
            </div>
            <h1 className="display-time">{time}</h1>
            <button className="start-btn" onClick={this.onStartTimer}>Start</button>
            <button className="stop-btn" onClick={this.onStopTimer}>Stop</button>
            <button className="reset-btn" onClick={this.onResetTimer}>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch

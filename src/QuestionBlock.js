import { Component } from "react"

class QuestionBlock extends Component {
  constructor(props) {
    super(props)
    this.state = { answered: false }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({answered: !this.state.answered}))
  }

  render() {
    return (
      <li className="question-block" onClick={this.handleClick} >
        { !this.state.answered ? 
          <span className="question-value" >${this.props.value}</span> :
          <span className="question-text">{this.props.question}</span>
        } 
      </li>
    )
  }
}

export default QuestionBlock
import { Component } from "react"
import ReactModal from 'react-modal'

ReactModal.setAppElement('#full-page')

class QuestionBlock extends Component {
  constructor(props) {
    super(props)
    this.state = { answered: false, showModal: false }

    // this.handleClick = this.handleClick.bind(this)

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  // handleClick() {
  //   this.setState(state => ({answered: !this.state.answered}))
  // }

  handleOpenModal() {
    this.setState({showModal: true})
  }

  handleCloseModal() {
    this.setState({showModal: false})
  }

  render() {
    return (
      <li className="question-block" onClick={this.handleOpenModal} >
        <span className="question-value" >${this.props.value}</span>
        <ReactModal
          isOpen={this.state.showModal}
        >
          <button onClick={this.handleCloseModal}>Close modal</button>
        </ReactModal>
      </li>
      // <li className="question-block" onClick={this.handleClick} >
      //   { !this.state.answered ? 
      //     <span className="question-value" >${this.props.value}</span> :
      //     <span className="question-text">{this.props.question}</span>
      //   } 
      // </li>
    )
  }
}

export default QuestionBlock
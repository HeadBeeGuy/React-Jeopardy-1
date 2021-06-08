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

  handleOpenModal() {
    this.setState({showModal: true})
  }

  handleCloseModal() {
    this.setState({showModal: false})
  }

  render() {
    return (
      <div className="question-block">
        <span className="question-value" onClick={this.handleOpenModal} >${this.props.value}</span>
        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
        >
          <button onClick={this.handleCloseModal}>Close modal</button>
        </ReactModal>
      </div>
    )
  }
}

export default QuestionBlock
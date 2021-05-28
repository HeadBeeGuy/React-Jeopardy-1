import React, { Component } from 'react'

function Question(props) {
  return (
    <p>${props.value} - {props.question}</p>
  )
}

export class Category extends Component {


  render() {
    const data = this.props.data

    const questions = data.questions.map((question) => 
      <li key={question.value} className="question-block">
        <span className="question-value">${question.value}</span>
      </li>
    )
    return (
      <div className="category-section">
        <h3>{data.title}</h3>
        <ol>
          {questions}
        </ol>
      </div>
    )
  }
}

export default Category
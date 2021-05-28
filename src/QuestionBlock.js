
function QuestionBlock(props) {
  return (
    <li className="question-block">
      <span className="question-value" key={`${props.keyprefix}${props.value}`} >${props.value}</span>
    </li>
  )
}

export default QuestionBlock
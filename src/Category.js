
function Category(props) {
  const data = props.data

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

export default Category
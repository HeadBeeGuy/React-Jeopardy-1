import QuestionBlock from './QuestionBlock'

function Category(props) {
  const data = props.data

  const questions = data.questions.map((question) => 
    <QuestionBlock value={question.value} question={question.question}  key={data.keyprefix + question.value} />
  )
  return (
    <div className="category-section">
      <h3 className="category-name">{data.title}</h3>
      <ol>
        {questions}
      </ol>
    </div>
  )
}

export default Category
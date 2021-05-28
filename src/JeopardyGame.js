import Category from './Category'

function JeopardyGame(props) {
  const categories = props.data.map((category) => 
    <Category data={category} key={category.keyprefix} />
  )

  return (
    <div className="jeopardy-game">
      <div className="question-board">
        {categories}
      </div>
      <div className="question-display">
        <p>This is where questions will be displayed.</p>
      </div>
    </div>
  )
}

export default JeopardyGame
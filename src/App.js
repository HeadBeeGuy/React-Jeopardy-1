import './App.css';
import JeopardyGame from './JeopardyGame';

function App() {
  const questionData = [
    {
      "title": "Potent Potables",
      "keyprefix": "A",
      "questions": [
        {
          "value": 100,
          "question": "What's question 1?",
          "answer": "The first answer"
        },
        {
          "value": 200,
          "question": "What's question 2?",
          "answer": "The second answer"
        },
        {
          "value": 300,
          "question": "What's question 3?",
          "answer": "The third answer"
        },
        {
          "value": 400,
          "question": "What's question 4?",
          "answer": "The fourth answer"
        },
      ],
    },
    {
      "title": "A Petit Dejeuner",
      "keyprefix": "B",
      "questions": [
        {
          "value": 100,
          "question": "What's the capital of Kansas?",
          "answer": "Topeka"
        },
        {
          "value": 200,
          "question": "Why do questions come first? This is Jeopardy!",
          "answer": "Because this format is easier to run as a quiz game!"
        },
        {
          "value": 300,
          "question": "How many people live on Earth's Moon?",
          "answer": "Nobody, as far as I know."
        },
        {
          "value": 400,
          "question": "When is the next Onbashira?",
          "answer": "2022"
        },
      ],
    },
    {
      "title": "The Number After 2",
      "keyprefix": "C",
      "questions": [
        {
          "value": 100,
          "question": "Which James Bond movie featured Jaws?",
          "answer": "Moonraker, I think? Was he in another one?"
        },
        {
          "value": 200,
          "question": "Should JavaScript require semicolons?",
          "answer": "Probably."
        },
        {
          "value": 300,
          "question": "Why is 6 afraid of 7?",
          "answer": "Numbers know no fear."
        },
        {
          "value": 400,
          "question": "Help! I'm in vim! How do I quit?",
          "answer": "Press escape, then type :q!"
        },
      ],
    },
    {
      "title": "Drummers Named Ringo",
      "keyprefix": "D",
      "questions": [
        {
          "value": 200,
          "question": "How many were going to St Ives?",
          "answer": "Just the one guy, right?"
        },
        {
          "value": 300,
          "question": "What's the sixth guitar string tuned at in standard tuning?",
          "answer": "That would be E."
        },
        {
          "value": 400,
          "question": "What's the pithy nickname for the creator of Ruby?",
          "answer": "Matz."
        },
        {
          "value": 500,
          "question": "Who wrote Great Expectations?",
          "answer": "Charles Dickens."
        },
      ],
    },
  ]
  return (
    <div className="App">
      <JeopardyGame data={questionData} />
    </div>
  );
}

export default App;

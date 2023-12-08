import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Question({ data }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelection = (choice) => {
    setSelectedAnswer(choice);
  };

  const handleAnswerSubmission = () => {
    if (selectedAnswer && selectedAnswer.correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < data.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Réinitialiser la sélection pour la nouvelle question
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="container">
      <Card style={{ border: '1px solid white', boxShadow: '0 4px 8px 0 rgba(0, 0, 255, 0.8)', borderRadius: '10px', margin:"40px" }}>
        <Card.Header className="card-header" style={{ padding: '10px' }}>Questionnaire</Card.Header>

        <Card.Body style={{ padding: '20px' }}>
          {!showResult ? (
            <div>
              <h3> {currentQuestion + 1} / {data.length}</h3>
              <h4>{data[currentQuestion].question}</h4>
              <Form >
                {data[currentQuestion].choices.map((choice, index) => (
                  <Form.Check
                    key={index}
                    type="radio"
                    id={`choice-${index}`}
                    label={choice.answer}
                    checked={selectedAnswer === choice}
                    onChange={() => handleAnswerSelection(choice)}
                    style={{ marginBottom: '10px', borderRadius: '10px' }}
                  />
                ))}
              </Form>
              <button
                className="btn btn-primary"
                onClick={handleAnswerSubmission}
                style={{ marginBottom: '10px', backgroundColor: 'blue', color: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 255, 0.8)', borderRadius: '10px', padding:"5px" }}
              >
                Suivant
              </button>
            </div>
          ) : (
            <div style={{margin:0}}>
              <h1>Résultats</h1>
              <p>Vous avez obtenu {score} réponses correctes sur {data.length}.</p>
              <button
                className="btn btn-primary"
                onClick={resetQuiz}
                style={{ marginBottom: '10px', backgroundColor: 'blue', color: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 255, 0.8)', borderRadius: '10px', padding:"5px", transition: 'background-color 0.3s ease' }}
              >
                Réessayer
              </button>
              <h2>Réponses Correctes</h2>
              <ul>
                {data.map((question, index) => (
                  <li key={index}>
                    <strong>{question.question}</strong>: {question.choices.find(choice => choice.correct)?.answer}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Question;

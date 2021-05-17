import { useHistory } from 'react-router';
import { useQuestion } from '../../Hooks/Questions';
import api from '../../service/api';
import {
  Container,
} from './styles';

const Main = () => {
  const { 
    handleGetQuestions, 
    questions, question, 
    selectAnswer, 
    isFinisehd, 
    allAnswer,
    report,
    correctAnswer,
    incorrentAnswer,
    handleExit,
   } = useQuestion();
  const history = useHistory();
  console.log(question, questions)
  return (
    <Container>
      {!questions.length && !question.question && (
        <div className="ContainerIntial">
          <button onClick={handleGetQuestions}>Start</button>
          <button onClick={() => history.goBack()}>Cancel</button>    
        </div>
      )}
      {questions.length !== 0 && !isFinisehd && (
        <div className="ContainerQuestion">
          <h1>{question.question}</h1>
          <div className="ContainerButtonQuestion">
            <button onClick={() => selectAnswer(question.incorrect_answers)}>{question.incorrect_answers}</button>
            <button onClick={() => selectAnswer(question.correct_answer)}>{question.correct_answer}</button>
          </div>
        </div>
      )}

      {isFinisehd && (
        <div className="ContainerReport">
          <div className="ContainerOverflow">
          {allAnswer.map(quest => (
          <div key={quest.question} className="WrapperContentReport">
            <h1>{quest.question}</h1>
            <div className="ContainerButton">
              <div className="ContainerChoice">
                <strong>Escolhido</strong>
               <button>{quest.select_answer}</button>
              </div>
              
              <div className="ContainerChoice">
                <strong>Correto</strong>
                <button>{quest.correct_answers}</button>
              </div>
              
            </div>

          </div>
        ))}
          </div>

          <div className="ContainerResults">
            <div className="WrapperContent">
            <p>Respostas certas: {correctAnswer}</p>
            <p>Respostas erradas: {incorrentAnswer}</p>
            </div>
            <button onClick={handleExit}>Voltar</button>
          </div>
      </div>
      )}
      
      
    </Container>
  );
}

export default Main;
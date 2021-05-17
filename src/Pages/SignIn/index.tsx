import { FormHTMLAttributes, useRef } from 'react';
import { FormEvent } from 'react';
import { useHistory } from 'react-router';
import { useQuestion } from '../../Hooks/Questions';
import {
  Container,
} from './styles';

const SignIn = () => {
  const history = useHistory();
  const selectRef = useRef<HTMLSelectElement>(null);
  const { 
    setQuetions, 
    report, 
    toggleIsFinished, 
    isFinisehd, 
    handleExit,
    allAnswer,
   } = useQuestion()
   const correctAnswer = localStorage.getItem('@Report:Correct')
   const incorrentAnswer = localStorage.getItem('@Report:Incorrect')
  function handleSubmit() {
    if(!selectRef.current?.value) return;
    setQuetions(selectRef.current?.value);
    history.push('/main')
  }
  return (
    <Container>
      {report.length !== 0 && !isFinisehd && (
        <div className="ContainerNotifyReport">
          <h1 onClick={toggleIsFinished}>Ultimo Quiz</h1>
        </div>
      )}

      {isFinisehd && (
        <div className="ContainerReport">
          <div className="ContainerOverflow">
            {report.map(quest => (
            <div key={quest.question} className="WrapperContentReport">
              <h1>{quest.question}</h1>
              <div className="ContainerButtonReport">
                <div className="ContainerChoice">
                  <strong>Escolhida</strong>
                  <button>{quest.select_answer}</button>
                </div>
                <div className="ContainerChoice">
                  <strong>Correta</strong>
                  <button>{quest.correct_answers}</button>
                </div>
                
                
              </div>
            </div>
          ))}
          </div>
        
          <div className="ContainerResults">
            <div className="ContentResults">
              <p>Respostas certas: {correctAnswer}</p>
              <p>Respostas erradas: {incorrentAnswer}</p>
            </div>
            <button onClick={handleExit}>Voltar</button>
          </div>
      </div>
      )}
      {!isFinisehd && (
        <div className="ContainerMain">
        <h1>Escolha a quantidade de perguntas</h1>
          <select id="question" name="question" ref={selectRef}>
            <option value="selecione">selecione</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="12">12</option>
          </select>
          <button type="button" onClick={handleSubmit}>Confirmar</button>
          </div>
      )}
    </Container>
  );
}

export default SignIn;
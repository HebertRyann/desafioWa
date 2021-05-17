import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../service/api';

interface QuestionContextProps {
  numberQuestions: string;
  questions: QuestionsProps[];
  question: QuestionsProps;
  isFinisehd: boolean;
  report: ReportProps[];
  allAnswer: ReportProps[];
  correctAnswer: number;
  incorrentAnswer: number;
  setQuetions(numberQuestion: string): void;
  handleGetQuestions(): void;
  selectAnswer(answer: string): void;
  selectQuest(): void;
  handleExit(): void;
  toggleIsFinished(): void;
}

interface QuestionsProps {
  question: string;
  correct_answer: string;
  incorrect_answers: string;
}
interface ReportProps {
  question: string;
  select_answer: string;
  correct_answers: string;
}

const QuestionContext = createContext<QuestionContextProps>({} as QuestionContextProps);
export const QuestionProvider: React.FC = ({ children }) => {
  const [numberQuestions, setNumberQuestions] = useState('');
  const [questions, setQuestions] = useState<QuestionsProps[]>([]);
  const [question, setQuestion] = useState<QuestionsProps>({} as QuestionsProps);
  const [report, setReport] = useState<ReportProps[]>(() => {
    const findReport = localStorage.getItem('@Report');
    if(findReport) {
      return JSON.parse(findReport)
    }
    return []
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allAnswer, setAllAnswer] = useState<ReportProps[]>([]);
  const [isFinisehd, setIsFinished] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [incorrentAnswer, setIncorrectAnswer] = useState(0);

  function setQuetions(numberQuestion: string) {
    setNumberQuestions(numberQuestion);
  }
  const selectQuest = useCallback(() => {
    const up = currentIndex + 1
    console.log(up.toString() !== numberQuestions,up, currentIndex, numberQuestions)
    if(up.toString() !== numberQuestions){
      setCurrentIndex(up)
      setQuestion(questions[up])
    } else {
      setIsFinished(true)
    }
  }, [currentIndex, numberQuestions, questions])

  const handleGetQuestions = useCallback(async () => {
    const response = await api.get(`/?amount=${numberQuestions}`);
    setReport([])
    const filter = response.data.results.filter((item: QuestionsProps) => item.incorrect_answers[0])
    console.log(filter)
    setQuestions(response.data.results[0]);
    setQuestion({...response.data.results[0], incorrect_answers: response.data.results[0].incorrect_answers[0]})

  }, [numberQuestions])

  const selectAnswer = useCallback((answer: string) => {

    if(numberQuestions !== allAnswer.length.toString()) {
      
      setAllAnswer([...allAnswer, { 
        question: question.question,
        correct_answers: question.correct_answer,
        select_answer: answer, 
      }]);
      setReport([...report, { 
        question: question.question,
        correct_answers: question.correct_answer,
        select_answer: answer, 
      }]);
      if(question.correct_answer === answer) {
        setCorrectAnswer(correctAnswer + 1)
      } else {
        setIncorrectAnswer(incorrentAnswer + 1)
      }
      selectQuest()    
    }
    
  }, [allAnswer, correctAnswer, incorrentAnswer, numberQuestions, question.correct_answer, question.question, report, selectQuest])

  function handleExit() {
    localStorage.setItem('@Report:Correct', JSON.stringify(correctAnswer))
    localStorage.setItem('@Report:Incorrect', JSON.stringify(incorrentAnswer))
    setQuestion({} as QuestionsProps)
    setQuestions([])
    setAllAnswer([])
    setCurrentIndex(0)
    setIsFinished(false);
    setCorrectAnswer(0)
    setIncorrectAnswer(0)
    localStorage.setItem('@Report', JSON.stringify(report))
  }

  function toggleIsFinished() {
    setIsFinished(!isFinisehd);
  }


  return (
    <QuestionContext.Provider value={{ 
      numberQuestions, 
      setQuetions,
      handleGetQuestions,
      questions,
      selectAnswer,
      selectQuest,
      question,
      isFinisehd,
      report,
      correctAnswer,
      incorrentAnswer,
      handleExit,
      toggleIsFinished,
      allAnswer,
      }}>
      {children}
    </QuestionContext.Provider>
  )
};

export function useQuestion() {
  const context = useContext(QuestionContext);

  if(!context) {
    throw new Error('UseQuestion must be used whitin an QuestionProvider')
  }

  return context;
};
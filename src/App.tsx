import React from 'react';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { QuestionProvider } from './Hooks/Questions';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <QuestionProvider>
        <GlobalStyles/>
        <Routes />
      </QuestionProvider>
    </BrowserRouter>    
  )
}

export default App;

import './App.css';
import Welcome from './components/Welcome';
import Question from './components/Question';
import Gameover from './components/Gameover';
import PickCategory from './components/Pickcategory';
import { QuizContext } from './context/quiz';
import { useContext, useEffect } from 'react';


function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
dispatch({type:"REORDER_QUESTIONS"})
  },[]
  )

 return (
    <div className="App">
   
      <h1>Quiz de programação</h1>
     {quizState.gameStage === "Start" && <Welcome />}
     {quizState.gameStage === "Category" && <PickCategory />}
     {quizState.gameStage === "Playing" && <Question />}
     {quizState.gameStage === "End" && <Gameover />}
     
     
     
    </div>
  );
};

export default App;

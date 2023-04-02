import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import './Pickcategory.css'
import cat from "../img/category.svg";



const Pickcat = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function choosecatAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="cat">
      <h2>Escolha uma categoria:</h2>
      <h4> As perguntas serão referentes a uma das linguagens abaixo: </h4>
      {quizState.questions.map((question) => (
        <button
          onClick={() => choosecatAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}

      <img src={cat} alt="Categoria do Quiz" />
    </div>
  );
};

export default Pickcat;
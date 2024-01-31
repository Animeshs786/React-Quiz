import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loading from "./Loading";
import Main from "./Main";
import Error from "./Error";
import Welcome from "./Welcome";
import QuizView from "./QuizView";

const initialState = {
  status: "loading",
  questions: [],
  index: 0,
  answer: "",
  point: 0,
};
function reducer(state, action) {
  const correctOption = state.questions[state.index]?.correctOption;
  const quizPoint = state.questions[state.index]?.points;

  switch (action.type) {
    case "loading":
      return { ...state, questions: action.payload, status: "active" };
    case "start":
      return { ...state, status: "start" };
    case "select":
      return {
        ...state,
        answer: action.payload,
        point:
          correctOption === action.payload
            ? state.point + quizPoint
            : state.point,
      };
    case "next":
      return { ...state, answer: "", index: state.index + 1 };
    case "error":
      return { ...state, status: "error" };
    case "finished":
      return { ...state, index: 0, answer: "", point: 0, status: "active" };
    default:
      throw new Error("unknown status");
  }
}

function App() {
  const [{ status, questions, index, answer, point }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    fetch("https://json-api-vercel.vercel.app/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "loading", payload: data }))
      .catch((err) => dispatch({ type: "error" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "active" && (
          <Welcome questions={questions} dispatch={dispatch} />
        )}
        {status === "start" && (
          <QuizView
            index={index}
            answer={answer}
            questions={questions}
            dispatch={dispatch}
            point={point}
          />
        )}
      </Main>
    </div>
  );
}

export default App;

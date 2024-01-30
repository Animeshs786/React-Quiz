import Footer from "./Footer";
import Next from "./Next";
import Progress from "./Progress";
import Question from "./Question";

function QuizView({ index, questions, answer, dispatch, point }) {
  const totalQuestion = questions.length;
  const maxPoint = questions.reduce((acc, items) => {
    return acc + items.points;
  }, 0);

  return (
    <>
      <Progress
        point={point}
        index={index}
        answer={answer}
        totalQuestion={totalQuestion}
        maxPoint={maxPoint}
      />
      <Question
        index={index}
        questions={questions}
        answer={answer}
        dispatch={dispatch}
      />
      <Footer>
        {answer !== "" && (
          <Next index={index} questions={questions} dispatch={dispatch} />
        )}
      </Footer>
    </>
  );
}

export default QuizView;

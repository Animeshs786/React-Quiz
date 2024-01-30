function Question({ index, questions, answer, dispatch }) {
  const {
    question,
    options,
    correctOption: correct,
  } = questions?.at(index);

  return (
    <div>
      <h4>{question}</h4>
      <div className="options">
        {options.map((data, i) => (
          <button
            className={`btn btn-option ${
              answer !== "" ? (i === correct ? "correct" : "wrong") : ""
            } ${answer === i ? "answer" : ""} `}
            key={i}
            disabled={answer !== ""}
            onClick={() => dispatch({ type: "select", payload: i })}
          >
            {data}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;

function Next({ dispatch, questions, index }) {
  return index < questions.length - 1 ? (
    <button onClick={() => dispatch({ type: "next" })} className="btn btn-ui">
      Next
    </button>
  ) : (
    <button
      onClick={() => dispatch({ type: "finished" })}
      className="btn btn-ui"
    >
      Finished
    </button>
  );
}

export default Next;

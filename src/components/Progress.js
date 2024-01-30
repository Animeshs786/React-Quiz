function Progress({ point, index, answer,totalQuestion,maxPoint }) {
  return (
    <header className="progress">
      <progress max={totalQuestion} value={answer === "" ? index : index + 1}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {totalQuestion}
      </p>
      <p>
        <strong>{point}</strong> / {maxPoint}
      </p>
    </header>
  );
}

export default Progress;

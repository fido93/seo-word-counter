import Warning from "./Warning";

const Textarea = ({ text, textHandler, warning }) => {
  return (
    <div className="textarea">
      <textarea
        onChange={textHandler}
        value={text}
        className="textarea"
        placeholder="Enter your text"
        spellCheck="false"
      />
      {warning ? <Warning /> : null}
    </div>
  );
};

export default Textarea;

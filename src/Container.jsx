import { useEffect, useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

const Container = () => {
  const [textKeyword, setTextKeyword] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handlerTextArea = (event) => {
    setShowWarning(false);
    const val = event.target.value;
    setTextKeyword(val);
  };

  useEffect(() => {
    if (textKeyword.includes("<script>")) {
      setShowWarning(true);
      const updatedText = textKeyword.replace("<script>", "");
      setTextKeyword(updatedText);
    }
  }, [textKeyword]);

  return (
    <main className="container">
      <Textarea
        text={textKeyword}
        textHandler={handlerTextArea}
        warning={showWarning}
      />
      <Stats />
    </main>
  );
};

export default Container;

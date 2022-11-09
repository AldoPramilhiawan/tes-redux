import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const config = {
  buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};

const TextEditor = ({ label, inputProps, onChange, value }) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      config={config}
      tabIndex={1}
      //   onBlur={(newContent) => getValue(newContent)}
      {...inputProps}
      onChange={onChange}
      value={value}
    />
  );
};

export default TextEditor;

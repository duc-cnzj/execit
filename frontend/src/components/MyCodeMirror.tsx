import React, { memo } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { EditorView } from "@codemirror/view";
import { StreamLanguage } from '@codemirror/language';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';

// https://codesandbox.io/s/codemirror-6-demo-forked-mce50r?file=/src/index.js:626-692
const myCodeMirror: React.FC<{
  value?: string;
  onChange?: (v: string) => void;
}> = ({ value, onChange }) => {
  const extensions = [
    StreamLanguage.define(yaml),
    theme,
  ];

  return (
    <CodeMirror
      style={{ height: "100%" }}
      value={value}
      onChange={onChange}
      theme={dracula}
      basicSetup={{
        lineNumbers: true,
        highlightActiveLineGutter: false,
        foldGutter: true,
        dropCursor: true,
        allowMultipleSelections: true,
        indentOnInput: true,
        bracketMatching: true,
        closeBrackets: true,
        autocompletion: true,
        rectangularSelection: true,
        crosshairCursor: true,
        highlightActiveLine: false,
        highlightSelectionMatches: true,
        closeBracketsKeymap: true,
        searchKeymap: true,
        foldKeymap: true,
        completionKeymap: true,
        lintKeymap: true,
      }}
      extensions={extensions}
    />
  );
};

const theme = EditorView.theme(
  {
    "&": {
      outline: "none",
      height: "100%",
    },
    ".cm-content": {
      paddingTop: 0
    },
    "&.cm-editor.cm-focused": {
      outline: "none",
    },
    ".cm-completionIcon-text": {
      "&:after": { content: "''", fontSize: "50%", verticalAlign: "middle" },
    },
    ".cm-line": {
      padding: "1px 0"
    }
  },
  {}
);

export default memo(myCodeMirror);

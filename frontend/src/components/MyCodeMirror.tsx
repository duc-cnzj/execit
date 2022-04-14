import React from "react";
import {
  Controlled as CodeMirror,
  ICodeMirror,
  Controlled,
} from "react-codemirror2";

import "codemirror/mode/go/go";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/yaml/yaml";
import "codemirror/mode/php/php";
import "codemirror/mode/python/python";
import "codemirror/mode/properties/properties";
import "codemirror/mode/textile/textile";

import "codemirror/addon/comment/comment";

import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/anyword-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/sql-hint";

import "codemirror/addon/lint/javascript-lint";
import "codemirror/addon/lint/yaml-lint";
import "codemirror/addon/lint/lint.js";

import { JSHINT } from "jshint";
import jsyaml from "js-yaml";

(window as any).JSHINT = JSHINT;
(window as any).jsyaml = jsyaml;

export const getMode = (mode: string): string => {
  switch (mode) {
    case "dotenv":
    case "env":
    case ".env":
      return "text/x-textile";
    case "yaml":
      return "text/x-yaml";
    case "js":
    case "javascript":
      return "text/javascript";
    case "ini":
      return "text/x-properties";
    case "php":
      return "php";
    case "json":
      return "application/json";
    case "sql":
      return "text/x-sql";
    case "go":
      return "text/x-go";
    case "py":
    case "python":
      return "text/x-python";
    default:
      return mode;
  }
};

const defaultOpt = {
  lineNumbers: true,
  lint: true,
  gutters: ["CodeMirror-lint-markers"],
  extraKeys: {
    "Alt-Enter": "autocomplete",
    "Ctrl-/": (editor: any) => editor.execCommand("toggleComment"),
    "Cmd-/": (editor: any) => editor.execCommand("toggleComment"),
  },
  hintOptions: {
    completeSingle: false,
  },
};

interface InputMirror extends ICodeMirror {
  onChange?: (v: string) => void;
  value?: string;
}

const myCodeMirror: React.ForwardRefRenderFunction<
  Controlled,
  React.RefAttributes<Controlled> & InputMirror
> = (props, ref) => {
  return (
    <CodeMirror
      ref={ref}
      editorDidMount={(editor) => {
        setTimeout(() => {
          editor.refresh();
        }, 200);
      }}
      value={props.value ? props.value : ""}
      onBeforeChange={(e: any, d: any, v: string) => {
        props.onChange?.(v);
      }}
      options={{ ...props.options, ...defaultOpt }}
    />
  );
};
export const MyCodeMirror = React.forwardRef(myCodeMirror);

export default MyCodeMirror;

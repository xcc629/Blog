import * as React from "react";

import { Editor } from "@toast-ui/react-editor";

import "prismjs/themes/prism.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import Prism from "prismjs";

import styles from "@style/index";
import Div from "@src/common_component/Div";
import TitleInput from "../_component/TitleInput";

export default function WEditorContainer() {
  return (
    <div className={styles.main}>
      <Div padding="0 0 10px">
        <TitleInput />
      </Div>
      <div>
        <Editor
          initialValue={""}
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          height="100vh"
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          language="ko-KR"
        />
      </div>
    </div>
  );
}

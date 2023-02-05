import * as React from "react";

import { Editor } from "@toast-ui/react-editor";

import "prismjs/themes/prism.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import Prism from "prismjs";

import styles from "@style/index";
import Div from "@src/common_component/Div";

export default function WEditorContainer() {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const editorRef = React.useRef<any>(null);

  const handleEditor = () => {
    if (editorRef.current) {
      const editorIns = editorRef?.current?.getInstance();
      const content = editorIns.getHTML();
      console.log(content);
    }
  };

  return (
    <div className={styles.main}>
      <Div padding="0 0 10px">
        <input
          type="text"
          placeholder="제목"
          className={styles.titleInput}
          ref={titleRef}
        />
      </Div>
      <div>
        <Editor
          initialValue={""}
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          height="100vh"
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          language="ko-KR"
          ref={editorRef}
          onChange={handleEditor}
        />
      </div>
    </div>
  );
}

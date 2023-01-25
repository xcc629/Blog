import * as React from "react";
import { Editor } from "@toast-ui/react-editor";

import "prismjs/themes/prism.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import Prism from "prismjs";

export default function WEditor() {
  return (
    <div>
      <Editor
        initialValue={""}
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        height="100vh"
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </div>
  );
}

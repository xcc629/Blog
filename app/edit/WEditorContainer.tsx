"use client";

import * as React from "react";

import { Editor } from "@toast-ui/react-editor";

import "prismjs/themes/prism.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import Prism from "prismjs";

import styles from "@style/index";
import Div from "@src/common_component/Div";
import { useMutation } from "react-query";
import { createPost } from "@src/libs/api/post";
import Button from "@src/common_component/Button";
import { creatSeries } from "@src/libs/api/series";
import { HREF } from "@src/libs/const";

export interface IWEditorProps {
  seriesAllList: { id: number; title: string }[];
}

export default function WEditorContainer({ seriesAllList }: IWEditorProps) {
  const seriesRef = React.useRef<HTMLSelectElement>(null);
  const titleRef = React.useRef<HTMLInputElement>(null);
  const editorRef = React.useRef<any>(null);
  const postMutation = useMutation(createPost, {
    onSuccess(data) {
      const pageParam = data.data.data.id;
      window.location.href = HREF.post + `${pageParam}`;
    },
  });

  const renderSeriesAllList = () => {
    return seriesAllList.map((el) => (
      <option key={el.id} value={el.id}>
        {el.title}
      </option>
    ));
  };

  const handlePostButton = () => {
    if (titleRef.current && editorRef.current && seriesRef.current) {
      const seriesId = seriesRef.current.value;
      const editorIns = editorRef.current.getInstance();
      const content = editorIns.getHTML();
      const title = titleRef.current.value;

      console.log("content", content, typeof content);

      postMutation.mutate({
        title: title,
        seriesId: Number(seriesId),
        content: content,
      });
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.editorMenubar}>
        <div className={styles.editorSeriesSearch}>
          <select className={styles.ediotrSeriesSelect} ref={seriesRef}>
            {renderSeriesAllList()}
          </select>
        </div>
        <Button
          size={80}
          onClick={handlePostButton}
          backgroundColor="white100"
          borderRadius="8px"
        >
          제출하기
        </Button>
      </div>

      <Div padding="0 0 10px">
        <input
          type="text"
          placeholder="제목"
          className={styles.editorTitleInput}
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
        />
      </div>
    </div>
  );
}

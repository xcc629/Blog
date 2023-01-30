import { FormEvent, useCallback, useRef } from "react";

import Button from "@src/common_component/Button";
import Div from "@src/common_component/Div";
import Typograpy from "@src/common_component/Typograpy";
import { postLogin } from "@src/libs/api/auth";

import { useMutation } from "react-query";
import styles from "../_style";
import { tPostLoginRes } from "pages/api/postLogin";

export default function LoginContainer() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginMutation = useMutation(postLogin, {
    onError: (error) => {
      console.log(error);
    },
    onSuccess: ({ data }: { data: tPostLoginRes }) => {
      if (data.isLogin && data.userInfo) {
        window.sessionStorage.setItem(
          "isAuth",
          data.role + data.userInfo.id + data.userInfo.email
        );
      } else {
        window.alert("아이디, 비밀번호를 확인해주세요.");
      }
    },
    onSettled: () => {
      console.log("end");
    },
  });

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (emailRef.current && passwordRef.current) {
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;

        if (!emailValue || !passwordValue)
          return window.alert("이메일과 비밀번호를 입력해주세요.");

        loginMutation.mutate({ email: emailValue, password: passwordValue });
      }
    },
    [loginMutation]
  );

  return (
    <form style={{ padding: "100px" }} onSubmit={handleSubmit}>
      <Div>
        <Typograpy>아이디</Typograpy>
        <input type="email" ref={emailRef} className={styles.input} />
      </Div>
      <Div padding="20px 0 30px">
        <Typograpy>비밀번호</Typograpy>
        <input type="password" ref={passwordRef} className={styles.input} />
      </Div>
      <Div>
        <Button
          type="submit"
          size={340}
          height="50px"
          color="white"
          backgroundColor="green300"
          borderRadius="8px"
        >
          로그인하기
        </Button>
      </Div>
    </form>
  );
}

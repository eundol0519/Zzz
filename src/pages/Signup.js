import React from "react";
import styled from "styled-components";

import { Input } from "../elements";

import reset from "../static/images/icon/reset.svg";

// redux
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore.js";

//modules
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
  const dispatch = useDispatch();
  const errMessage = useSelector((store) => store.user.errMessage);

  //-- 아아디, 비밀번호, 비밀번호확인 , 이메일  --
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");

  //-- 오류 메시지 상태저장--
  const [idMessage, setIdMessage] = React.useState("");
  const [pwdMessage, setPwdMessage] = React.useState("");
  const [pwdCheckMessage, setPwdCheckMessage] = React.useState("");

  //-- 유효성 검사 --
  const [isId, setIsId] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPwdCheck, setIsPwdCheck] = React.useState(false);

  //---- 아이디 유효성 검사  ----
  const idCheck = (e) => {
    const idRegExp = /^[a-zA-Z0-9]{5,10}$/;
    const idCurrent = e.target.value;
    setId(idCurrent);
    if (!idRegExp.test(idCurrent)) {
      setIdMessage("5글자 이상 10글자 미만으로 입력해주세요.");
      setIsId(false);
    } else {
      setIdMessage("사용 가능한 아이디입니다.");
      setIsId(true);
    }
  };

  //---- 비밀번호 유효성 검사  ----
  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    const passwordCurrent = e.target.value;
    setPwd(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPwdMessage("숫자+영문자 조합으로 8~20자리로 입력해주세요!");
      setIsPassword(false);
    } else {
      setPwdMessage("안전한 비밀번호에요 : )");
      setIsPassword(true);
    }
  };

  //---- 비밀번호 중복 확인  ----
  const onChangePasswordCheck = (e) => {
    const pwdCurrent = e.target.value;
    setPwdCheck(pwdCurrent);
    if (pwd === pwdCurrent) {
      setPwdCheckMessage("비밀번호를 똑같이 입력했어요 : )");
      setIsPwdCheck(true);
    } else {
      setPwdCheckMessage("비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ");
      setIsPwdCheck(false);
    }
  };

  // ---- 회원가입 버튼 클릭 ----
  const signUpClick = () => {
    if (!isId || !isPassword || !isPwdCheck) {
      window.alert("아이디, 패스워드, 이메일을 정확하게  입력해주세요");
      return;
    }

    dispatch(userActions.signupDB(id, pwd));

    //중복 아이디 일 경우
    if (errMessage) {
      setIdMessage("중복된 아이디 입니다");
      setIsId(false);
    }
  };

  // React.useEffect(() => {
  //   //회원가입이 완료될때
  //   if (is_Signup) {
  //     setSingupok(true);
  //   }
  // }, [is_Signup]);

  return (
    <Container>
      <Title>회원가입</Title>
      <Input
        resetInput
        placeholder="아이디"
        type="text"
        value={id}
        onChange={idCheck}
        src={reset}
        alt="resetButton"
        onClick={() => {
          setId("");
        }}
      />

      {id.length > 0 ? (
        <Span className={`${isId ? "success" : "error"}`}>{idMessage}</Span>
      ) : (
        <Span>영문 대,소문자, 숫자를 포함(5-10자)</Span>
      )}

      {/* -- 비밀번호 --  */}
      <Input
        resetInput
        placeholder="비밀번호"
        type="password"
        value={pwd}
        onChange={onChangePassword}
        src={reset}
        alt="resetButton"
        onClick={() => {
          setPwd("");
        }}
      />
      {pwd.length > 0 ? (
        <Span className={`${isPassword ? "success" : "error"}`}>
          {pwdMessage}
        </Span>
      ) : (
        <Span>영문 대,소문자, 숫자를 포함(8-20자)</Span>
      )}

      {/* -- 비밀번호 확인 -- */}
      <Input
        placeholder="비밀번호 확인"
        type="password"
        value={pwd_check}
        onChange={onChangePasswordCheck}
      />
      {pwd_check.length > 0 ? (
        <Span className={`${isPwdCheck ? "success" : "error"}`}>
          {pwdCheckMessage}
        </Span>
      ) : (
        <Span>영문 대,소문자, 숫자를 포함(8-20자)</Span>
      )}
      {/* -- 회원가입 버튼 --*/}
      <Button onClick={signUpClick}>회원가입</Button>
      <Login
        type="submit"
        onClick={() => {
          history.push("/login");
        }}
      >
        <p>
          이미계정이 있으신가요? <span>로그인</span>
        </p>
      </Login>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 ${({ theme }) => theme.paddings.xxxxl};
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  margin: ${({ theme }) => theme.margins.xxxxl} 0;
`;

const Span = styled.span`
  padding-top: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray_3};
  font-size: ${({ theme }) => theme.fontSizes.ssmall};
  display: flex;
  margin-bottom: ${({ theme }) => theme.margins.xxxxl};
  &.success {
    color: #4791ff;
  }
  &.error {
    color: #ff473d;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  background-color: ${({ theme }) => theme.colors.main_1};
`;
const Login = styled.div`
  width: 100%;
  margin: 20px auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  box-sizing: border-box;
  & p {
    display: inline-block;
    position: relative;
    ::before {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: -4px;
      left: 0;
      z-index: 100;
      background-color: ${({ theme }) => theme.colors.white};
    }
    & span {
      color: ${({ theme }) => theme.colors.main_1};
    }
  }
`;

export default Signup;

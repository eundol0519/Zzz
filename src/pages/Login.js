import React, { useState } from "react";
import styled from "styled-components";

import { history } from "../redux/configureStore.js";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

// --- components ---
import Success from "../components/Success";
import Kakao from "../components/Kakao";

// --- elements ---
import { Input } from "../elements";

//--- shared ---
import { IdCheck, PwdCheck } from "../shared/common";

// --- images ---
import { reset, kakao } from "../static/images";
// import reset from "../static/images/icon/reset.svg";
// import kakao from "../static/images/login/kakao.png";

const Login = () => {
  const dispatch = useDispatch();
  const errMessage = useSelector((store) => store.user.errMessage); //에러 메세지
  const first_signup = useSelector((store) => store.user.is_signup); // 회원가입 완료

  const [inputs, setInputs] = useState({
    id: "",
    pwd: "",
  });
  const { id, pwd } = inputs;

  React.useEffect(() => {
    if (first_signup === true) {
      const timeout = setTimeout(() => {
        dispatch(userActions.firstSignup());
      }, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  //-- 오류메시지 상태저장--
  const [Message, setMessage] = React.useState("");

  //-- 유효성 검사 --
  const [isState, setIsState] = React.useState(true);

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  //-- input 초기화 --
  const onReset = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: "",
    });
  };
  //-- 로그인 클릭시 --
  const loginClick = () => {
    if (!IdCheck(id) || !PwdCheck(pwd)) {
      setMessage("입력한 내용을 다시 확인해주세요");
      setIsState(false);
      console.log(errMessage);
    } else {
      setIsState(true);
      dispatch(userActions.loginDB(id, pwd));
    }
  };
  //
  React.useEffect(() => {
    setIsState(false);
    setMessage(errMessage);
  }, [errMessage]);

  // 서버에서 받아온 요청이 다를 경우
  // if (errMessage) {
  //   // setMessage("아이디 또는 비밀번호를 다시 확인해주세요.");
  //   // setIsState(false);
  // }

  return (
    <Container>
      <Title>로그인</Title>
      <InputBox>
        <Input
          resetInput
          placeholder="아이디를 입력해주세요"
          name="id"
          value={id}
          onChange={onChange}
          src={reset}
          alt="resetButton"
          onClick={onReset}
        />
      </InputBox>
      <InputBox>
        <Input
          resetInput
          placeholder="비밀번호를 입력해주세요"
          type="password"
          name="pwd"
          value={pwd}
          onChange={onChange}
          src={reset}
          alt="resetButton"
          onClick={onReset}
        />
      </InputBox>

      {!isState ? <Span>{Message}</Span> : <Span />}
      {/* {!isState ? (
        <Span className={`${!isState && "error"}`}>{Message}</Span>
      ) : (
        <Span />
      )} */}

      <Button type="submit" onClick={loginClick}>
        로그인
      </Button>
      <SignUp
        type="submit"
        onClick={() => {
          history.push("/signup");
        }}
      >
        <p>회원가입 하기</p>
      </SignUp>
      <Social>or</Social>
      <Kakao />
      {/* 회원가입 성공 유저 팝업 */}
      {first_signup && (
        <Success alt="회원가입 성공" text="회원가입에 성공했습니다" />
      )}
    </Container>
  );
};

// --- styled-components ---
const Container = styled.div`
  padding: 50px ${({ theme }) => theme.paddings.xxxxl};
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  margin: ${({ theme }) => theme.margins.xxxxl} 0;
`;

const InputBox = styled.div`
  &:nth-child(2) {
    margin-bottom: ${({ theme }) => theme.margins.xxxxl};
  }
`;

const Span = styled.span`
  height: 54px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.ssmall};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff473d;
  transition: opacity 2s ease 5s;
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

const SignUp = styled.div`
  margin: 20px auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  box-sizing: border-box;
  cursor: pointer;
  & p {
    display: inline-block;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

const Social = styled.div`
  position: relative;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: "Roboto", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.ssmall};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  ::before,
  ::after {
    content: "";
    width: 40%;
    height: 1px;
    position: absolute;
    top: 57%;
    background-color: ${({ theme }) => theme.colors.gray_7};
  }
  ::before {
    left: 0;
  }
  ::after {
    right: 0;
  }
`;

const Icon = styled.div`
  width: 44px;
  height: 44px;
  background-image: url(${kakao});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto 10px auto;
  cursor: pointer;
`;

export default Login;

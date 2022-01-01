import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import nextIcon from "../images/icon/nextIcon.svg";

const Main = (props) => {
  const history = useHistory();

  React.useEffect(() => {
    const noticeSet = JSON.parse(localStorage.getItem("noticeSet"));
    const token = localStorage.getItem("token");

    if (!noticeSet && token) {
      history.push("/pushNotication");
    } else {
      console.log("알림 설정 했어요");
    }
  }, []);

  return (
    <>
      <Category
        path="/asmr"
        category="자연"
        title="네이쳐"
        subTitle="편안한 자연 속으로"
      ></Category>
      <Category
        path="/asmr"
        category="공간"
        title="스페이스"
        subTitle="다른 공간으로 여행"
      ></Category>
      <Category
        path="/asmr"
        category="물체"
        title="오브젝트"
        subTitle="차분히 바라보는 물건들"
      ></Category>
      <Category
        path="/asmr"
        category="전체"
        title="모든 소리"
        subTitle="모든 소리 들어보기"
      ></Category>
    </>
  );
};

const Category = (props) => {
  const history = useHistory();
  return (
    <>
      <CategoryStyle
        style={{ display: "flex", justifyContent: "space-between" }}
        onClick={() => {
          history.push({
            pathname: `${props.path}`,
            category: `${props.category}`,
          });
        }}
      >
        <div style={{ height: "80px", lineHeight: "80px" }}>
          <Text>{props.title}</Text>
          <Text>
            <small>{props.subTitle}</small>
          </Text>
        </div>
        <div>
          <img src={nextIcon}></img>
        </div>
      </CategoryStyle>
    </>
  );
};

const CategoryStyle = styled.div`
  width: 335px;
  height: 125px;
  line-height: 125px;
  border-radius: 12px;
  background-color: gray;
  margin: 15px auto;
`;

const Text = styled.p`
  height: 5px;
  text-align: left;
`;

export default Main;

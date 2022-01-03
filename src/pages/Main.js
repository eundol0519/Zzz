import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import nextIcon from "../static/images/icon/nextIcon.svg";
import PushNoticationPop from "../pages/PushNoticationPop";

import Swiper from "../components/Swiper";

const Main = (props) => {
  const [noticationModal, setNoticationModal] = React.useState(false);

  React.useEffect(() => {
    const noticeSet = JSON.parse(localStorage.getItem("noticeSet"));
    const token = localStorage.getItem("token");

    if (!noticeSet && token) {
      setNoticationModal(true);
    } else {
      console.log("알림 설정 했어요");
    }
  }, []);

  return (
    <Container>
      {/* swiper 부분 */}
      <Swiper />
      {/* <Asmr> */}
      {/* 카테고리 부분 */}
      {/* <Title>당신의 편안한 밤을 위해</Title> */}
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
      {/* </Asmr> */}

      {/* 첫 로그인 시 알림 설정 팝업 부분 */}
      {noticationModal && (
        <PushNoticationPop
          modal={noticationModal}
          setNoticationModal={setNoticationModal}
        ></PushNoticationPop>
      )}
    </Container>
  );
};

const Category = (props) => {
  const history = useHistory();
  return (
    <>
      <CategoryStyle
        // style={{ display: "flex", justifyContent: "space-between" }}
        onClick={() => {
          history.push({
            pathname: `${props.path}`,
            category: `${props.category}`,
          });
        }}
      >
        <div
        // style={{ height: "80px", lineHeight: "80px" }}
        >
          <Text>{props.title}</Text>
          <Text>
            <small>{props.subTitle}</small>
          </Text>
        </div>
        <div>
          <img src={nextIcon} alt="nextIcon" />
        </div>
      </CategoryStyle>
    </>
  );
};

const Container = styled.div`
  overflow-y: scroll;
  height: 88%;
  padding: ${({ theme }) => theme.horizontalityInterval.base};
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CategoryStyle = styled.div`
  /* width: 100%; */
  /* line-height: 125px; */
  /* border-radius: 12px; */
  background-color: gray;
  /* margin: 15px auto; */
`;

const Text = styled.p`
  /* height: 5px;
  text-align: left; */
`;

export default Main;

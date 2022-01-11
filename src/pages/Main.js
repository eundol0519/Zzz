import React from "react";
import styled from "styled-components";

import FirstNotification from "../pages/FirstNotification";
import Swiper from "../components/MainSwiper";
import Category from "../components/main/Category";

import all from "../static/images/banner/all_1005px.png";
import nature from "../static/images/banner/nature_1005px.png";
import object from "../static/images/banner/object_1005px.png";
import space from "../static/images/banner/space_1005px.png";

const Main = (props) => {
  const [noticationModal, setNoticationModal] = React.useState(true);

  React.useEffect(() => {
    const noticeSet = JSON.parse(localStorage.getItem("noticeSet"));
    const token = localStorage.getItem("token");

    if (!noticeSet && token) {
      setNoticationModal(true);
    }
  }, []);

  return (
    <Container>
      {/* swiper 부분 */}
      <Swiper />
      {/* <Asmr> */}
      {/* 카테고리 부분 */}
      <Title>당신의 편안한 밤을 위해</Title>
      <Category
        path="/asmr"
        category="네이쳐"
        title="네이쳐"
        bannerImage={nature}
        subTitle="편안한 자연 속으로"
      />
      <Category
        path="/asmr"
        category="플레이스"
        title="플레이스"
        bannerImage={space}
        subTitle="다른 공간으로 여행"
      />
      <Category
        path="/asmr"
        category="오브젝트"
        title="오브젝트"
        bannerImage={object}
        subTitle="차분히 바라보는 물건들"
      />
      <Category
        path="/asmr"
        category="전체"
        title="모든 소리"
        bannerImage={all}
        subTitle="모든 소리 들어보기"
      />
      {/* </Asmr> */}

      {/* 첫 로그인 시 알림 설정 팝업 부분 */}
      {noticationModal && (
        <FirstNotification
          modal={noticationModal}
          setNoticationModal={setNoticationModal}
        ></FirstNotification>
      )}
    </Container>
  );
};

const Container = styled.div`
  overflow-y: scroll;
  height: 720px;
  padding: 50px ${({ theme }) => theme.paddings.xxxxl};
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 500px) {
    height: 89vh;
  }
`;
const Title = styled.p`
  padding: 30px 0 20px 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: ${({ theme }) => theme.lineHeight.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
`;

export default Main;

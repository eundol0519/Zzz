import React from "react";
import styled from "styled-components";

import { history } from "../../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as asmrActions } from "../../redux/modules/asmr";

// --- components ---
import ModalPopUp from "../ModalPopUp";
import Input from "../../elements/Input";
import Button from "../../elements/Button";

// --- images ---
import reset from "../../static/images/icon/reset.svg";

const PlayList = (props) => {
  const [title, setTitle] = React.useState();
  const dispatch = useDispatch();

  const close = () => {
    props.setPlayListModal(false);
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const titleReset = (e) => {
    setTitle("");
  };

  const titleSubmit = () => {
    let mixTitle = title;
    if (!title) {
      mixTitle = "나의 믹스";
    }

    const playLists = {
      mixTitle: mixTitle,
      mixList: [],
    };

    if (history.audio1) {
      playLists.mixList.push({
        asmrUrl: history.audio1.src,
        sound: String(history.audio1.volume),
        iconUrl: history.icon1,
        title: history.title1,
      });
    }

    if (history.audio2) {
      playLists.mixList.push({
        asmrUrl: history.audio2.src,
        sound: String(history.audio2.volume),
        iconUrl: history.icon2,
        title: history.title2,
      });
    }

    if (history.audio3) {
      playLists.mixList.push({
        asmrUrl: history.audio3.src,
        sound: String(history.audio3.volume),
        iconUrl: history.icon3,
        title: history.title3,
      });
    }

    if (history.audio4) {
      playLists.mixList.push({
        asmrUrl: history.audio4.src,
        sound: String(history.audio4.volume),
        iconUrl: history.icon4,
        title: history.title4,
      });
    }

    dispatch(asmrActions.setPlayListDB(playLists));
    props.setPlayListModal(false);

    history.push("/asmr");
  };

  return (
    <>
      <ModalPopUp close={close}>
        <Wrap>
          <Title>나의 믹스 만들기</Title>
          <Input
            resetInput={title === "" || title === undefined ? false : true}
            src={reset}
            alt="resetButton"
            placeholder="나의 믹스(믹스명은 최대 18자 입력 가능)"
            name="mixTitle"
            height="52px"
            marginT="20px"
            type="text"
            onClick={titleReset}
            value={title}
            onChange={titleChange}
            max="18"
          ></Input>
          <Button marginT="20" _onClick={titleSubmit}>
            내 믹스 저장하기
          </Button>
        </Wrap>
      </ModalPopUp>
    </>
  );
};

// --- styled-componetns ---
const Wrap = styled.div`
  width: 335px;
  padding: ${({ theme }) => theme.paddings.xxxxl};
  box-sizing: border-box;
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  line-height: ${({ theme }) => theme.lineHeight.lg};
`;

export default PlayList;

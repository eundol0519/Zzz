import React from "react";

import Charater from "../elements/Charater";

import { useDispatch, useSelector } from "react-redux";
// import { actionCreators as userActions } from "../redux/modules/diary";

const SleepBox = (props) => {
  const { previewSleep } = props;
  const dispatch = useDispatch();

  const [arr, setArr] = React.useState([
    { text: "부족++", score: "1" },
    { text: "부족", score: "3" },
    { text: "적당", score: "5" },
    { text: "과잉", score: "4" },
    { text: "과잉++", score: "2" },
  ]);

  return (
    <div>
      {/* 편집 onClick on:off */}
      {props.edit ? (
        <div style={{ display: "flex" }}>
          {arr.map((arr, idx) => {
            return (
              <div key={idx}>
                <Charater
                  shape="sleep"
                  size="40"
                  name={arr.score}
                  sleepNumber={idx + 1}
                  _onClick={props._onClick}
                  is_click={previewSleep === String(idx + 1) ? true : false}
                >
                  {arr.text}
                </Charater>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          {arr.map((arr, idx) => {
            return (
              <div key={idx}>
                <Charater
                  shape="sleep"
                  size="40"
                  name={arr.score}
                  sleepNumber={idx + 1}
                >
                  {arr.text}
                </Charater>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SleepBox;

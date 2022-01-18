import React from "react";
import styled from "styled-components";

// --- images ---
import NoInfo from "../../static/images/diary/NoInfo.png";

const NoRecord = (props) => {
  return (
    <Wrap>
      <Image/>
    </Wrap>
  );
};

// --- styled-components ---
const Wrap = styled.div`
  height: 100vh;
`;

const Image = styled.div`
  width: 100%;
  height: inherit;
  background: url(${NoInfo});
  background-size: 100%;
  background-position: 100%;
  background-repeat: no-repeat;
`;

export default NoRecord;

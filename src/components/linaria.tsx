import { styled } from '@linaria/react';
import React, { useEffect, useState } from "react";

const Container = styled.div`
height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  display: flex;
  flex-flow: row wrap;
`

const Box = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid white;

`
const Linaria = () => {
  const [toggle, setToggle] = useState(true);

  const renderBoxes = () => {
    let boxes = [];
    for (var i = 0; i < 1; i++) {
      boxes.push(
        <Box color={toggle ? 'red' : 'blue'} key={i} ></Box>
      );
    }
    return boxes;
  };

  let startTime = new Date().getTime();

  useEffect(() => {
    const repeatToggling = setInterval(() => {
      console.log(new Date().getTime() - startTime);
      if (new Date().getTime() - startTime > 5000) {
        clearInterval(repeatToggling);
        return;
      }

      setToggle((isToggled) => !isToggled);
    }, 1000);
  }, []);
  return (
    <Container>
      {renderBoxes()}
    </Container>
  )
}

export default Linaria
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

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
  ${({ color }) => color === 'red' ?
        css`
  background-color: red;
` : css`
  background-color: blue;
`
    }
`

const StyledCom = () => {
    const [toggle, setToggle] = useState(true);

    const renderBoxes = () => {
        let boxes = [];
        for (var i = 0; i < 5000; i++) {
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
            if (new Date().getTime() - startTime > 10000) {
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

export default StyledCom
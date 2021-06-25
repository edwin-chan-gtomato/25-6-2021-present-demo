import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { numberToRender } from "./shared";

const Container = styled.div`
height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  display: flex;
  flex-flow: row wrap;
`

const Box1 = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid white;
  background-color: red;
`
const Box2 = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid white;
  background-color: blue;
`

const StyledCom = () => {
    const [toggle, setToggle] = useState(true);

    const renderBoxes = () => {
        let boxes = [];
        for (var i = 0; i < numberToRender; i++) {
            if (toggle) {
                boxes.push(
                    <Box1 key={i} ></Box1>
                );
            }
            else {
                boxes.push(
                    <Box2 key={i} ></Box2>
                );
            }
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

export default StyledCom
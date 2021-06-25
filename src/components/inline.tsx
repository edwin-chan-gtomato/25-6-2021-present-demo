import React, { useEffect, useState } from "react";
import { numberToRender } from "./shared";

const Inline = () => {
    const [toggle, setToggle] = useState(true)
    const styles = {
        blue: { 'backgroundColor': 'blue' },
        red: { 'backgroundColor': 'red' },
        box: {
            'height': '50px',
            'width': '50px', 'border': '1px solid white',
            '&:hover': {
                color: 'black'
            }
        },
        container: {
            'height': '100vh',
            'width': '100vw',
            'overflow-y': 'scroll',
            'display': 'flex',
            'flex-flow': 'row wrap',
            '@media (max-width: 200px)': {
                '.box': {
                    'background-color': 'green'
                }
            }
        },

    }

    const renderBoxes = (boxStyle: any) => {
        let boxes = [];
        for (var i = 0; i < numberToRender; i++) {
            boxes.push(
                <div style={boxStyle} key={i}>
                </div>
            )
        }
        return boxes;
    }
    let startTime = new Date().getTime();

    useEffect(() => {

        const repeatToggling = setInterval(() => {
            console.log(new Date().getTime() - startTime)
            if (new Date().getTime() - startTime > 5000) {
                clearInterval(repeatToggling)
                return
            };


            setToggle((isToggled) => !isToggled)
        }, 1000)

    }, [])

    let boxStyle = toggle ?
        { ...styles.box, ...styles.blue } :
        { ...styles.box, ...styles.red }
    return (
        <div style={styles.container}>
            {renderBoxes(boxStyle)}
        </div>
    )
}

export default Inline
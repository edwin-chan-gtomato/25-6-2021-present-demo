import React, { useEffect, useState } from "react";
import styles from "./cssModules.module.css";
import { numberToRender } from "./shared";

const CssModules = () => {
    const [toggle, setToggle] = useState(true);

    const renderBoxes = () => {
        let boxes = [];
        for (var i = 0; i < numberToRender; i++) {
            boxes.push(
                <div key={i} className={[styles['box'], styles[toggle ? "red" : "blue"]].join(' ')}></div>
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

    return <div className={styles['container']}>{renderBoxes()}</div>;
};

export default CssModules;

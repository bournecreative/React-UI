import React from 'react';
import Accordion from "./Accordion";
import "../../css/main.css";


const items = [
    {
        title: "React Accordion.",
        content: "React accordion content is managed as state."
    },
    {
        title: "React Accordion is using Hooks.",
        content: "Using hooks rather then class components."
    },
    {
        title: "Baby Yoda is the best!",
        content: "100% true."
    }
]

export default () => {
    return (
        <div className="container">
            <Accordion items={items}></Accordion>
        </div>
    )
}
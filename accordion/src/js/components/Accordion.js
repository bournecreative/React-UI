import React, { useState } from 'react';
import "../../css/normalize.css";
import "../../css/main.css";
import "../../css/accordion.css";

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null)

    //helper functions
    const onAccordionClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? "is-expanded" : "";

        return (
            <div className="accordion" key={index}>
                <div className={"accordion-group " + active} onClick={() => onAccordionClick(index)}>
                    <div className="accordion-heading">
                        <span>{item.title}</span>
                        <button className="accordion-button text-regular"></button>
                    </div>
                    <div className={"accordion-detail" + active} >
                        <p className="text-regular">{item.content}</p>
                    </div>
                </div>
            </div>
        )
    })

    return renderedItems
}

export default Accordion;


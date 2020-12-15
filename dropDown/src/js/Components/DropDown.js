import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "../../css/styles.css";

const DropDown = ({ options, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {

        const bodyClick = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                return
            }
            setOpen(false)
        }
        document.body.addEventListener('click', bodyClick);

        return (() => {
            document.body.removeEventListener('click', bodyClick)
        })

    }, []);

    const toggleBackground = (option) => {
        gsap.to('body', { duration: 1, backgroundColor: option.value, ease: 'none' })
    }

    const renderedOptions = options.map((option) => {
        if (option.label === selected.label) {
            return null
        }
        return (
            <div className="item"
                key={option.label}
                onClick={() => {
                    onSelectedChange(option)
                    toggleBackground(option)
                }}>
                {option.label}</div>
        )
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">
                    Select a background color!
                </label>
                <div className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    onClick={() => {
                        setOpen(!open)
                    }}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible' : ''} transition`}>
                        {renderedOptions}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown;
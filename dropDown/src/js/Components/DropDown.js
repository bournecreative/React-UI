import React from 'react';


const DropDown = ({ options, selected, onSelectedChange }) => {
    const renderedSelection = options.map((option) => {
        return (
            <div className="item"
                key={option.label}
                onClick={() => onSelectedChange(option)}>
                {option.label}</div>
        )
    })

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">

                </label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">
                        {renderedSelection}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown;
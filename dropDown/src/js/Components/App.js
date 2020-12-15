import React, { useState } from 'react';
import DropDown from "./DropDown";

const App = () => {
    const options = [{
        label: "option1",
        value: "blue"
    },
    {
        label: "option2",
        value: "green"
    },
    {
        label: "option3",
        value: "yellow"
    }]
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <DropDown
                selected={selected}
                onSelectedChange={setSelected}
                options={options} />
        </div>
    )
}

export default App;
import React, { useState } from 'react';
import DropDown from "./DropDown";

const App = () => {
    const options = [{
        label: "dark Option",
        value: "#262626"
    },
    {
        label: "light Option",
        value: "#ccc"
    },
    {
        label: "bright option",
        value: "teal"
    }]
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <DropDown
                label="Select to update background color!"
                selected={selected}
                onSelectedChange={setSelected}
                options={options} />
        </div>
    )
}

export default App;
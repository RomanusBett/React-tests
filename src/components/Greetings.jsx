import React, { useState } from "react";
import Output from "./Output";
import Async from "./Async";
const Greetings = () => {
    const [changedText, setChangedText] = useState(false);

    const changeTheText = ()=>{
        setChangedText(true);
    }
    return(
        <div>
            <h1>Hello World!</h1>
            {!changedText && <Output>Welcome to This test</Output>}
            {changedText && <Output>Changed text</Output>}
            <button onClick={changeTheText}>Change the text</button>
            <Async />
        </div>
    )
}
export default Greetings;
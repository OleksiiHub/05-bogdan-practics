import { useState } from "react"

function Button({ count, onClick, text, index}) {

    const [clickButton, setClickButton] = useState(0)
    function clickButtons() {
        setClickButton(clickButton + 1)
    }

    return (
        <button key = {index} onClick={() => onClick(count + 1, clickButtons())
        }>{text}: {clickButton}</button >
    )
}

export default Button

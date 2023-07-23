import { useState } from "react"

function Button({ count, onClick }) {
    const [clickButton, setClickButton] = useState(0)
    function clickButtons() {
        setClickButton(clickButton + 1)
    }
    console.log(clickButton)
    return (
        <button onClick={
            () => onClick(count + 1, clickButtons())
        }> Click Me: {clickButton}</button >
    )
}

export default Button

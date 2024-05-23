import React, { useState } from "react";

const InputColor = () => {
    const [inputValue, setInputValue] = useState("");
    const [colorInput, setColorInput] = useState(null);

    const handleChange = (e) => {
        const { value } = e.target;
        setInputValue(value);

        if (value.length === 7) {
            const hexToRgb = (hex) => {
                const match = hex.match(/^#?([a-f\d])([a-f\d])([a-f\d])$/i);
                if (match) {
                    const [, r, g, b] = match;
                    return [r, r, g, g, b, b].map((x) => parseInt(x + x, 16));
                }
                return hex.substring(1).match(/.{2}/g).map((x) => parseInt(x, 16));
            };

            const rgbValue = hexToRgb(value);
            setColorInput(`rgb(${rgbValue.join(", ")})`);
        } else {
            setColorInput(null);
        }
    };

    return (
        <form className="classForm">
            <input
                className="inputText"
                placeholder="Введите цвет"
                value={inputValue}
                onChange={handleChange}
            />
            <div className="readerRgb">{colorInput || ""}</div>
            <div className="container" style={{ background: colorInput || "none" }}></div>
        </form>
    );
};

export default InputColor;
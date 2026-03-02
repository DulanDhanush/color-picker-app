import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#6366f1");

  const handleColorChange = (e) => setColor(e.target.value);

  return (
    <div className="color-picker-container">
      <h1>Studio Color</h1>

      <div
        className="color-display"
        style={{
          backgroundColor: color,

          boxShadow: `0 20px 40px -10px ${color}66`,
        }}
      >
        <p>{color.toUpperCase()}</p>
      </div>

      <div className="input-group">
        <label htmlFor="picker">HEX Palette</label>
        <input
          id="picker"
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
}

export default ColorPicker;

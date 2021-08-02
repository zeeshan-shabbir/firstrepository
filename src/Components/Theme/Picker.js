import React, { useState } from 'react'
import { ChromePicker } from 'react-color';
import "./picker.css"
export default function Picker() {
    var root = document.querySelector(':root');
    const [secColor, setSecColor] = useState("orange")
    const [priColor, setPriColor] = useState("#0008ffcc")
    const [showpicker, setshowpicker] = useState(false)
    const [showPri, setShowPri] = useState(false)
    const [showSec, setShowSec] = useState(false)
    root.style.setProperty('--secondary_color', secColor);
    root.style.setProperty('--primary_color', priColor);
    return (
        <div className="picker">
            <button  onClick={() => setshowpicker(showpicker => !showpicker)}>{showpicker ? "X" : "Theme"}</button>

            {showpicker && <div>
                <button className="pBtn" onClick={() => setShowPri(showPri => !showPri)}>{showPri ? "X" : "Primary Color"}</button>
                {showPri && (<ChromePicker
                   color={priColor}
                   onChange={(priColor) => { setPriColor(priColor.hex) }}
                />
                )}

            </div>}
          
            {showpicker && (
                  <div>
                  <button onClick={() => setShowSec(showSec => !showSec)}>{showSec ? "X" : "secondary Color"}</button>
                  {showSec && (
                      <ChromePicker
                      color={secColor}
                      onChange={(secColor) => { setSecColor(secColor.hex) }}
                          
                      />
                  )}
              </div>
            )}

        </div>
    )
}

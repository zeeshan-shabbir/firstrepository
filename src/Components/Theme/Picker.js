import React , {useState} from 'react'
import { SketchPicker } from 'react-color';
export default function Picker() {
    var root = document.querySelector(':root');
    const [color,setcolor]=useState("orange")
    const [showpicker,setshowpicker]=useState(false)
    console.log(color);
    root.style.setProperty('--secondary_color', color);
    return (
        <div>
            <button onClick={()=>setshowpicker(showpicker => !showpicker)}>{showpicker ? "close X" :"pick a color"}</button>
            {showpicker && ( <SketchPicker 
                 color={ color}
                 onChangeComplete={ (color) => { setcolor(color.hex)} }
             />
             )}
            
        </div>
    )
}

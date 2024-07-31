import {Link} from "react-router-dom";
import {cloneElement, useState} from "react";


export default function MenuNavigation({icon, text, handleClick, isSelected}) {
    const textClass = isSelected ? "text-fontColor": "text-hintTextColor";
    const color = isSelected ? "text-fontColor": "text-hintTextColor";
    return (
        <button type="button" className="flex items-center gap-2" onClick={handleClick}>
            <div>
                {cloneElement(icon, {className: color})}
            </div>
            <div className={textClass}>{text}</div>
        </button>

    )
}
import React from 'react';
import './picker.css';

const Picker = ({color, indexColor, handleClick, countIncrement}) => {
    let class_name = color + ' picker';

    return (
        <div className={class_name}  onClick={(e) => {
            countIncrement();
            handleClick(indexColor)
        }}></div>
    );
}

export default Picker;
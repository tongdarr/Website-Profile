import React from 'react';

const Image = props =>{

    return (
        <div id={props.class}>
            <div className="ptext">
                <span className="border">
                    {props.text}
                </span>
            </div>
           
        </div>
    );
}

export default Image;
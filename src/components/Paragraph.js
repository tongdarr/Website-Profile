import React from 'react';

const Paragraph = props =>{
    return (
        <section className="section section-dark" id={props.id}>
            <h2 className="section-header">{props.header}</h2>
            <div>
                {props.text}
            </div>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quas quo. Excepturi sequi quidem quaerat voluptatem eos! Unde recusandae quasi voluptatum itaque quas laboriosam inventore reprehenderit exercitationem, natus accusantium! Minima.</p> */}
        </section>
    );
}

export default Paragraph;

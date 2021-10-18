import React from 'react'

const Service = (props) => {
    return (
        <div className="services-box">
                            <img src={props.img} alt="/"/>
                            <div className="services-content">
                                <h5 className="services-head">{props.title}</h5>
                                <p className="services-description mb-0">{props.desc}</p>
                            </div>
        </div>
    );
};

export default Service;

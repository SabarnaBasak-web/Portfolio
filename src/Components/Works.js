import React from 'react';

import { cardData } from '../assets/Data/Data';

function Works() {
    return (
        <div className="work-container">
            <h1 className="work-heading">My works </h1>
            <div className="work-content">
                {cardData.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <div className="card-heading">
                                {item.title}
                                <br />
                                <a
                                    href={item.link}
                                    className="card-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {item.link}
                                </a>
                            </div>
                            <div className="card-body">
                                <img src={item.image} alt="{item.title}" />
                                <p className="card-body_content">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Works

import React from 'react';


function Works({CraftomaniaImg, EnergysolutionImg, SocietyImg, BoxShadow}) {

    return (
        <div className="work-container">
            <h1 className="work-heading">My works </h1>
            <div className="work-content">
                <div className="card">
                    <div className="card-heading">
                        Society of the Saviour <br /> <a href="https://www.thesocietyofthesaviour.org.in" className="card-link" target="_blank" rel="noreferrer" > www.thesocietyofthesaviour.org.in </a>
                    </div>
                    <div className="card-body">
                        <img src={SocietyImg} alt="societyofthesaviour" />
                        <p className="card-body_content">
                            Website of a NGO school based in Kolkata
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-heading">
                        Craftomania <br /><a href="https://www.craftomania.in" target="_blank" rel="noreferrer" className="card-link" > www.craftomania.in </a>
                    </div>
                    <div className="card-body">
                        <img src={CraftomaniaImg} alt="craftomania " />
                        <p className="card-body_content">
                            An ecommerce website for handicrafts and boutique items
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-heading">
                        CSS Box shadow generator <br /><a href="https://my-project-1579578093491.web.app/" target="_blank" rel="noreferrer" className="card-link"> https://my-project-1579578093491.web.app/ </a>
                    </div>
                    <div className="card-body" >
                        <img src={BoxShadow} alt="portfolio" />
                        <p className="card-body_content">
                            Box shadow generator for css elements
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-heading">
                        Energy Solutions <br /><a href="https://www.energysolutions.net.in" className="card-link"  target="_blank" rel="noreferrer"> www.energysolutions.net.in </a>
                    </div>
                    <div className="card-body" >
                        <img src={EnergysolutionImg} alt="portfolio" />
                        <p className="card-body_content">
                            Website of a company specializes in manufacturing of Steam Boilers, hot water Generators, and Thermic fluid heaters
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works

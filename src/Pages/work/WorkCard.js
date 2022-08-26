import React from 'react'

export default function WorkCard(props) {
    const { data } = props;
    return (

        <div className="works">
            <div className="working">
                {/* <i> */}
                <img src={data.image} alt="" className="work-img" />
                {/* </i> */}
            </div>
            {/* <div className="proTitle">
            <h1 className="proName">
                    {data.name}
                </h1>
            </div> */}
            <div className="work-intro center flexallcenter flex-direction-column">
                <h1 className="proName">
                    {data.name}
                </h1>
                <p className="proIntro">
                    {data.description}
                </p>
                <div>
                    <a href={data.link} className="projLink" target="_blank" >
                        See Project
                    </a>
                </div>
            </div>
                    
        </div>

    )
}

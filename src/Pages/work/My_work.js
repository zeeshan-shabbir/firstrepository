import React from 'react'
import '../work/work.css'
import WorkData from "./WorkData"
import WorkCard from './WorkCard';




export default function My_work() {
    const style = {
        fontSize: 60
      };
    return (
        <>
        <div className="container-100 work-cont">
            <div className="container capitalize">
                <div className="work-heading center">
                    <h1 className="work-h1">
                        my work
                    </h1>
                </div>
                <div className="workRows flex align-center justify-between ">
                {WorkData.slice(0,3).map((item) => (
                        
                        <WorkCard key={item.id}  data={item}></WorkCard>

                  
                ))}
                   
                </div>

            </div>
        </div>
            <div className="hrline"></div>
            </>
    )
}

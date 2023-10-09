import React, { Fragment, useState } from "react";
import { v4 as uuid } from 'uuid';

import EducationForm from "../forms/education_Form";

function Education({ stateList }) {

    const [localEducationData,setLocalEducationData] = useState(stateList.educationData)
    
    function addEducation(){
        const id = uuid();
        const comp = {"id":id,"university":"","degree":"","percentage":"","description":"","readOnly":null}
        setLocalEducationData([
            ...localEducationData,comp
        ])
    }

    function submitAll(){
        stateList.setEducationData(localEducationData)
        stateList.setEducationOn(true)
    }
    
    return (
        <div className="educationForms" key={uuid()}> 
            
            {   
                localEducationData.map(eduItem => {
                    return <EducationForm 
                                id={eduItem.id}   
                                degreeI={eduItem.degree} 
                                universityI={eduItem.university} 
                                percentageI={eduItem.percentage} 
                                descriptionI={eduItem.description}
                                readI={eduItem.readOnly}
                                local={localEducationData} 
                                setLocal={setLocalEducationData}
                            />
                })
            }
            
            <div className="buttons" style={{display:'flex', justifyContent:'center', gap:'3rem'}}>
                <button onClick={addEducation}>Add education</button>
                <button onClick={submitAll}>Submit All</button>
            </div>

        </div>
    );
}

export default Education;
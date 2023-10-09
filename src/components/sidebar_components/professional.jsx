import React, { Fragment, useState } from "react";
import { v4 as uuid } from 'uuid';

import ProfessionalForm from "../forms/professional_Form";

function Professional({ stateList }) {

    const [localProfessionalData,setLocalProfessionalData] = useState(stateList.professionalExpData)
    
    function addExperience(){
        const id = uuid();
        const comp = {"id":id, "jobTitle":"", "employer":"", "years":"", "description":"", "readOnly":null}
        setLocalProfessionalData([
            ...localProfessionalData,comp
        ])
    }

    function submitAll(){
        stateList.setProfessionalExpData(localProfessionalData)
        stateList.setProfessionalExpOn(true)
    }
    
    return (
        <div className="professionalForms" key={uuid()}> 
            
            {   
                localProfessionalData.map(proItem => {
                    console.log("jobT: "+proItem.jobTitle)
                    return <ProfessionalForm 
                                id={proItem.id}   
                                jobTitleI={proItem.jobTitle} 
                                employerI={proItem.employer} 
                                yearsI={proItem.years} 
                                descriptionI={proItem.description}
                                readI={proItem.readOnly}
                                local={localProfessionalData} 
                                setLocal={setLocalProfessionalData}
                            />
                })
            }
            
            <div className="buttons" style={{display:'flex', justifyContent:'center', gap:'3rem'}}>
                <button onClick={addExperience}>Add Experience</button>
                <button onClick={submitAll}>Submit All</button>
            </div>

        </div>
    );
}

export default Professional;
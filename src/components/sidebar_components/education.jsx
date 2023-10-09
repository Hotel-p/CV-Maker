import React, { Fragment, useState } from "react";
import { v4 as uuid } from 'uuid';

import EducationForm from "../forms/education_Form";

function Education({ stateList }) {

    const [localEducationData,setLocalEducationData] = useState(stateList.educationData)

    let count = 0;

    function addEducation(){
        const id = uuid();
        setLocalEducationData([...localEducationData,{
                    [id]:{
                        "aid":id,
                        "readOnly":false,
                        "degree":"",
                        "university":"",
                        fun:1223
                    }
                }])
    }

    function submitAll(){
        stateList.setEducationOn(true);
    }
    
    return (
        <div className="EducationForms" key={uuid()}> 
            
            {localEducationData.map(eduItem => {
                    const eduKey = Object.keys(eduItem)[0];
                    const edu = eduItem[eduKey];
                    return <EducationForm edu={edu} setLocalEducationData={setLocalEducationData} key={edu.id} />;
                })
            }
            
            <button onClick={addEducation}>Add education</button>
            <button onClick={submitAll}>Submit All</button>

        </div>
    );
}

export default Education;

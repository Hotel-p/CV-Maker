import React, { Fragment, useState } from "react";
import { v4 as uuid } from 'uuid';

import SkillsForm from "../forms/skills_Form";

function Skills({ stateList }) {

    const [localSkillsData,setLocalSkillsData] = useState(stateList.skillsData)
    
    function addSkills(){
        const id = uuid();
        const comp = {"id":id, "skill":"", "level":"", "readOnly":null}
        setLocalSkillsData([
            ...localSkillsData,comp
        ])
    }

    function submitAll(){
        stateList.setSkillsData(localSkillsData)
        stateList.setSkillsOn(true)
    }
    
    return (
        <div className="skillForms" key={uuid()}> 
            
            {   
                localSkillsData.map(skillItem => {
                    return <SkillsForm 
                                id={skillItem.id}   
                                skillI={skillItem.skill} 
                                levelI={skillItem.level} 
                                readI={skillItem.readOnly}
                                local={localSkillsData} 
                                setLocal={setLocalSkillsData}
                            />
                })
            }
            
            <div className="buttons" style={{display:'flex', justifyContent:'center', gap:'3rem'}}>
                <button onClick={addSkills}>Add Skills</button>
                <button onClick={submitAll}>Submit All</button>
            </div>

        </div>
    );
}

export default Skills;
import React, { useState } from "react";

function Skills({stateList}){

    const [readOnly4, setReadOnly4] = useState(false)
    
    function handleSubmit(e){
        e.preventDefault();
        stateList.setSkillsOn(true)
        stateList.setSkill(e.target.skill.value)
        stateList.setLevel(e.target.level.value)
    }

    function handleEdit(e){
        e.preventDefault();
        setReadOnly4(false);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Skill: </label>
                <input type="text" id="skill" readOnly={readOnly4} placeholder="Programming"/>
                <label>Level: </label>
                <div>
                    <input
                        type="radio"
                        name="level"
                        value="Beginner"
                        id="level"
                        readOnly={readOnly4}
                    />
                    <label htmlFor="beginner" style={{fontSize:"1rem"}}>Beginner</label>

                    <input
                        type="radio"
                        name="level"
                        value="Medium"
                        id="level"
                        readOnly={readOnly4}
                    />
                    <label htmlFor="medium" style={{fontSize:"1rem"}}>Medium</label>

                    <input
                        type="radio"
                        name="level"
                        value="Expert"
                        id="level"
                        readOnly={readOnly4}
                    />
                    <label htmlFor="expert" style={{fontSize:"1rem"}}>Expert</label>
                </div>
                <button className="edit" onClick={handleEdit}>Edit</button>
                <button type="submit" className="submit">Submit</button>
            </form>
        </>
    )
}

export default Skills;
import { useState } from "react"

function SkillsForm({id,skillI,levelI,readI,local,setLocal}){

    const [skill,setSkill] = useState(skillI)
    const [level,setLevel] = useState(levelI)
    const [readOnly,setReadOnly] = useState(readI)

    function handleSubmit(e) {
        e.preventDefault(); 
        // setReadOnly(true)
        const newSkill = skill
        console.log(newSkill)
        const newLevel = level 
        const newRead = readOnly
        const updatedSkillsData = local.map((ski) => ski.id === id ? { ...ski, skill:newSkill, level:newLevel,readOnly:newRead } : ski)
        setLocal(updatedSkillsData)
    }

    function handleEdit(e) {
        e.preventDefault();
        // setReadOnly(false)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                
                <label>Skill: </label>
                <input 
                    type="text" 
                    id="skill" 
                    value={skill}
                    onChange={(e)=>setSkill(e.target.value)}
                    placeholder="Programming"
                />
                
                <label>Level: </label>
                <div>
                    <input
                        type="radio"
                        name="level"
                        value="Beginner"
                        onChange={(e)=>setLevel(e.target.value)}
                        id="level"
                        checked={level === "Beginner"}
                    />
                    <label htmlFor="beginner" style={{fontSize:"1rem"}}>Beginner</label>

                    <input
                        type="radio"
                        name="level"
                        value="Medium"
                        onChange={(e)=>setLevel(e.target.value)}
                        id="level"
                        checked={level === "Medium"}
                    />
                    <label htmlFor="medium" style={{fontSize:"1rem"}}>Medium</label>

                    <input
                        type="radio"
                        name="level"
                        value="Expert"
                        onChange={(e)=>setLevel(e.target.value)}
                        id="level"
                        checked={level === "Expert"}
                    />
                    <label htmlFor="expert" style={{fontSize:"1rem"}}>Expert</label>
                </div>

                <button className="edit" onClick={handleEdit}>Edit</button>
                <button type="submit" className="submit">Submit</button>
            
            </form>
        </>
    )
}

export default SkillsForm
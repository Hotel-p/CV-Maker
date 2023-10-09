import { useState } from "react";

function EducationForm({id,degreeI,universityI,percentageI,descriptionI,readI,local,setLocal}) {
    
    const [degree,setDegree] = useState(degreeI)
    const [university,setUniversity] = useState(universityI)
    const [percentage,setPercentage] = useState(percentageI)
    const [description,setDescription] = useState(descriptionI)
    const [readOnly,setReadOnly] = useState(readI)

    function handleSubmit(e) {
        e.preventDefault(); 
        setReadOnly(true)
        const newDeg = degree
        const newUni = university 
        const newPer = percentage
        const newDesc = description
        const newRead = readOnly
        console.log("read2: "+readI)
        const updatedEducationData = local.map((edu) => edu.id === id ? { ...edu, degree:newDeg, university: newUni, percentage:newPer, description:newDesc, readOnly:newRead } : edu)
        setLocal(updatedEducationData)
    }

    function handleEdit(e) {
        e.preventDefault();
        setReadOnly(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label>Degree: </label>
                <input 
                    type="text" 
                    id="degree"
                    value={degree}
                    onChange={(e)=>setDegree(e.target.value)}
                    readOnly={readOnly}
                    placeholder="Bachelor of Computer Science" 
                />

                <label>University: </label>
                <input 
                    type="text" 
                    id="university" 
                    value={university}
                    onChange={(e)=>setUniversity(e.target.value)}
                    readOnly={readOnly}
                    placeholder="Arizona University" 
                />

                <label>Percentage: </label>
                <input 
                    type="text" 
                    id="percentage" 
                    value={percentage}
                    onChange={(e)=>setPercentage(e.target.value)}
                    readOnly={readOnly}
                    placeholder="87.2" 
                />
                
                <label>Description: </label>
                <textarea 
                    type="text" 
                    id="description" 
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    readOnly={readOnly}
                    placeholder="Describe in a few words your experiences and activities!" 
                />

                <button className="edit" onClick={handleEdit}>
                    Edit
                </button>
                <button type="submit" className="submit">
                    Submit
                </button>

            </form>
        </>
    );
}

export default EducationForm;

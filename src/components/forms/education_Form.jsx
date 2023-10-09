function EducationForm({edu,setLocalEducationData}) {
        
    function handleSubmit(e) {
        e.preventDefault(); 
        stateList.setEducationData([...stateList.educationData, localEducationData[edu.id]]);
    }

    function handleEdit(e) {
        e.preventDefault();
    }

    function handleDegreeChange(e) {
        const newDegree = e.target.value;
        // const eduKey = Object.keys(edu)[0];
        const eduKey = edu.id;
        const updatedEdu = {
            ...edu,
            degree: newDegree
        };

        setLocalEducationData(prevData => {
            const newData = { ...prevData };
            newData[edu.id] = updatedEdu;
            return newData;
        });
    }
    
    function handleUniversityChange(e) {
        const newUniversity = e.target.value;
        // const eduKey = Object.keys(edu)[0]; 
        const eduKey = edu.id;
        const updatedEdu = {
            ...edu,
            university: newUniversity 
        };

        setLocalEducationData(prevData => {
            const newData = { ...prevData };
            newData[edu.id] = updatedEdu;
            return newData;
        });
    }

    console.log("inside form")
    return (
        <>
            <form onSubmit={handleSubmit}>

                <label>Degree: </label>
                <input 
                    type="text" 
                    id="degree" 
                    readOnly={edu.readOnly}
                    value={edu.degree}
                    onChange={handleDegreeChange}
                    // onChange={(e)=>setLocalEducationData(localEducationData[edu.id]["degree"](e.target.value))}
                    placeholder="Bachelor of Computer Science" 
                />

                <label>University: </label>
                <input 
                    type="text" 
                    id="university" 
                    readOnly={edu.readOnly} 
                    value={edu.university}
                    onChange={handleUniversityChange}
                    // onChange={(e)=>setLocalEducationData(localEducationData[edu.id]["university"](e.target.value))}
                    placeholder="Arizona University" 
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

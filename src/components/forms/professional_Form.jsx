import { useState } from "react";

function ProfessionalForm({id,jobTitleI,employerI,yearsI,descriptionI,readI,local,setLocal}){
    
    const [jobTitle,setJobTitle] = useState(jobTitleI)
    const [employer,setEmployer] = useState(employerI)
    const [years,setYears] = useState(yearsI)
    const [description,setDescription] = useState(descriptionI)
    const [readOnly,setReadOnly] = useState(readI)
    
    function handleSubmit(e) {
        e.preventDefault(); 
        // setReadOnly(true)
        const newJob = jobTitle
        const newEmp = employer 
        const newYr = years
        const newDesc = description
        const newRead = readOnly
        console.log("read2: "+readI)
        const updatedProfessionalData = local.map((pro) => pro.id === id ? { ...pro, jobTitle:newJob, employer: newEmp, years:newYr, description:newDesc, readOnly:newRead } : pro)
        setLocal(updatedProfessionalData)
    }

    function handleEdit(e) {
        e.preventDefault();
        // setReadOnly(false)
    }
    {console.log(jobTitle)}
    return (
        
        <>
            <form onSubmit={handleSubmit}>

                <label>Job Title: </label>
                <input 
                    type="text" 
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(e)=>setJobTitle(e.target.value)}
                    // readOnly={readOnly}
                    placeholder="Staff Engineer" 
                />

                <label>Employer: </label>
                <input 
                    type="text" 
                    id="employer" 
                    value={employer}
                    onChange={(e)=>setEmployer(e.target.value)}
                    // readOnly={readOnly}
                    placeholder="Big Industries.Inc" 
                />

                <label>Years: </label>
                <input 
                    type="text" 
                    id="years" 
                    value={years}
                    onChange={(e)=>setYears(e.target.value)}
                    readOnly={readOnly}
                    placeholder="2014-2016" 
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

export default ProfessionalForm
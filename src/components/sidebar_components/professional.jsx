import React, { useState } from "react";

function Professional({stateList}){

    const [readOnly2, setReadOnly2] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        stateList.setProfessionalExpOn(true)
        stateList.setJobTitle(e.target.jobTitle.value)
        stateList.setEmployer(e.target.employer.value)
        setReadOnly2(true)
    }

    function handleEdit(e){
        e.preventDefault();
        setReadOnly2(false);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Job Title: </label>
                <input type="text" id="jobTitle" readOnly={readOnly2} placeholder="Head Engineer"/>
                <label>Employer: </label>
                <input type="text" id="employer" readOnly={readOnly2} placeholder="Big Industries.Inc"/>
                <button className="edit" onClick={handleEdit}>Edit</button>
                <button type="submit" className="submit">Submit</button>
            </form>
        </>
    )
}

export default Professional;
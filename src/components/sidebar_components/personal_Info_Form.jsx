import React, { useState } from "react";

function Personal_Info_Form({ stateList }) {
    const [readOnly, setReadOnly] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        stateList.setPersonalOn(true)
        setReadOnly(true)
    }

    function handleEdit(e){
        e.preventDefault();
        setReadOnly(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label>Full Name: </label>
                <input 
                    type="text" 
                    id="fullName"  
                    readOnly={readOnly} 
                    value={stateList.fullName} 
                    onChange={(e)=>stateList.setFullName(e.target.value)} 
                    placeholder="John Doe" />

                <label>Contact No: </label>
                <input 
                    type="tel" 
                    id="contactNo" 
                    readOnly={readOnly} 
                    value={stateList.contactNo}
                    onChange={(e)=>stateList.setContactNo(e.target.value)}
                    placeholder="0123456789" />

                <label>Email Id: </label>
                <input 
                    type="email" 
                    id="emailId" 
                    readOnly={readOnly} 
                    value={stateList.emailId}
                    onChange={(e)=>stateList.setEmailId(e.target.value)}
                    placeholder="JohnDoe@email.com" />

                <button className="edit" onClick={handleEdit}>Edit</button>
                <button type="submit" className="submit">Submit</button>
            </form>
        </>
    );
}

export default Personal_Info_Form;
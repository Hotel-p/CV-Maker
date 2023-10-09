import React, { useState } from "react";

function Personal({ stateList }) {
    const [localName,setLocalName] = useState(stateList['fullName'])
    const [localNo,setLocalNo] = useState(stateList['contactNo'])
    const [localEmail,setLocalEmail] = useState(stateList['emailId'])

    const handleSubmit = (e) => {
        e.preventDefault();
        stateList.setPersonalOn(true)
        stateList['setFullName'](localName)
        stateList['setContactNo'](localNo)
        stateList['setEmailId'](localEmail)
        stateList['setReadOnly'](true)
        console.log("submit: "+stateList.readOnly)
    }

    function handleEdit(e){
        e.preventDefault();
        stateList['setReadOnly'](false);
        console.log("Edit: "+stateList.readOnly)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label>Full Name: </label>
                <input 
                    type="text" 
                    id="fullName"  
                    readOnly={stateList['readOnly']}
                    value={localName}
                    onChange={(e)=>setLocalName(e.target.value)}
                    placeholder="John Doe" />

                <label>Contact No: </label>
                <input 
                    type="tel" 
                    id="contactNo" 
                    readOnly={stateList['readOnly']}
                    value={localNo}
                    onChange={(e)=>setLocalNo(e.target.value)}
                    placeholder="0123456789" />

                <label>Email Id: </label>
                <input 
                    type="email" 
                    id="emailId" 
                    readOnly={stateList['readOnly']}
                    value={localEmail}
                    onChange={(e)=>setLocalEmail(e.target.value)}
                    placeholder="JohnDoe@email.com" />

                <button className="edit" onClick={handleEdit}>Edit</button>
                <button type="submit" className="submit">Submit</button>
            </form>
        </>
    );
}

export default Personal;
import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function Educational_Info_Form({ stateList }) {

    function Form({stateList,id}) {
        
        // const [readOnly3, setReadOnly3] = useState(false);

        // let a = {"degree":"","university":""}
        // let a = {[id]:{"degree":"","university":""}}
        // stateList.setEducationData([a, ...stateList.educationData])
        
        function handleSubmit(e) {
            e.preventDefault(); 
            // stateList.setEducationOn(true);
            // stateList.setEducationData([education, ...stateList.educationData])

            // a = {"degree":e.target.degree.value,"university":e.target.university.value}
            // stateList.setEducationData([a, ...stateList.educationData])
            // stateList.educationData.map((abc)=>console.log(abc))
            // setReadOnly3(true);
        }

        function handleEdit(e) {
            e.preventDefault();
            // setReadOnly3(false);
        }

        return (
            <>
                <form onSubmit={handleSubmit}>

                    <label>Degree: </label>
                    <input 
                        type="text" 
                        id="degree" 
                        readOnly={readOnly3}
                        value={stateList.educationData.id.degree}
                        onChange={(e)=>setEducation({...education,"degree":e.target.degree.value})}  
                        placeholder="Bachelor of Computer Science" 
                    />

                    <label>University: </label>
                    <input 
                        type="text" 
                        id="university" 
                        readOnly={readOnly3} 
                        value={stateList.educationData.id.university}
                        // onChange={(e)=>setEducation({...education,"university":e.target.university.value})}  
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

    function addEducation(){
        // const key = "Form"+stateList.educationForms.length
        const id = uuid();
        const education = {id:{"degree":"","university":""}}
        const newForm = <Form
                            stateList={stateList}
                            id={id}
                            key={id} 
                        />;
        stateList.setEducationForms([newForm,...stateList.educationForms]);
        stateList.setEducationData([education,...stateList.educationData])
        console.log(stateList.educationData.length)
    }


    return (
        <>  
            {stateList.educationForms}
            <button onClick={addEducation}>Add education</button>
        </>
    );
}

export default Educational_Info_Form;

import '../styles/content.css'


function Content({stateList}){
    return(
        <div className='content'>

            {stateList['Personal Information'][`personalOn`] && 
                <div className='personalInfo'>
                    <div className="name"> 
                        {stateList['Personal Information'][`fullName`].toUpperCase()}
                    </div>
                    <div className="other">
                        <div>{stateList['Personal Information'][`contactNo`]}</div>
                        <div>{stateList['Personal Information'][`emailId`]}</div>
                    </div>
                </div>
            }
            
            {/* {stateList['Educational Information'][`educationOn`] && 
                <div className='educationalInfo'>
                    <p>Education</p>
                    <hr></hr>
                    
                    {
                        stateList['Educational Information'][`educationData`].map((data)=> <><h3>{data.degree}</h3><h4>{data.university}</h4></>)
                    }

                </div>
            } */}


            {stateList['Professional Experience'][`professionalExpOn`] && 
                <div className='professionalInfo'>
                    <p>Professional Experience</p>
                    <hr></hr>
                    <div className="professionalName"> 
                        {stateList['Professional Experience'][`jobTitle`].toUpperCase()}
                    </div>
                    <div className="other">
                        <em>{stateList['Professional Experience'][`employer`]}</em>
                    </div>
                </div>
            }

            {stateList['Skills'][`skillsOn`] && 
                <div className='skills'>
                    <p>Skills</p>
                    <hr></hr>
                    <div className="skillName"> 
                        {stateList['Skills'][`skill`].toUpperCase()}
                    </div>
                    <div className="other">
                        <em>{stateList['Skills'][`level`]}</em>
                    </div>
                </div>
            }

        </div>     
    )
}

export default Content
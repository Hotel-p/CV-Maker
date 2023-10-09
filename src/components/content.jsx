import '../styles/content.css'


function Content({stateList}){
    return(
        <div className='content'>

            {stateList['Personal Information'][`personalOn`] && 
                <div className='personalInfo'>
                    <div className="personalName"> 
                        {stateList['Personal Information'][`fullName`].toUpperCase()}
                    </div>
                    <div className="personalOther">
                        <div>{stateList['Personal Information'][`contactNo`]}</div>
                        <div>{stateList['Personal Information'][`emailId`]}</div>
                    </div>
                </div>
            }
            
            {stateList['Educational Information'][`educationOn`] && 
                <div className='education'>
                    <div className="sectionName">Education</div>
                    <hr></hr>
                    <div className="educationDetails">
                        {stateList['Educational Information'][`educationData`].map((data)=> 
                            <div className="educationSingle">
                                <div className="educationRow">
                                    <p style={{fontWeight:'bold'}}>{data.degree}</p>
                                    <em>percentage: {data.percentage}</em>
                                </div>
                                <p>{data.university}</p>
                                <p id='description'>{data.description}</p>
                            </div>   
                        )}
                    </div>
                </div>
            }

            {stateList['Professional Experience'][`professionalExpOn`] && 
                <div className='professional'>
                    <div className="sectionName">Professional Experience</div>
                    <hr></hr>
                    <div className="professionalDetails">
                        {stateList['Professional Experience'][`professionalExpData`].map((data)=> 
                            <div className="ProfessionalSingle">
                                <div className="professionalRow">
                                    <p style={{fontWeight:'bold'}}>{data.jobTitle}</p>
                                    <em>years: {data.years}</em>
                                </div>
                                <p>{data.employer}</p>
                                <p id='description'>{data.description}</p>
                            </div>   
                        )}
                    </div>
                </div>
            }

            {stateList['Skills'][`skillsOn`] && 
                <div className='skills'>
                    <div className="sectionName">Skills</div>
                    <hr></hr>
                    <div className="skillDetails"> 
                        {stateList['Skills'][`skillsData`].map((data)=>
                            <div className="skillSingle">
                                <div className="skillRow">
                                    <p style={{fontWeight:'bold'}}>{data.skill}</p>
                                    <em>proficiency: {data.level}</em>
                                </div>
                                {/* <p>{data.employer}</p>
                                <p>{data.description}</p> */}
                            </div>  
                        )}
                    </div>
                </div>
            }

        </div>     
    )
}

export default Content
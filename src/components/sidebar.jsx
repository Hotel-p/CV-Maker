import React, { Fragment } from 'react';
import { useState } from 'react';

import '../styles/sidebar.css';

import Personal_Info_Form from './sidebar_components/personal_Info_Form';
import Educational_Info_Form from './sidebar_components/educational_Info';
import Professional_Exp_Form from './sidebar_components/professional_Exp';
import Skills_Info_Form from './sidebar_components/skills_Info_Form';

function Sidebar({stateList}){

    // const [PersonalInfo, setPersonalInfo] = useState(false);
    // const [EducationalInfo, setEducationalInfo] = useState(false);
    // const [ProfessionalExperience, setProfessionalExperience] = useState(false);
    // const [Skills, setSkills] = useState(false);

    const sections = [
        {
            name:"Personal Information",
            stateName:stateList.PersonalInfo,
            setStateName:stateList.setPersonalInfo,
            component:Personal_Info_Form
        },
        {
            name:"Educational Information",
            stateName:stateList.EducationalInfo,
            setStateName:stateList.setEducationalInfo,
            component:Educational_Info_Form
        },
        // {
        //     name:"Professional Experience",
        //     stateName:stateList.ProfessionalExperience,
        //     setStateName:stateList.setProfessionalExperience,
        //     component:Professional_Exp_Form
        // },
        // {
        //     name:"Skills",
        //     stateName:stateList.SkillsSidebar,
        //     setStateName:stateList.setSkillsSidebar,
        //     component:Skills_Info_Form
        // },
    ];

    function clickHand(sec){
        // sec.setStateName(true);          // this doesn't work, why???????
                                            // because inside onclick we used () to pass parameters, however this causes 
                                            // the function to be executed during each render.
                                            // thus, we create another function inside clickHand so that setState isn't invoked each render.   
        // return ()=>sec.setStateName(true);   //this works
        // return()=>{
        //     if(sec.stateName === true){
        //         sec.setStateName(false);
        //     }
        //     else{
        //         sec.setStateName(true);
        //     }
        // }

        if(sec.stateName === true){
            sec.setStateName(false);
        }
        else{
            sec.setStateName(true);
        }
    }

    return(
        <div className='sidebar'>

            <ul>
                {sections.map((sec, index) => {
                    const sectionKey = sec.name + index;
                    return (
                        <Fragment key={sectionKey}>
                            <li onClick={() => clickHand(sec)}>{sec.name}</li>
                            {sec.stateName === true && <sec.component stateList={stateList[sec.name]} /*key={sectionKey}*/ />}
                        </Fragment>
                    );
                })}
            </ul>

        </div>
    )
}

export default Sidebar;
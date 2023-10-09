import React, { Fragment } from 'react';
import { useState } from 'react';

import '../styles/sidebar.css';

import Personal from './sidebar_components/personal';
import Education from './sidebar_components/education';
import Professional from './sidebar_components/professional';
import Skills from './sidebar_components/skills';

function Sidebar({stateList}){

    const sections = [
        {
            name:"Personal Information",
            stateName:stateList.PersonalInfo,
            setStateName:stateList.setPersonalInfo,
            component:Personal
        },
        {
            name:"Educational Information",
            stateName:stateList.EducationalInfo,
            setStateName:stateList.setEducationalInfo,
            component:Education
        },
        {
            name:"Professional Experience",
            stateName:stateList.ProfessionalExperience,
            setStateName:stateList.setProfessionalExperience,
            component:Professional
        },
        {
            name:"Skills",
            stateName:stateList.SkillsSidebar,
            setStateName:stateList.setSkillsSidebar,
            component:Skills
        },
    ];

    function clickHand(sec){
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
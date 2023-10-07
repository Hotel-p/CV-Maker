import { useState } from 'react'
import { usePDF } from 'react-to-pdf'
import { v4 as uuid } from 'uuid'

import './App.css'

import Navbar from './components/navbar'
import Content from './components/content'
import Sidebar from './components/sidebar'


function App() {
  console.log("render")

  const [PersonalInfo, setPersonalInfo] = useState(false);
  const [EducationalInfo, setEducationalInfo] = useState(false);
  const [ProfessionalExperience, setProfessionalExperience] = useState(false);
  const [SkillsSidebar, setSkillsSidebar] = useState(false);

  const [personalOn,setPersonalOn] = useState(false)
  const [fullName,setFullName] = useState("")
  const [contactNo,setContactNo] = useState("")
  const [emailId,setEmailId] = useState("")
  const [readOnlyPer,setReadOnlyPer] = useState(false)

  const [educationOn,setEducationOn] = useState(false)
  const [educationData,setEducationData] = useState([])
  const [educationForms,setEducationForms] = useState([])
  // const [degree,setDegree] = useState("");
  // const [university,setUniversity] = useState("");

  const [professionalExpOn,setProfessionalExpOn] = useState(false);
  const [professionalExpData,setProfessionalExpData] = useState([])
  const [professionalExpForms,setProfessionalExpForms] = useState([])
  // const [jobTitle,setJobTitle] = useState("");
  // const [employer,setEmployer] = useState("");

  const [skillsOn,setSkillsOn] = useState(false)
  const [skillsData,setSkillsData] = useState([])
  const [skillsForms,setSkillsForms] = useState([])
  // const [skill,setSkill] = useState("");
  // const [level,setLevel] = useState("");

  const { toPDF, targetRef } = usePDF({filename: fullName+' Resume.pdf'})

  const stateList = {
    "PersonalInfo":PersonalInfo,
    "setPersonalInfo":setPersonalInfo,

    "EducationalInfo":EducationalInfo,
    "setEducationalInfo":setEducationalInfo,

    "ProfessionalExperience":ProfessionalExperience,
    "setProfessionalExperience":setProfessionalExperience,

    "SkillsSidebar":SkillsSidebar,
    "setSkillsSidebar":setSkillsSidebar,

    "Personal Information":{
      "fullName":fullName,
      "setFullName":setFullName,
      "contactNo":contactNo,
      "setContactNo":setContactNo,
      "emailId":emailId,
      "setEmailId":setEmailId,
      "readOnly":readOnlyPer,
      "setReadOnly":setReadOnlyPer,
      "personalOn":personalOn,
      "setPersonalOn":setPersonalOn
    },

    "Educational Information":{
      "educationData":educationData,
      "setEducationData":setEducationData,
      "educationForms":educationForms,
      "setEducationForms":setEducationForms,
      // "readOnly":,
      // "setReadOnly":
      
      // "degree":degree,
      // "setDegree":setDegree,
      // "university":university,
      // "setUniversity":setUniversity,
      "educationOn":educationOn,
      "setEducationOn":setEducationOn
    },

    "Professional Experience":{
      "professionalExpData":professionalExpData,
      "setProfessionalExpData":setProfessionalExpData,
      "professionalExpForms":professionalExpForms,
      "setProfessionalExpForms":setProfessionalExpForms,
      // "jobTitle":jobTitle,
      // "setJobTitle":setJobTitle,
      // "employer":employer,
      // "setEmployer":setEmployer,
      "professionalExpOn":professionalExpOn,
      "setProfessionalExpOn":setProfessionalExpOn
    },

    "Skills":{
      "skillsData":skillsData,
      "setSkillsData":setSkillsData,
      "skillsForms":skillsForms,
      "setSkillsForms":setSkillsForms,
      // "skill":skill,
      // "setSkill":setSkill,
      // "level":level,
      // "setLevel":setLevel,
      "skillsOn":skillsOn,
      "setSkillsOn":setSkillsOn
    }
    
  }
  
  return (
    <div className='main'>
      
      <div className='navbarApp' key={uuid()}>
        <Navbar />
        <button onClick={() => toPDF()}>Download PDF</button>
      </div>
      
      <div className="sidebarApp" key={uuid()}>
        <Sidebar stateList={stateList}/>
      </div>
        
      <div className="contentApp" key={uuid()} ref={targetRef}>
        <Content stateList={stateList}/>
      </div>

    </div>
  )
}

export default App

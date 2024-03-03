import { useState } from 'react'
import { usePDF } from 'react-to-pdf'
import { v4 as uuid } from 'uuid'
import { jsPDF } from "jspdf";

import './App.css'

import Navbar from './components/navbar'
import Content from './components/content'
import Sidebar from './components/sidebar'


function App() {

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

  const [professionalExpOn,setProfessionalExpOn] = useState(false)
  const [professionalExpData,setProfessionalExpData] = useState([])

  const [skillsOn,setSkillsOn] = useState(false)
  const [skillsData,setSkillsData] = useState([])

  // const { toPDF, targetRef } = usePDF({filename: fullName+' Resume.pdf'})

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
      "educationOn":educationOn,
      "setEducationOn":setEducationOn,
    },

    "Professional Experience":{
      "professionalExpData":professionalExpData,
      "setProfessionalExpData":setProfessionalExpData,
      "professionalExpOn":professionalExpOn,
      "setProfessionalExpOn":setProfessionalExpOn
    },

    "Skills":{
      "skillsData":skillsData,
      "setSkillsData":setSkillsData,
      "skillsOn":skillsOn,
      "setSkillsOn":setSkillsOn
    }
    
  }

  const generatePdf = ()=>{
    const doc = new jsPDF('portrait','pt','a4');
    doc.html(document.querySelector('.content')).then(()=>{
      doc.save('resume.pdf');
    })
  }
  
  return (
    <div className='main'>
      
      <div className='navbarApp' key={uuid()}>
        <Navbar />
        <button onClick={generatePdf}>Download PDF</button>
      </div>
      
      <div className="sidebarApp" key={uuid()}>
        <Sidebar stateList={stateList}/>
      </div>
        
      <div className="contentApp" key={uuid()}>
        <Content stateList={stateList}/>
      </div>

    </div>
  )
}

export default App

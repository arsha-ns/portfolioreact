import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Aboutme from './Aboutme'
import Skills from './Skills'
import Qualifications from './Qualifications'
import Service from './Service'
import Project from './Project'
import Footer from './Footer'














function App() {

  const user={"name":"arsha","degree":"BCA","phone":"9778729892","dob":"17/9/2002","experience":"intern","email":"arshansrm@gamil.com"}

  const skillsets=[
    
  {"name":"python","percentege":"70%"},
  {"name":"javascript","percentage":"50%"},
  {"name":"django","percentage":"80%"},
  {"name":"css","percentage":"70%"},
  {"name":"html","percentage":"70%"},
  {"name":"c","percentage":"70%"}
]
  return (
    <div>
      <Navbar></Navbar>

      <Hero></Hero>
      <Aboutme user={user}></Aboutme>

      <Skills skillsets={skillsets}></Skills>

      <Qualifications></Qualifications>
      <Service></Service>

      <Project></Project>

      <Footer></Footer>

      
      
      
    </div>
  )
}

export default App

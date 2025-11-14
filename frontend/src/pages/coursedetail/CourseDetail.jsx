import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import YourJourney from '../../components/YourJourney'
import vishlesan from "/src/assets/images/vishlesan.jpg"

function CourseDetail() {
  return (
    <div className="min-h-screen"> 
      <Navbar
      img = {vishlesan}
       title="Technology Innovation Hub"
      subtitle="Vishlesan I-Hub Foundation"
      buttonText="Download brochure" 
      />
      <YourJourney/>
      <Footer/>
    </div>
  )
}

export default CourseDetail
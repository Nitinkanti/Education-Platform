import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../pages/login/Login'
import CourseDetail from '../../pages/coursedetail/CourseDetail'
import DashBoard from '../../pages/dashboard/DashBoard'

const isLogedIn = false;
function AppRouter() {
  return (
            <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/dashboard' element={isLogedIn ? <DashBoard /> : <Navigate to="/login" />}/>
          <Route path='/coursedetail' element={<CourseDetail/>}/>
      
        
            </Routes>
  )
}

export default AppRouter
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Contact from '../Pages/Contact/Contact'
import ForStudent from '../Pages/ForStudents/ForStudent'
import About from '../Pages/About/About'
import NavBar from '../Component/NavBar/NavBar'
import Footer from '../Component/Footer/Footer'

const index = () => {
    return (
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/ForStudents' element={<ForStudent/>}/>
            <Route path='/About' element={<About/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default index
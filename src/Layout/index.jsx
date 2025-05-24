import React from 'react'
import NavBar from '../Component/NavBar/NavBar'
import Footer from '../Component/Footer/Footer'
import { Outlet } from 'react-router-dom'

const index = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default index
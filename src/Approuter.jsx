import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Contactpage from './pages/Contactpage'

function Approuter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Homepage.jsx" element={<Homepage />} />
                <Route path='/Cantactpage.jsx' element={<Contactpage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Approuter
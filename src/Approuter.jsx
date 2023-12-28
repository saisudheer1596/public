import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'


function Approuter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Homepage.jsx" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Approuter
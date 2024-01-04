import React from 'react'
import Header from '../components/Header'
import Banner from '../components/home/Banner'
import Features from '../components/home/Features'
import Clients from '../components/home/Clients'
import Missionvission from '../components/home/Missionvission'
import Services from '../components/home/Services'
import Workout from '../components/home/Workout'
import Testimonials from '../components/home/Testimonials'
//import Faq from '../components/home/Faq'
//import Blog from '../components/home/Blog'
import Contactarea from '../components/home/Contactarea'
import Footer from '../components/home/Footer'

function Homepage() {
    return (
        <>
            <Header />
            <Banner />
            <Features />
            <Missionvission />
            <Services />
            <Workout />
            <Testimonials />
            <Clients />
            <Contactarea />
            <Footer />
        </>
    )
}

export default Homepage
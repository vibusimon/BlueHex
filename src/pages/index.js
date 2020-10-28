import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Navigation from "../components/Navigation"
import Contact from '../components/Contact';
import Header from '../components/Header';
import Stack from '../components/Stack';
import Work from '../components/Work';

export default function Home() {
  return (

    <div>
      <Navigation />
      <Header />
      <Work />
      <Stack />
      <Contact />

    </div>

  )
}

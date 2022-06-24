import React from 'react'
import Header from '../components/HomeHeader';
import Navbar from '../components/Navbar';
import PageContent from '../components/HomeContent';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <PageContent />
      <Footer />
    </div>
  )
}

export default HomePage
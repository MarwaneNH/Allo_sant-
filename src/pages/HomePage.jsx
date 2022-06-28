import React from 'react'
import Header from '../components/HomeHeader';
import NavBar from '../components/NavBar';
import PageContent from '../components/HomeContent';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <PageContent />
      <Footer />
    </div>
  )
}

export default HomePage
import React, {useState} from 'react'
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Specials from '../components/Specials/Specials';
import MenuSection from '../components/Menu/MenuSection';
import Book from '../components/Book';
import Footer from '../components/Footer';
import {FaAngleUp} from 'react-icons/fa';


export default function Home() {

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if(!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    }else if(showScroll && window.pageYOffset <= 400){
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({top:0, behavior: "smooth"});
  }

  window.addEventListener('scroll', checkScrollTop)


  return (
    <>
        <Head>
        <title>Fiasco Restaurant</title>
        <meta name="description" content="Fiasco Restaurant, Nairobi" />
        <meta name="description" content="Food, Recipes, Restaurant, Lunches, Breakfasts, Dinners" />
      </Head>
        <div className='mainContainer'>
            <div className='container'>
                <header className='header'>
                    <Navbar/>
                    <Hero/>
                </header>

                <main className='main' id="about">
                    <About/>
                    <Specials/>
                    <MenuSection/>
                    <Book/>
                </main>

                <footer className='footer' id="contact">
                    <Footer/>
                </footer>
                </div>
                <FaAngleUp 
                  className='scrollBtn' 
                  onClick={scrollToTop} 
                  style={{height: 40, display: showScroll ? 'flex' : 'none'}} 
                />
        </div>
        </>
  )
}

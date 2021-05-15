import React, {useState} from 'react'
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Specials from '../components/Specials/Specials';
import MenuSection from '../components/Menu/MenuSection';
import Book from '../components/Book';
import Footer from '../components/Footer';



export default function Home() {
  return (
    <>
        <Head>
        <title>Fiasco Restaurant</title>
        <meta name="description" content="Fiasco Restaurant, Get all your Meals from us today" />
        <meta name="description" content="Food, Recipes, Restaurant, Lunches, Breakfasts, Dinners" />
      </Head>
        <div className='mainContainer'>
            <div className='container'>
                <header className='header'>
                    <Navbar/>
                    <Hero/>
                </header>

                <main className='main'>
                    <About/>
                    <Specials/>
                    <MenuSection/>
                    <Book/>
                </main>

                <footer className='footer' id="contact">
                    <Footer/>
                </footer>
                </div>
        </div>
        </>
  )
}

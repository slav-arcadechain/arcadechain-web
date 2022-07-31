import React from 'react'
import Head from 'next/head'
import Background from '../components/background/Background'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import HomeComp from '../components/Home'

const Home = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="ArcadeChain is crypto game and e-sport hub where users can play classic and new exiting games using a stable coin. ACT token is used to participate in profits from the platform. Crypto token pre-sale" />
          <meta name="keywords" content="ArcadeChain, Arcade, Crypto Game, ICO, Crypto Token, Crypto Games, Passive Income, Blockchain Games, token pre-sale, pre-sale, stable coin" />
          <title>ArcadeChain</title>
        </Head>
        <Background />
        <Header />

        <main className="mx-auto mt-16 max-w-container px-4 sm:mt-24 sm:px-10 3xl:px-0">
          <HomeComp />
        </main>
        <Footer />
        <img
          className="absolute inset-x-0 bottom-0 -z-10 w-full"
          src={'/images/stellar-bg-2.webp'}
          alt=""
        />
      </div>
    </>
  )
}

export default Home

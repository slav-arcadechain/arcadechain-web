import React from 'react'
import Head from 'next/head'
import Background from '../components/background/Background'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import HomeComp from '../components/Home'
import Image from 'next/image'

const Home = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                    <meta name="description"
                        content="Arcade Chain is crypto game platform where users can play classic and new exiting arcade games using a stable coin. Crypto initial token offering - pre-sale" />
                    <meta name="keywords"
                        content="ArcadeChain, Arcade Chain, Arcade, Crypto Game, ICO, initial coin offering, Crypto Token, Crypto Games, Passive Income, Blockchain Games, token pre-sale, pre-sale, stable coin" />
                    <meta property={"og:locale"} content={"en_US"} />
                    <meta property={"og:type"} content={"website"} />
                    <meta property={"og:title"}
                        content={"Arcade Chain - Crypto games - initial coin offering - token pre-sale"} />
                    <meta property={"og:description"}
                        content={"Arcade Chain is crypto game platform where users can play classic and new exiting arcade games using a stable coin. Crypto initial token offering - pre-sale"} />
                    <meta property={"og:url"} content={"https://www.arcadechain.io"} />
                    <meta property={"og:site_name"} content={"Arcade Chain"} />
                    <meta property={"og:image"} content={"https://arcadechain-images.s3.amazonaws.com/arcade_chain_og.jpg"} />
                    <meta property={"og:video"} content={"https://www.arcadechain.io/videos/intro_small.mp4"} />
                    <meta property={"twitter:card"} content={"summary"} />
                    <meta name="twitter:site" content="https://www.arcadechain.io" />
                    <meta name="twitter:title" content="Arcade Chain - Crypto games - initial coin offering - token pre-sale" />
                    <meta name="twitter:description" content="Arcade Chain is crypto game platform where users can play classic and new exiting arcade games using a stable coin. Crypto initial token offering - pre-sale" />
                    <meta name="twitter:creator" content="@arcadechain" />
                    <title>Arcade Chain - Crypto games - initial coin offering - token pre-sale</title>
                </Head>
                <Background />
                <Header />
                <main className="mx-auto mt-16 max-w-container px-4 sm:mt-24 sm:px-10 3xl:px-0">
                    <HomeComp />
                </main>
                <Footer />
                <div className='absolute inset-x-0 bottom-0 -z-10 w-full'>
                    <div className='relative h-screen lg:h-[120rem] w-full'>
                        <Image
                            layout='fill'
                            objectFit='cover'
                            width={3000} height={200}
                            src={'/images/stellar-bg-2.webp'}
                            alt="stellar bg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

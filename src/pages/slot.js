import React, {Component} from "react";
import Head from "next/head";
import Background from "../components/background/Background";
import Header from "../components/header/Header";
import SlotComp from "../components/Games/slot";
import Footer from "../components/footer/Footer";
import Image from "next/image";

class Slot extends Component {
    render() {
        return (
            <>
                <div className="relative overflow-hidden">
                    <Head>
                        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                        <meta name="description"
                              content="Slot machine game is crypto stable coin enabled game of chance in entirely new setting with unique NFT enhanced game play" />
                        <meta name="keywords"
                              content="ArcadeChain, Arcade Chain, Arcade, Crypto Game, Slot Machine, Slot, NFT, NFTs" />
                        <meta property={"og:locale"} content={"en_US"} />
                        <meta property={"og:type"} content={"website"} />
                        <meta property={"og:title"}
                              content={"Arcade Chain - Crypto games - initial coin offering - token pre-sale"} />
                        <meta property={"og:description"}
                              content={"Slot machine game is crypto stable coin enabled game of chance in entirely new setting with unique NFT enhanced game play"} />
                        <meta property={"og:url"} content={"https://www.arcadechain.io/Slot"} />
                        <meta property={"og:site_name"} content={"Arcade Chain"} />
                        <meta property={"og:image"} content={"https://arcadechain-images.s3.amazonaws.com/arcade_chain_og.jpg"} />
                        <meta property={"twitter:card"} content={"summary"} />
                        <meta name="twitter:site" content="https://www.arcadechain.io" />
                        <meta name="twitter:title" content="Arcade Chain - Slot Machine - crypt stable coin game" />
                        <meta name="twitter:description" content="Slot machine game is crypto stable coin enabled game of chance in entirely new setting with unique NFT enhanced game play" />
                        <meta name="twitter:creator" content="@arcadechain" />
                        <title>Arcade Chain - Slot Machine Crypto Game</title>
                    </Head>
                    <Background />
                    <Header />
                    <main className="mx-auto mt-16 max-w-container px-4 sm:mt-24 sm:px-10 3xl:px-0">
                        <SlotComp />
                    </main>
                    <Footer />
                    <div className='absolute inset-x-0 bottom-0 -z-10 w-full'>
                        <div className='relative h-screen lg:h-[120rem] w-full'>
                            <Image
                                layout='fill'
                                objectFit='cover'
                                src={'/images/stellar-bg-2.webp'}
                                alt="stellar bg"
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Slot;

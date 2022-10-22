import Head from "next/head";
import Background from "../components/background/Background";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import React from "react";
import Switchere from "../components/switchere/Switchere";
import IntroText from "../components/elements/IntroText";
import {SwapWidget} from "@uniswap/widgets";

function GetActToken() {
    const UNISWAP_TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'

// Use the native token of the connected chain as the default input token
    const NATIVE = 'NATIVE' // Special address for native token

// WBTC as the default output token
    const WBTC = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'
    const theme = {
        borderRadius: 0.5,
        fontFamily: '"Helvetica"',
        container: "#1b2654",
        module: "#0c1739",
        primary: "#ffffff",
        interactive: "#4d4f78"

    }

    return <div className="relative overflow-hidden">
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
            <meta
                name="description"
                content="Arcade Chain is crypto game platform where users can play classic and new exiting arcade games using a stable coin. Crypto initial token offering - pre-sale"
            />
            <meta
                name="keywords"
                content="ArcadeChain, Arcade Chain, Arcade, Crypto Game, ICO, initial coin offering, Crypto Token, Crypto Games, Passive Income, Blockchain Games, token pre-sale, pre-sale, stable coin"
            />
            <meta property={"og:locale"} content={"en_US"}/>
            <meta property={"og:type"} content={"website"}/>
            <meta
                property={"og:title"}
                content={
                    "Arcade Chain - Crypto games - initial coin offering - token pre-sale"
                }
            />
            <meta
                property={"og:description"}
                content={
                    "Arcade Chain is crypto game platform where users can play classic and new exiting arcade games using a stable coin. Crypto initial token offering - pre-sale"
                }
            />
            <meta property={"og:url"} content={"https://www.arcadechain.io"}/>
            <meta property={"og:site_name"} content={"Arcade Chain"}/>
            <meta
                property={"og:image"}
                content={
                    "https://arcadechain-images.s3.amazonaws.com/arcade_chain_og.jpg"
                }
            />
            <meta
                property={"og:video"}
                content={"https://www.arcadechain.io/videos/intro_small.mp4"}
            />
            <meta property={"twitter:card"} content={"summary"}/>
            <meta name="twitter:site" content="https://www.arcadechain.io"/>
            <meta
                name="twitter:title"
                content="Arcade Chain - Crypto games - initial coin offering - token pre-sale"
            />
            <meta
                name="twitter:description"
                content="Arcade Chain is crypto game platform where users can play classic and new exiting arcade games using a stable coin. Crypto initial token offering - pre-sale"
            />
            <meta name="twitter:creator" content="@arcadechain"/>
            <title>Arcade Chain - Slot Machine Crypto Game</title>
        </Head>
        <Background/>
        <Header/>

        <main className="mx-auto mt-16 max-w-container px-4 sm:mt-24 sm:px-10 3xl:px-0">

            <div className={"grid place-items-center"}>
                <IntroText leadText={['Exchange', 'your money for crypto.']}
                           followText={'For your convenience you are now able to convert your fiat currency to crypto tokens of your choice using wide range of payment methods including payment card and bank transfers.'}/>
                <Switchere/>

                <div className="Uniswap">
                    <SwapWidget
                        width={505}
                        theme={theme}
                        tokenList={UNISWAP_TOKEN_LIST}
                        defaultInputTokenAddress={NATIVE}
                        defaultInputAmount={2}
                        defaultOutputTokenAddress={WBTC}
                    />
                </div>
            </div>
        </main>
        <Footer/>
        <div className="absolute inset-x-0 bottom-0 -z-10 w-full">
            <div className="relative h-screen w-full lg:h-[120rem]">
                <Image
                    layout="fill"
                    objectFit="cover"
                    src={"/images/stellar-bg-2.webp"}
                    alt="stellar bg"
                />
            </div>
        </div>
    </div>
}

export default GetActToken;
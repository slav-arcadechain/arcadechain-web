import React from "react";
import Head from "next/head";
import Background from "../components/background/Background";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FaucetComp from "../components/faucet/faucet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function sendFaucetRequest(data){
    fetch('https://us-central1-archadechain-faucet.cloudfunctions.net/faucet',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
  ).then((response) => {
        console.log("boom I'm in then : " + response)
        toast.success('Your wallet has been credited', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }).catch(e => {
        toast.error('Error has occurred. Please try again later.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    });
}

function Faucet(){
    return (
      <>
        <div className="relative overflow-hidden">
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <meta
              name="description"
              content="Arcade Chain is crypto game platform where users can play classic and new exiting arcade games using a stable coin. Crypto initial token offering - pre-sale"
            />
            <meta
              name="keywords"
              content="ArcadeChain, Arcade Chain, Arcade, Crypto Game, ICO, initial coin offering, Crypto Token, Crypto Games, Passive Income, Blockchain Games, token pre-sale, pre-sale, stable coin"
            />
            <meta property={"og:locale"} content={"en_US"} />
            <meta property={"og:type"} content={"website"} />
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
            <meta property={"og:url"} content={"https://www.arcadechain.io"} />
            <meta property={"og:site_name"} content={"Arcade Chain"} />
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
            <meta property={"twitter:card"} content={"summary"} />
            <meta name="twitter:site" content="https://www.arcadechain.io" />
            <meta
              name="twitter:title"
              content="Arcade Chain - Crypto games - initial coin offering - token pre-sale"
            />
            <meta
              name="twitter:description"
              content="Arcade Chain is crypto game platform where users can play classic and new exiting arcade games using a stable coin. Crypto initial token offering - pre-sale"
            />
            <meta name="twitter:creator" content="@arcadechain" />
            <title>Arcade Chain - Slot Machine Crypto Game</title>
          </Head>
          <Background />
          <Header />

          <main className="mx-auto mt-16 max-w-container px-4 sm:mt-24 sm:px-10 3xl:px-0">
              <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
              />
            <FaucetComp onFaucetRequest={sendFaucetRequest}/>
          </main>
          <Footer />
        </div>
      </>
    );
}

export default Faucet;

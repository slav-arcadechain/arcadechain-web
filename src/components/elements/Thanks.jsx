import ERC20 from "../elements/ERC20"
import Network from "../elements/Network";
import React from "react";
export const ThankYouComp = () => {
    return (
        <div className="grid place-items-center mt-40 mb-80 pb-20">
            <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-800 dark:text-gray-400 font-bold">Thank you.</span>
                </div>

                <div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Your request has been received and we will process it shorty.
                    </p>
                    
                </div>
            </div>
            <section className={'pb-10 mt-10 flex flex-col max-w-4xl mx-auto overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48 border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'}>
                <div className="m-4 p-4">
                    <p className="text-2xl font-bold text-gray-200 dark:text-white ">Polygon (Mumbai) Test Network</p>
                    <div >
                        <p className="mt-2 mb-3 text-gray-600 ">Our games support Polygon Test network for testing our blockchain functionality prior to production releases.
                        </p>
                        <div className="grid grid-cols-2 mt-2 md:ml-40 ">
                            <div className={"ml-5 "}>
                                <Network chainId='0x13881' chainName="Polygon Testnet"
                                         rpcUrls="https://rpc-mumbai.maticvigil.com/v1/c542596d3086e52602d4c9d913d1c6f709639f08"
                                         nameOfNativeCurrency="MATIC"
                                         blockExplorerUrls="https://mumbai.polygonscan.com/"/>
                            </div>
                            <div>
                                <ERC20 chainId='0x13881'
                                       tokenAddress='0x0F4c292a373922661b98E46F3dedB3D8f424b31E'
                                       tokenSymbol='TUSD' tokenDecimals={18}/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className={'mt-10 flex flex-col max-w-4xl mx-auto overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48 border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'}>
                <div className="m-4 p-4">
                    <p className="text-2xl font-bold text-gray-200 dark:text-white ">Use Binance Test Network</p>
                    <div>
                        <p className="mt-2 mb-3 text-gray-600 ">Our games support Binance Test network for testing our blockchain functionality prior to production releases.
                        </p>
                        <div className="grid grid-cols-2 mt-2 md:ml-40 ">
                            <div className={"ml-5"}>
                                <Network color="black" chainId='0x61' chainName="Binance Testnet"
                                         rpcUrls="https://data-seed-prebsc-1-s3.binance.org:8545"
                                         nameOfNativeCurrency="TBNB"
                                         blockExplorerUrls="https://testnet.bscscan.com"/>
                            </div>
                            <div>
                                <ERC20 color="black" chainId='0x61'
                                       tokenAddress='0x0A80797c23971590342edb9AEc08E713D31D63f1'
                                       tokenSymbol='TUSD' tokenDecimals={18}/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};
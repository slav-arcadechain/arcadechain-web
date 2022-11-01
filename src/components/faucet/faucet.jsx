import React, {useRef} from "react";
import ERC20 from "../elements/ERC20"
import Network from "../elements/Network";

const FaucetComp = (props) => {
    const chainNamePolygon = useRef();
    const walletAddressPolygon = useRef();
    const chainNameBinance = useRef();
    const walletAddressBinance = useRef();

    function polygonFaucetSubmitHandler(event) {
        event.preventDefault()
        const chain = chainNamePolygon.current.value;
        const wallet = walletAddressPolygon.current.value;
        let faucetRequestData = {
            chain: chain,
            wallet: wallet
        };
        props.onFaucetRequest(faucetRequestData)
        walletAddressPolygon.current.value = '';
    }
    function binanceFaucetSubmitHandler(event) {
        event.preventDefault()
        const chain = chainNameBinance.current.value;
        const wallet = walletAddressBinance.current.value;
        let faucetRequestData = {
            chain: chain,
            wallet: wallet
        };
        props.onFaucetRequest(faucetRequestData)
        walletAddressBinance.current.value = '';
    }

    return (
        <>
            <section
                className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800  border rounded-lg dark:border-gray-600 dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <div className="mt-8 md:items-center justify-center">
                    <div className="px-6 py-6 md:px-8 md:py-0">
                        <div data-netlify-recaptcha="true"></div>
                        <h2 className="text-2xl font-bold text-gray-200 dark:text-white ">Request your test game tokens.
                        </h2>

                        <p className="mt-2 mb-3 text-gray-600">Enter your wallet address and we will send you some TUSD
                            tokens. Be patience this might take a little while.</p>
                    </div>
                </div>

                <div className="flex mt-10 ml-5 items-center text-center justify-center pb-6 md:py-0 ">
                    <div className="mb-10">
                        <form name="faucet" onSubmit={polygonFaucetSubmitHandler}>
                            <input type="hidden" name="form-name" value="polygon" ref={chainNamePolygon}/>
                            <div
                                className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                                <input
                                    ref={walletAddressPolygon}
                                    className="px-4 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                                    type="text"
                                    name="wallet"
                                    pattern="[0][x][a-zA-Z0-9]{40}"
                                    title="Incorrect wallet address"
                                    placeholder="0x00000000000000"
                                    aria-label="Your wallet address"
                                    required
                                    minLength="1"/>
                                <button type="submit"
                                        className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">Get
                                    TUSD on Polygon
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex ml-5 fle items-center text-center justify-center pb-6 md:py-0">
                    <div className="mb-10">
                        <form name="faucet" onSubmit={binanceFaucetSubmitHandler}>
                            <input type="hidden" name="form-name" value="binance" ref={chainNameBinance}/>
                            <div
                                className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                                <input
                                    ref={walletAddressBinance}
                                    className="px-4 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                                    type="text"
                                    name="wallet"
                                    pattern="[0][x][a-zA-Z0-9]{40}"
                                    title="Incorrect wallet address"
                                    placeholder="0x00000000000000"
                                    aria-label="Your wallet address"
                                    required
                                    minLength="1"/>
                                <button type="submit"
                                        className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">Get
                                    TUSD on Binance
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            </section>
            <section
                className={'pb-10 mt-10 flex flex-col max-w-4xl mx-auto overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48 border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'}>
                <div className="m-4 p-4">
                    <p className="text-2xl font-bold text-gray-200 dark:text-white ">Polygon (Mumbai) Test Network</p>
                    <div>
                        <p className="mt-2 mb-3 text-gray-600 ">Our games support Polygon Test network for testing our
                            blockchain functionality prior to production releases.
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
                                       tokenAddress='0x912aAEA32355DA6FeB20D98E73B9C81B5afd6A2e'
                                       tokenSymbol='TUSD' tokenDecimals={18}/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section
                className={'mt-10 flex flex-col max-w-4xl mx-auto overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48 border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'}>
                <div className="m-4 p-4">
                    <p className="text-2xl font-bold text-gray-200 dark:text-white ">Use Binance Test Network</p>
                    <div>
                        <p className="mt-2 mb-3 text-gray-600 ">Our games support Binance Test network for testing our
                            blockchain functionality prior to production releases.
                        </p>
                        <div className="grid grid-cols-2 mt-2 md:ml-40 ">
                            <div className={"ml-5"}>
                                <Network color="black" chainId='0x61' chainName="Binance Testnet"
                                         rpcUrls="https://data-seed-prebsc-1-s3.binance.org:8545"
                                         nameOfNativeCurrency="TBNB"
                                         blockExplorerUrls="https://testnet.bscscan.com"/>
                            </div>
                            <div>
                                <ERC20 color="black" chainId='0x152'
                                       tokenAddress='0x0A80797c23971590342edb9AEc08E713D31D63f1'
                                       tokenSymbol='TUSD' tokenDecimals={18}/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )

}

export default FaucetComp

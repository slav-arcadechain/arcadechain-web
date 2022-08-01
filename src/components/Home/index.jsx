import React, { component } from "react";

const HomeComp = () => {
    return (
        <>
            <div className="text-center">
                <div className={"content-center"}>
                    <video id={'introVideo'} className={"content-center"} src='/videos/intro_small.mp4' autoPlay={true} width={1442} muted={true} controls={true} />
                </div>
            </div>
            <div className="text-center pt-20" id={'header-text'}>
                <h1 className="font-bold tracking-tight text-white text-7xl">
                    <span
                        className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text mix-blend-screen">Crypto games, initial coin offering and pre-sale</span>
                </h1>

                <div className="flex justify-center max-w-md mx-auto mt-8 gap-x-6 md:mt-14 md:gap-x-10">
                    <button
                        className="relative h-10 w-32 font-poppins text-sm font-bold text-white md:h-[54px] md:w-[180px] md:text-base">
                        <a href='#roadmap' title={"roadmap"}>
                            <span className="relative z-20">Learn More</span>
                        </a>
                        <img className="absolute inset-0" src={"/images/btn-gradient-transparent.webp"} alt="" />

                    </button>
                </div>
            </div>

            <div className="pb-10 mt-34 md:mt-51 md:pb-18 ">
                <h2 className="text-xl font-bold text-center md:hidden">About us</h2>
                <h2 className="hidden font-bold text-center md:block md:text-5xl text-white">About Arcade Chain</h2>

                <div className="grid mt-18 gap-x-10 gap-y-4 md:grid-cols-2 md:gap-y-18 lg:grid-cols-3">
                    <div
                        className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">
                        <img className="h-11 w-11 xl:h-20 xl:w-20" src={"/images/002_joystick.svg"}
                            alt="" />

                        <p className="text-sm font-bold md:text-xl xl:text-2xl text-white">Entertaining</p>
                        <p className="text-base text-gray-400 xl:text-xl">
                            From arcade style classics through betting games to modern PvP games. Tones of entertainment for everybody.
                        </p>
                    </div>

                    <div
                        className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">
                        <img className="h-11 w-11 xl:h-20 xl:w-20" src={"/images/005_wallet.svg"}
                            alt="" />

                        <p className="text-sm font-bold md:text-xl xl:text-2xl text-white">Passive income</p>
                        <p className="text-base text-gray-400 xl:text-xl">
                            House never wins! All profits from the game fees are distributed through no-commitment stacking system. <br />
                            In addition genesis NFT token holders will earn percentage of fees from all players holding copies of their token.
                            Fair and stable passive income source for hodlers.
                        </p>
                    </div>

                    <div
                        className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">
                        <img className="h-11 w-11 xl:h-20 xl:w-20" src={"/images/007_point.svg"} alt="" />

                        <p className="text-sm font-bold md:text-xl xl:text-2xl text-white">Play-to-Earn</p>
                        <p className="text-base text-gray-400 xl:text-xl">
                            Most of the ArcadeChain games will allow you to win rewards paid out in stable coin.
                            In addition, holders of NFT tokens minted by members of the community will be able to increase their chances in all games-of-chance.
                        </p>
                    </div>


                    <div
                        className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">
                        <img className="h-11 w-11 xl:h-20 xl:w-20" src={"/images/004_dollar.svg"}
                            alt="" />

                        <p className="text-sm font-bold md:text-xl xl:text-2xl text-white">Stable coin</p>
                        <p className="text-base text-gray-400 xl:text-xl">
                            Are you tired of crypto price swings? All in-game fees and winnings as well as stacking rewards will be distributed in stable coin.
                        </p>
                    </div>
                    <div
                        className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">
                        <img className="h-11 w-11 xl:h-20 xl:w-20" src={"/images/003_happy.svg"}
                            alt="" />

                        <p className="text-sm font-bold md:text-xl xl:text-2xl text-white">Community driven</p>
                        <p className="text-base text-gray-400 xl:text-xl">
                            Game clans and competitions are the the hart of our vision of building community around the project.
                            All ACT holder will have their say about the direction our platform evolves into.
                        </p>
                    </div>

                    <div
                        className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">
                        <img className="h-11 w-11 xl:h-20 xl:w-20" src={"/images/001_blockchain.svg"}
                            alt="" />

                        <p className="text-sm font-bold md:text-xl xl:text-2xl text-white">Multi and Cross-chain</p>
                        <p className="text-base text-gray-400 xl:text-xl">
                            We starting on Binance Smart Chain but our vision is to support multiple chains for the convenience of the players.
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="flex flex-col items-center gap-8 p-4 mt-16 rounded-2xl bg-slate-800/40 md:p-10 lg:flex-row lg:gap-14 xl:gap-55 xl:py-26 xl:px-38">
                <div>
                    <h2 className="text-xl font-bold md:text-4xl text-white">Initial coin offering and token pre-sale</h2>

                    <p className="mt-2 text-left text-gray-400 md:mt-10 xl:text-2xl">
                        Our goal is to have the initial coin offering in the quarter four of 2022 followed by public sale and CEX listing in early 2023. <br />
                        The pre-sale will be open to everyone willing to participate with a cap of $5000 per person. Token price will be set to $0.01 per ACT. <br />
                        The pre-sale is capped at 5% of total supply (please see tokenomics below).
                    </p>

                </div>

                <img src={"/images/arcade-machine.png"} alt="arcade machine"
                    srcSet="images/arcade-machine@2x 2x.png"
                    width="257" height="404" />
            </div>

            <div className="relative fullbleed">
                <div id='roadmap' className="px-4 pb-8 mx-auto mt-10 space-y-6 max-w-container sm:px-10 md:mt-26 md:space-y-30 3xl:px-0">
                    <h2 className="text-xl font-bold text-center md:text-5xl text-white">Roadmap</h2>
                    <picture className="block">
                        <img src={"/images/roadmap.svg"} alt="" />
                    </picture>
                </div>
                <img className="absolute inset-x-0 top-0 w-full -z-10 lg:bottom-0"
                    src={"/images/3d-space-scene.webp"} alt="" />
            </div>

            <div id="tokenomics" className="mt-10 sm:pb-22 md:mt-61">
                <h2 className="text-xl font-bold text-center md:text-5xl text-white">Tokenomics</h2>

                <div
                    className="mt-6 lg:mt-14 lg:flex lg:items-center lg:justify-between lg:gap-x-18 xl:items-end xl:gap-x-24">
                    <div
                        className="mx-auto grid w-full max-w-[471px] pb-10 lg:mx-0 xl:max-w-[541px] 2xl:max-w-[701px] 3xl:max-w-[741px]">
                        <img className="col-span-full row-span-full"
                            src={"/images/round-chart-2.webp"} alt="" />
                    </div>

                    <div className="mx-auto text-white space-y-10 md:mx-0 md:flex-1 lg:pr-10">
                        <div
                            className="relative mx-auto flex h-[95px] w-11/12 max-w-[595px] flex-col items-center justify-center gap-y-1 bg-gray-900 sm:w-10/12 sm:flex-row sm:justify-between md:w-full lg:flex-col lg:justify-center xl:flex-row xl:justify-between">
                            <img className="absolute -top-px -left-5 sm:left-[-52px]"
                                src={"/images/bar-edge-left.svg"} alt="" />
                            <img className="absolute -top-px -right-5 sm:right-[-52px]"
                                src={"/images/bar-edge-right.svg"} alt="" />

                            <div className="relative z-20">
                                <p className="flex items-baseline justify-center gap-x-3 sm:justify-start lg:justify-center xl:justify-start">
                                    <span
                                        className="text-sm font-semibold text-teal-300 md:text-xl lg:text-base xl:text-xl">40%</span>
                                    <span
                                        className="text-xs md:text-xl md:font-bold lg:text-base xl:text-xl ">Community and game development</span>
                                </p>
                                <p className="mt-2 text-xs text-gray-400 md:text-base lg:text-sm xl:text-base">
                                    0% at TGE - 3 month cliff then 5 year weekly releases
                                </p>
                            </div>
                            <div
                                className="relative z-20 flex items-baseline gap-2 sm:flex-col-reverse sm:items-end lg:flex-row xl:flex-col-reverse">
                                <p className="text-sm font-semibold md:text-xl lg:text-base xl:text-xl">400,000,000</p>
                                <p className="text-sm text-gray-400 md:text-base">tokens</p>
                            </div>
                        </div>

                        <div
                            className="relative mx-auto flex h-[95px] w-11/12 max-w-[595px] flex-col items-center justify-center gap-y-1 bg-gray-900 sm:w-10/12 sm:flex-row sm:justify-between md:w-full lg:flex-col lg:justify-center xl:flex-row xl:justify-between">
                            <img className="absolute -top-px -left-5 sm:left-[-52px]"
                                src={"/images/bar-edge-left.svg"} alt="" />
                            <img className="absolute -top-px -right-5 sm:right-[-52px]"
                                src={"/images/bar-edge-right.svg"} alt="" />

                            <div className="relative z-20">
                                <p className="flex items-baseline justify-center gap-x-3 sm:justify-start lg:justify-center xl:justify-start">
                                    <span
                                        className="text-sm font-semibold text-teal-300 md:text-xl lg:text-base xl:text-xl">10%</span>
                                    <span
                                        className="text-xs md:text-xl md:font-bold lg:text-base xl:text-xl">Team</span>
                                </p>
                                <p className="mt-2 text-xs text-gray-400 md:text-base lg:text-sm xl:text-base">
                                    0 % at TGE - 3 month cliff then 3 year weekly releases
                                </p>
                            </div>
                            <div
                                className="relative z-20 flex items-baseline gap-2 sm:flex-col-reverse sm:items-end lg:flex-row xl:flex-col-reverse">
                                <p className="text-sm font-semibold md:text-xl lg:text-base xl:text-xl">100,000,000</p>
                                <p className="text-sm text-gray-400 md:text-base">tokens</p>
                            </div>
                        </div>

                        <div
                            className="relative mx-auto flex h-[95px] w-11/12 max-w-[595px] flex-col items-center justify-center gap-y-1 bg-gray-900 sm:w-10/12 sm:flex-row sm:justify-between md:w-full lg:flex-col lg:justify-center xl:flex-row xl:justify-between">
                            <img className="absolute -top-px -left-5 sm:left-[-52px]"
                                src={"/images/bar-edge-left.svg"} alt="" />
                            <img className="absolute -top-px -right-5 sm:right-[-52px]"
                                src={"/images/bar-edge-right.svg"} alt="" />

                            <div className="relative z-20">
                                <p className="flex items-baseline justify-center gap-x-3 sm:justify-start lg:justify-center xl:justify-start">
                                    <span
                                        className="text-sm font-semibold text-teal-300 md:text-xl lg:text-base xl:text-xl">10%</span>
                                    <span
                                        className="text-xs md:text-xl md:font-bold lg:text-base xl:text-xl">Company reserves</span>
                                </p>
                                <p className="mt-2 text-xs text-gray-400 md:text-base lg:text-sm xl:text-base">
                                    0 % at TGE - 1 year cliff then 3 year weekly releases
                                </p>
                            </div>
                            <div
                                className="relative z-20 flex items-baseline gap-2 sm:flex-col-reverse sm:items-end lg:flex-row xl:flex-col-reverse">
                                <p className="text-sm font-semibold md:text-xl lg:text-base xl:text-xl">100,000,000</p>
                                <p className="text-sm text-gray-400 md:text-base">tokens</p>
                            </div>
                        </div>

                        <div
                            className="relative mx-auto flex h-[95px] w-11/12 max-w-[595px] flex-col items-center justify-center gap-y-1 bg-gray-900 sm:w-10/12 sm:flex-row sm:justify-between md:w-full lg:flex-col lg:justify-center xl:flex-row xl:justify-between">
                            <img className="absolute -top-px -left-5 sm:left-[-52px]"
                                src={"/images/bar-edge-left.svg"} alt="" />
                            <img className="absolute -top-px -right-5 sm:right-[-52px]"
                                src={"/images/bar-edge-right.svg"} alt="" />

                            <div className="relative z-20">
                                <p className="flex items-baseline justify-center gap-x-3 sm:justify-start lg:justify-center xl:justify-start">
                                    <span
                                        className="text-sm font-semibold text-teal-300 md:text-xl lg:text-base xl:text-xl">5%</span>
                                    <span
                                        className="text-xs md:text-xl md:font-bold lg:text-base xl:text-xl">Pre-sale</span>
                                </p>
                                <p className="mt-2 text-xs text-gray-400 md:text-base lg:text-sm xl:text-base">
                                    10% at TGE - 1 year weekly releases
                                </p>
                            </div>
                            <div
                                className="relative z-20 flex items-baseline gap-2 sm:flex-col-reverse sm:items-end lg:flex-row xl:flex-col-reverse">
                                <p className="text-sm font-semibold md:text-xl lg:text-base xl:text-xl">50,000,000</p>
                                <p className="text-sm text-gray-400 md:text-base">tokens</p>
                            </div>
                        </div>

                        <div
                            className="relative mx-auto flex h-[95px] w-11/12 max-w-[595px] flex-col items-center justify-center gap-y-1 bg-gray-900 sm:w-10/12 sm:flex-row sm:justify-between md:w-full lg:flex-col lg:justify-center xl:flex-row xl:justify-between">
                            <img className="absolute -top-px -left-5 sm:left-[-52px]"
                                src={"/images/bar-edge-left.svg"} alt="" />
                            <img className="absolute -top-px -right-5 sm:right-[-52px]"
                                src={"/images/bar-edge-right.svg"} alt="" />

                            <div className="relative z-20">
                                <p className="flex items-baseline justify-center gap-x-3 sm:justify-start lg:justify-center xl:justify-start">
                                    <span
                                        className="text-sm font-semibold text-teal-300 md:text-xl lg:text-base xl:text-xl">20%</span>
                                    <span
                                        className="text-xs md:text-xl md:font-bold lg:text-base xl:text-xl">CEX Listing & Liquidity</span>
                                </p>
                                <p className="mt-2 text-xs text-gray-400 md:text-base lg:text-sm xl:text-base">
                                    20% at TGE - 10% unlocked each month after
                                </p>
                            </div>
                            <div
                                className="relative z-20 flex items-baseline gap-2 sm:flex-col-reverse sm:items-end lg:flex-row xl:flex-col-reverse">
                                <p className="text-sm font-semibold md:text-xl lg:text-base xl:text-xl">200,000,000</p>
                                <p className="text-sm text-gray-400 md:text-base">tokens</p>
                            </div>
                        </div>

                        <div
                            className="relative mx-auto flex h-[95px] w-11/12 max-w-[595px] flex-col items-center justify-center gap-y-1 bg-gray-900 sm:w-10/12 sm:flex-row sm:justify-between md:w-full lg:flex-col lg:justify-center xl:flex-row xl:justify-between">
                            <img className="absolute -top-px -left-5 sm:left-[-52px]"
                                src={"/images/bar-edge-left.svg"} alt="" />
                            <img className="absolute -top-px -right-5 sm:right-[-52px]"
                                src={"/images/bar-edge-right.svg"} alt="" />

                            <div className="relative z-20">
                                <p className="flex items-baseline justify-center gap-x-3 sm:justify-start lg:justify-center xl:justify-start">
                                    <span
                                        className="text-sm font-semibold text-teal-300 md:text-xl lg:text-base xl:text-xl">15%</span>
                                    <span
                                        className="text-xs md:text-xl md:font-bold lg:text-base xl:text-xl">Marketing</span>
                                </p>
                                <p className="mt-2 text-xs text-gray-400 md:text-base lg:text-sm xl:text-base">
                                    20% at TGE - 3 year weekly releases
                                </p>
                            </div>
                            <div
                                className="relative z-20 flex items-baseline gap-2 sm:flex-col-reverse sm:items-end lg:flex-row xl:flex-col-reverse">
                                <p className="text-sm font-semibold md:text-xl lg:text-base xl:text-xl">150,000,000</p>
                                <p className="text-sm text-gray-400 md:text-base">tokens</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}

export default HomeComp

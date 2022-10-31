import Link from "next/link";
import Image from "next/image";
import React, { Component } from "react";

class Footer extends Component {

    render() {
        return <>
            <footer>
                <div className="px-4 py-8 mx-auto mt-10 max-w-container sm:px-10 md:mt-21 3xl:px-0">
                    <div
                        className="grid grid-cols-2 gap-5 xl:gap-60x sm:grid-cols-3 sm:gap-10 md:flex md:justify-between">
                        <div className="ow-start-2 space-y-4 text-center col-span-full sm:col-span-1 sm:col-start-1 sm:row-start-2 sm:text-left md:space-y-6">
                            <Link
                                href='/'
                                className="relative z-50 flex flex-col items-center gap-2 whitespace-nowrap sm:flex-row md:gap-4"
                                title={"Arcade Chain"}>

                                <Image className="" src={"/images/arcade_chain.svg"} width="256" height="256" alt="arcade chain" />

                            </Link>

                        </div>
                        <div className="row-start-2 space-y-4 text-center col-span-full sm:col-span-1 sm:col-start-2 sm:row-start-2 sm:text-left md:space-y-6">
                            <h3 className="font-bold text-white uppercase">Links</h3>
                            <ul className="space-y-2 text-sm text-gray-400 lowercase">
                                <li><Link legacyBehavior href='/slot'><a target='_self' rel='noreferrer'>Slot Game (beta)</a></Link></li>
                                <li><Link legacyBehavior href='/faucet'><a target='_self' rel='noreferrer'>TUSD faucet</a></Link></li>
                                <li><Link legacyBehavior href='/arcade_chain_whitepaper.pdf'><a target='_blank' rel='noreferrer'>White Paper</a></Link></li>
                                <li><Link legacyBehavior href='https://stats.uptimerobot.com/4JKrysz4ng/792409760'><a target='_blank' rel='noreferrer'>Site Monitoring</a></Link></li>
                            </ul>
                        </div>
                        <div
                            className="row-start-3 space-y-4 text-center col-span-full sm:col-span-1 sm:col-start-3 sm:row-start-2 sm:text-left md:space-y-6">
                            <h3 className="font-bold text-white uppercase">Contact</h3>

                            <a className="block text-gray-400"
                                href="mailto:support@arcadechain.io" title={"email"}>support@arcadechain.io</a>

                            <div className="flex items-center mx-auto w-fit gap-x-6">
                                <a href="https://twitter.com/archadechain" title={"twitter"}>
                                    <div className="h-8 w-8 xl:h-20 xl:w-12 relative">
                                        <Image height={80} width={80} layout="fill" src={"/images/twitter.svg"} alt="twitter" />
                                    </div>
                                </a>
                                <a href="https://t.me/arcadechain" title={"telegram"}>
                                    <div className="h-8 w-8 xl:h-20 xl:w-12 relative">
                                        <Image height={80} width={80} layout="fill" src={"/images/telegram.svg"} alt="telegram" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 mt-12 border-t border-gray-500">
                        <p className="text-sm text-center text-gray-400">&copy; 2022 Arcade. All rights
                            reserved.</p>
                    </div>
                </div>
            </footer>
        </>;
    }
}

export default Footer;

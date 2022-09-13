import Link from "next/link";
import React from "react";

export const Step = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 text-white">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                    id="d0d83814-78b6-480f-9a5f-7f637616b267"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                  fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                  width="52"
                  height="24"
              />
            </svg>
            <span className="relative">Slot</span>
          </span>{' '}
                   game meets the blockchain.
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                   Explore the classic game of Slot in entirely new setting. All transactions are securely registered on the block chain.
                </p>
            </div>
            <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
                    <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
                </div>
                <div
                    className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5 text-white">Wallet</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 text-white">
                            1
                        </p>
                    </div>
                    <p className="text-sm text-gray-400">
                        Connect your wallet. We recommend that you use Metamask but any web3 crypto wallet should work. Remember to use Cronos Test network.
                    </p>
                </div>
                <div
                    className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5 text-white">Connect</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 text-white">
                            2
                        </p>
                    </div>
                    <p className="text-sm text-gray-400">
                        Sign in with your wallet. No account creation or credentials creation is needed.
                    </p>
                </div>
                <div className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">

                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5 text-white">Approve</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 text-white">
                            3
                        </p>
                    </div>
                    <p className="text-sm text-gray-400">


                        <Link  className='font-bold text-white text-lg'  href='/faucet'><a target='_self' rel='noreferrer' className='font-bold '>Get your in game TUSD tokens. </a></Link>
                        <br/>
                        Approve them for in-game spending. Approving tokens by itself won't charge you.
                    </p>
                </div>
                <div
                    className="p-4 space-y-2 rounded-2xl bg-slate-800/40 drop-shadow-white-xl backdrop-blur-sm md:space-y-4 md:p-10">

                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5 text-white">Play</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 text-white ">
                            4
                        </p>
                    </div>
                    <p className="text-sm text-gray-400">
                        Play the game by pressing the Spin button. Wait a few moments and see what is your win today!
                    </p>
                </div>
            </div>
        </div>
    );
};
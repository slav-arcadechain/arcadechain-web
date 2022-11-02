import {useMoralis} from "react-moralis";

function Network({chainId, chainName, rpcUrls, nameOfNativeCurrency, blockExplorerUrls}) {
    const {isAuthenticated, authenticate} = useMoralis()
    let currentChainId

    async function switchChain() {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: chainId}],
        })
    }

    async function addChain() {
        console.log("want to add chain")
        await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: chainId,
                    chainName: chainName,
                    rpcUrls: [rpcUrls],
                    nativeCurrency: {
                        name: nameOfNativeCurrency,
                        symbol: nameOfNativeCurrency,
                        decimals: 18
                    },
                    blockExplorerUrls: [blockExplorerUrls]
                }
            ]
        })
    }

    const addChainByButtonClick = async () => {
        if (!isAuthenticated) {
            await authenticate({signingMessage: "Log in to interact with Arcade Chain"})
        }
        currentChainId = await ethereum.request({
            method: 'eth_chainId',
        })
        if (currentChainId != chainId) {
            await addChain()
        }
        await switchChain()
    }

    return (
        <>
            <button onClick={addChainByButtonClick}
                    className={`bg-gradient-to-r from-purple-600 to-pink-500 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`}>
                <p className="relative z-20">Add {chainName} <br/>to Metamask</p>
            </button>
        </>
    )
}

export default Network
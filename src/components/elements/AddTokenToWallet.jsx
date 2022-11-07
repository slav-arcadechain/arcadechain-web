import {useNetwork, useSwitchNetwork} from "wagmi";
import {addToken} from "../../utils/web3";
import {toast} from "react-toastify";


function AddTokenToWallet({chainId, chainName, tokenAddress, tokenSymbol, tokenDecimals}) {
    const {chain, chains} = useNetwork();
    const {switchNetwork} = useSwitchNetwork({
        chainId: chainId
    })


    const addTokenToHandler = async () => {
        const chainIdDecimal = parseInt(chainId, 16);

        if (!chain || chain.id !== chainIdDecimal) {
            toast.warn(`Please connect your wallet and change to ${chainName} network before adding the token`)
        } else {
            await addToken(tokenAddress, tokenSymbol, tokenDecimals)
        }
    }

    return (
        <>
            <button onClick={addTokenToHandler}
                    className={`bg-gradient-to-r from-purple-600 to-pink-500 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`}>
                <p className="relative z-20">Add {tokenSymbol} to <br/> Metamask</p>
            </button>
        </>
    )
}


export default AddTokenToWallet;
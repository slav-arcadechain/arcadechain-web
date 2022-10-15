import Script from "next/script"
import { useMoralis } from "react-moralis";
const tokenAddress = '0x912aAEA32355DA6FeB20D98E73B9C81B5afd6A2e';
const tokenSymbol = 'TUT';
const tokenDecimals = 18;

export default function ERC20() {   
    const {isAuthenticated,authenticate} = useMoralis()
    let currentChainId 
    const cronosTestnedId = '0x152'
    const tokenAddress = '0x912aAEA32355DA6FeB20D98E73B9C81B5afd6A2e';
    const tokenSymbol = 'TUSD';
    const tokenDecimals = 18;

      async function switchChain() {
         await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: cronosTestnedId }],
        })
    }

       async function addTUSD() {
          await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
              type: 'ERC20',
              options: {
                address: tokenAddress, // The address that the token is at.
                symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                decimals: tokenDecimals, // The number of decimals in the token
              },
            },
          });
    }

    const addToken = async () => {     
        if(!isAuthenticated) {
            await authenticate({signingMessage: "Log in to interact with arcadeChain" })
        } else {
            currentChainId = await ethereum.request({
                method: 'eth_chainId',
            })
            if(currentChainId!=cronosTestnedId) {
                await switchChain()
                await addTUSD()     
            } else {
                await addTUSD()
            }
            
        }
    }
        return(
            <>
                <div className="absolute  font-poppins text-sm font-bold text-white md:h-[25px] md:w-[200px] ">
                        <button onClick={addToken}>
                            <p className="mt-3 ml-5 text-sm font-bold text-white">Add TUSD to Metamask</p>        
                            <img layout="fill" className="absolute inset-0 md:h-[45px] md:w-[200px]" src={"/images/btn-gradient-transparent.webp"} alt="button gradient" />                        
                        </button>
                </div>
            </>       
    )
}



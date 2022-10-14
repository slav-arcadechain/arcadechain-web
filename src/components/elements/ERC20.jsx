import Script from "next/script"
// import test from "../../web3/wallet"
import { useMoralis } from "react-moralis";



export default function ERC20() {   
    const {isAuthenticated,authenticate,user } = useMoralis()
        return(
            <>
                <Script src="src/web3/wallet"/>
                <div className="absolute  font-poppins text-sm font-bold text-white md:h-[25px] md:w-[200px] ">
                        <button type="submit" onClick={isAuthenticated? console.log(true) : console.log(false)}>
                            <p className="mt-3 ml-5 text-sm font-bold text-white">Add TUSD to Metamask</p>        
                            <img layout="fill" className="absolute inset-0 md:h-[45px] md:w-[200px]" src={"/images/btn-gradient-transparent.webp"} alt="button gradient" />                        
                        </button>
                </div>
            </>       
    )
}



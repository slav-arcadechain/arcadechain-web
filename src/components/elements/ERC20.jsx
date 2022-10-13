import Script from "next/script"

const ERC20 =() => {   
    return(
        <>
            <script src="public/faucet/web3/index.js"/>
            <div className="absolute  font-poppins text-sm font-bold text-white md:h-[25px] md:w-[200px] ">
                    <button type="submit" onClick={test()}>
                        <p className="mt-3 ml-5 text-sm font-bold text-white">Add TUSD to Metamask</p>        
                        <img layout="fill" className="absolute inset-0 md:h-[45px] md:w-[200px]" src={"/images/btn-gradient-transparent.webp"} alt="button gradient" />                        
                    </button>
            </div>
        </>       
)}

export default ERC20
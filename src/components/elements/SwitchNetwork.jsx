import {useSwitchNetwork,} from 'wagmi';

function SwitchNetwork({chainId, chainName}) {
    const {switchNetwork} = useSwitchNetwork({
        chainId: chainId
    })

    return (
        <>
            <button onClick={() => switchNetwork?.(chainId)}
                    className={`bg-gradient-to-r from-purple-600 to-pink-500 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`}>
                <p className="relative z-20">Switch to {chainName}</p>
            </button>
        </>
    )
}

export default SwitchNetwork
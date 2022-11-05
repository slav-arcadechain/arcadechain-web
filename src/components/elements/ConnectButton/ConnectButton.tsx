import {InjectedConnector} from 'wagmi/connectors/injected';
import {signIn, signOut, useSession} from 'next-auth/react';
import {useAccount, useConnect, useDisconnect, useSignMessage} from 'wagmi';
import apiPost from "../../../utils/apiPost";
import {getEllipsisTxt} from "../../../utils/format";
import {toast} from "react-toastify";
import Identicon from 'react-identicons';


const ConnectButton = () => {
    const {connectAsync} = useConnect({connector: new InjectedConnector()});
    const {disconnectAsync} = useDisconnect();
    const {isConnected} = useAccount();
    const {signMessageAsync} = useSignMessage();
    const {data} = useSession();

    const handleAuth = async () => {
        if (isConnected) {
            await disconnectAsync();
        }
        try {
            const {account, chain} = await connectAsync();

            console.log(JSON.stringify(chain));

            const userData = {address: account, chain: chain.id, network: 'evm'};

            const {message} = await apiPost('/auth/request-message', userData);

            const signature = await signMessageAsync({message});

            await signIn('credentials', {message, signature, callbackUrl: '/'});
        } catch (e) {
            toast.error('Oops, something is wrong...');
        }
    };

    const handleDisconnect = async () => {
        await disconnectAsync();
        await signOut({callbackUrl: '/'});
    };

    if (data?.user) {
        return (
            <div onClick={handleDisconnect} className={"flex cursor-pointer"}>
                <div>
                    <Identicon string="randomness" size={20}/>
                </div>
                <div>
                    <p className={"text-white ml-2"}>{getEllipsisTxt(data.user.address)}</p>
                </div>
            </div>
        );
    }
    return (
        <button onClick={handleAuth}
                className={"bg-gradient-to-r from-purple-600 to-pink-500 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-9 py-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"}>
            Connect Wallet
        </button>
    );
};

export default ConnectButton;

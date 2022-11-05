import "../../styles/global.css";
import {allChains, configureChains, createClient, defaultChains, WagmiConfig} from "wagmi";
import {publicProvider} from 'wagmi/providers/public';
import {SessionProvider} from "next-auth/react";
import {AppProps} from "next/app";


const {provider, webSocketProvider} = configureChains(allChains, [publicProvider()]);

const client = createClient({
    provider,
    webSocketProvider,
    autoConnect: true,
});

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
            <WagmiConfig client={client}>
                <SessionProvider session={pageProps.session} refetchInterval={0}>
                    <Component {...pageProps} />
                </SessionProvider>
            </WagmiConfig>
    );
};

export default MyApp;



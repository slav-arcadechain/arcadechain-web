export async function switchChain(chainId){
    await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId }],
    })
}

export async function addToken(tokenAddress, tokenSymbol, tokenDecimals) {
    await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress, 
          symbol: tokenSymbol, 
          decimals: tokenDecimals,
        },
      },
    });
}

export async function addChain(chainId,chainName,rpcUrls,nameOfNativeCurrency,blockExplorerUrls){
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


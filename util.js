function auth(){
    ethereum.request({ method: 'eth_requestAccounts' });
}
function pay(to,value){
    transactionParameters = {
        nonce: '0x00', // ignored by MetaMask
        gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
        gas: '0x2710', // customizable by user during MetaMask confirmation.
        to: to, // Required except during contract publications.
        from: ethereum.selectedAddress, // must match user's active address.
        value: (value*1000000000000000000).toString(16), // Only required to send ether to the recipient from the initiating external account.
        chainId: '0xf79', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
    };
}

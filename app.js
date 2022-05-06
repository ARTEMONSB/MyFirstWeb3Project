import Web3 from 'web3';
const web3 = new Web3('https://mainnet.infura.io/v3/5cfd4082f78246dba7b89998f2666dd8');

const ethereumButton = document.getElementById("ttt");

ethereumButton.addEventListener('click', () => {
    console.log("Hello");
});

web3.eth.getBlockNumber(function(error, result) {
    console.log(result);
})

const Web3 = require("web3");
const axios = require("axios");

const wsAddress = "wss://mainnet.infura.io/ws/v3/212c02cd797c450196360d33dfbf51c7";

const web3 = new Web3(new Web3.providers.WebsocketProvider(wsAddress));

const subscription = web3.eth.subscribe("pendingTransactions");

const MIN_TX_VALUE = 50;

subscription
    .subscribe((error, result) => {
        if (error) console.log(error);
    })
    .on("data", async (txHash) => {
        try {
            const tx = await web3.eth.getTransaction(txHash);

            if(tx) {
                const txValue = web3.utils.fromWei(tx.value, 'ether');

                if(txValue >= MIN_TX_VALUE) {
                    console.log('Inserting data...');

                    const transaction = {
                        value: txValue,
                        sender: tx.from,
                        receiver: tx.to,
                        hash: tx.hash
                    }

                    const request = {
                        url: "http://localhost:3000/api/transactions",
                        method: "post",
                        headers: {
                            "Content-type": "application/json"
                        },
                        data: transaction
                    };

                    await axios(request);
                }
            }
        } catch (error) {
            console.log(error);
        }
    });

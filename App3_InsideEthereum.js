/*
Jawad Habibullah Swati
jawadswati@gmail.com
Roll No: PIAIC110540
Batch 8, Quarter 3
Course: Blockchain
*/

var Tx = require('ethereumjs-tx')
//var Tx = require('ethereumjs-tx').Transaction

const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/805c17d06398493bb83533dd3f03874a')

// already had following accounts with some balance on ropsten

const accountA = '0xFD69B0CEAF2957bFeA2f0E5646107de53f4b8c11'
const accountB = '0xeC80d35F94E87A23127ADA2757F28dFA2A5B9111'

web3.eth.getBalance(accountA, (err, result) => { console.log('Balance of Account A in wei: ', result) })
web3.eth.getBalance(accountB, (err, bal) => { balance = web3.utils.fromWei(bal, 'ether'); console.log('Balance of Account B in ether: ', balance) })


// console.log(web3.eth.accounts.create())

// Used above command to create following two accounts

//  address: '0x15A8d5bbCc0aC92B0eDf27173C6Bb79AE2D6CA4e',
//  privateKey: '0x39657ab9ac981cd60bed16d7439a88c2cdf481c4ccbdd8f691461c931ebcc6ae'
//  address: '0xa86088EA730163536550ECeb15b7c8cd87Fd0371',
//  privateKey: '0x83fcd389e12d8d7b5e3317c1e4675b8188348340dae5ddb2b157f44ec9393428'

const account1 = '0x15A8d5bbCc0aC92B0eDf27173C6Bb79AE2D6CA4e'
const account2 = '0xa86088EA730163536550ECeb15b7c8cd87Fd0371'

// I ran the following commands on command prompt.
// export PRIVATE_KEY_1='0x39657ab9ac981cd60bed16d7439a88c2cdf481c4ccbdd8f691461c931ebcc6ae'
// export PRIVATE_KEY_2='0x83fcd389e12d8d7b5e3317c1e4675b8188348340dae5ddb2b157f44ec9393428'

//const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1)
//const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2)
const privateKey1 = process.env.PRIVATE_KEY_1
const privateKey2 = process.env.PRIVATE_KEY_2

web3.eth.getBalance(account1, (err, bal) => { balance = web3.utils.fromWei(bal, 'ether'); console.log('Balance of Account 1 in ether: ', balance) })
// couldn't arrange more than 0.3 ether at the moment.


web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    to:       account2,
    value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  }

  // Sign the transaction
  //const tx = new Tx(txObject)
  const tx = new Tx.Transaction(txObject)
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash)
    // Need to check etherscan to see the transaction!
  })
})


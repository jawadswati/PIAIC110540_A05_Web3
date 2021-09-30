/*
Jawad Habibullah Swati
jawadswati@gmail.com
Roll No: PIAIC110540
Batch 8, Quarter 3
Course: Blockchain
*/

var Web3 = require('web3')
var url = 'https://mainnet.infura.io/v3/805c17d06398493bb83533dd3f03874a'
var web3 = new Web3(url)

// Enquire balance of a given address in different ether units
// I took address of Eth2 Deposit Contract, highest on the mainnet at the moment

var address = '0x00000000219ab540356cBB839Cbe05303d7705Fa'

var balance = ''

web3.eth.getBalance(address, (err, bal) => { balance = bal; console.log('Account balance on ropsten (in wei): ', balance) })
web3.eth.getBalance(address, (err, bal) => { balance = bal; console.log('Account balance  on ropsten (in ether)', web3.utils.fromWei(balance, 'ether')) })

//Following work fine on command prompt, however need to be formatted like above for app
//web3.utils.fromWei(balance, 'grand')
//web3.utils.fromWei(balance, 'mether')
//web3.utils.fromWei(balance, 'tether')
//web3.utils.fromWei(balance, 'finney')
//web3.utils.fromWei(balance, 'Gwei')
//web3.utils.fromWei(balance, 'gwei')

// Created an Account on mainnet
// web3.eth.accounts.create()

// Balance of the created address, copy pasted from console

address = '0x31B5F792C28d1c4a4fA0098709f12516fC8A5BdE'
web3.eth.getBalance(address, (err, bal) => { balance = bal; console.log('balance (in wei): ', balance) })
web3.eth.getBalance(address, (err, bal) => { balance = bal; console.log('Created account balance on ropsten (in ether): ', web3.utils.fromWei(balance, 'ether')) })
web3.eth.getBalance(address, (err, bal) => { balance = bal; console.log('Created account balance on ropsten (in gwei): ', web3.utils.fromWei(balance, 'gwei')) })

// On my local Ganache
var localGanacheWeb3 = new Web3 ('HTTP://127.0.0.1:7545')
localGanacheWeb3.eth.getBalance('0x9657b34c0A1D68F593d1A8Bf10774E92fa38C866', (err, bal) => { balance = localGanacheWeb3.utils.fromWei(bal, 'ether'); console.log('Local ganache account balance (in ether): ', balance) })


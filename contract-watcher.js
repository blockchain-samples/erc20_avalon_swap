const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/'+config.infuraKey)
const InputDataDecoder = require('ethereum-input-data-decoder');
const decoder = new InputDataDecoder([
    {
        "inputs": [
        {
            "internalType": "string",
            "name": "name",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
        }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
        }
        ],
        "name": "Paused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
        },
        {
            "indexed": true,
            "internalType": "bytes32",
            "name": "previousAdminRole",
            "type": "bytes32"
        },
        {
            "indexed": true,
            "internalType": "bytes32",
            "name": "newAdminRole",
            "type": "bytes32"
        }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
        }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
        }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
        }
        ],
        "name": "Unpaused",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MINTER_ROLE",
        "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PAUSER_ROLE",
        "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }
        ],
        "name": "allowance",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
        ],
        "name": "approve",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "account",
            "type": "address"
        }
        ],
        "name": "balanceOf",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "account",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
        {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
        }
        ],
        "name": "decreaseAllowance",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
        }
        ],
        "name": "getRoleAdmin",
        "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
        },
        {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }
        ],
        "name": "getRoleMember",
        "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
        }
        ],
        "name": "getRoleMemberCount",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
        },
        {
            "internalType": "address",
            "name": "account",
            "type": "address"
        }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
        },
        {
            "internalType": "address",
            "name": "account",
            "type": "address"
        }
        ],
        "name": "hasRole",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
        }
        ],
        "name": "increaseAllowance",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
        },
        {
            "internalType": "address",
            "name": "account",
            "type": "address"
        }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
        },
        {
            "internalType": "address",
            "name": "account",
            "type": "address"
        }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
        ],
        "name": "transfer",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "sender",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
        ],
        "name": "transferFrom",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        },
        {
            "internalType": "string",
            "name": "avalon_recipient",
            "type": "string"
        }
        ],
        "name": "transferToAvalon",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]);
var javalon = require('javalon')
javalon.init({api: 'https://avalon.d.tube'})
let delay = 10000
let blocksToConfirm = 10
let toConfirm = {}
let watchingAddress = null

class ContractWatcher {
    constructor(address) {
        console.log('Watching '+config.ethContractAddress+'@eth')
        watchingAddress = address.toLowerCase();
    }

    async checkBlock(number) {
        // console.log('Checking block '+number)
        let block = await web3.eth.getBlock(number);
        if (!block) {
            // console.log('no new eth block')
            setTimeout(function() {WDTCWatcher.checkBlock(number)}, delay)
            return
        }

        headblocks.eth = number
        fs.writeFileSync('./headblocks.js', "module.exports={eth:"+headblocks.eth+",avalon:"+headblocks.avalon+"}")        

        let secondsAgo = Math.round(new Date().getTime()/1000 - block.timestamp)
        let transactions = block.transactions;
        if (number%config.blocksDisplay === 0)
            console.log('Ethereum Block #'+number+' '+secondsAgo+'s ago with '+transactions.length+' txs')
        
        this.verifyTxStatus(number)

        var logNumber = number-1
        web3.eth.getPastLogs({
            address: config.ethContractAddress,
            fromBlock: logNumber,
            toBlock: logNumber
        }).then(function(logs) {
            // console.log('Logs for block #'+logNumber,logs)
            for (let i = 0; i < logs.length; i++) {
                web3.eth.getTransaction(logs[i].transactionHash).then(function(tx) {
                    if (tx && tx.to && watchingAddress == tx.to.toLowerCase()) {
                        var decodedTx = decoder.decodeData(tx.input)
                        if (decodedTx.method === 'transferToAvalon') {
                            let avalonReceiver = decodedTx.inputs[1]
                            let amount = decodedTx.inputs[0].toNumber()
                            if (toConfirm[logNumber+blocksToConfirm])
                                toConfirm[logNumber+blocksToConfirm].push({
                                    hash:tx.hash,
                                    receiver: avalonReceiver,
                                    amount: amount
                                })
                            else
                                toConfirm[logNumber+blocksToConfirm] = [{
                                    hash:tx.hash,
                                    receiver: avalonReceiver,
                                    amount: amount
                                }]
                            
                            console.log('transferToAvalon', avalonReceiver, amount, tx.hash)
                        } else
                            console.log('ERC-20 method call: '+decodedTx.method)
                    }
                }).catch(function(err) {
                    console.log('Err ETH getTx', err)
                })
            }
        }).catch(function(err) {
            console.log('Err ETH logs',err)
        })
        
        
        setTimeout(function() {WDTCWatcher.checkBlock(1+number)}, 1)
    }

    async verifyTxStatus(number) {
        if (!toConfirm[number])
            return
        for (let i = 0; i < toConfirm[number].length; i++) {
            let hash = toConfirm[number][i].hash
            let amount = toConfirm[number][i].amount
            let receiver = toConfirm[number][i].receiver
            web3.eth.getTransactionReceipt(hash, function(err, res) {
                if (!err && res && res.status === true) {
                    var newTx = {
                        type: javalon.TransactionType.TRANSFER,
                        data: {
                            receiver: receiver,
                            amount: amount,
                            memo: hash
                        }
                    }
                    newTx = javalon.sign(config.avalonSwapKey, config.avalonSwapAccount, newTx)
                    javalon.sendTransaction(newTx, function(err, res) {
                        console.log('Sent '+newTx.data.amount+' DTC to '+newTx.data.receiver)
                        console.log(err, res)
                    })
                }
            })
        }
        delete toConfirm[number]
    }
}

module.exports = ContractWatcher
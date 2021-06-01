var shopabi=
    [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "rev",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "item",
                    "type": "uint256"
                }
            ],
            "name": "isOwnered",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "title",
                    "type": "string"
                },
                {
                    "name": "price",
                    "type": "uint256"
                }
            ],
            "name": "sell",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "item",
                    "type": "uint256"
                },
                {
                    "name": "data",
                    "type": "string"
                }
            ],
            "name": "buy",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "shop",
            "outputs": [
                {
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "title",
                    "type": "string"
                },
                {
                    "name": "price",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "title",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "ItemForSellEvent",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "who",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "what",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "why",
                    "type": "string"
                }
            ],
            "name": "UserBuyEvent",
            "type": "event"
        }
    ];

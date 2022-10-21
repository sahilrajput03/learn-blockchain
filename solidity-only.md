# Learn Solidity

[Source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol)

![image](https://user-images.githubusercontent.com/31458531/197234942-d6297ef5-939a-461d-a55b-b476c79b48b4.png)

## smart contracts

[ERC20 @openzeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol)

![image](https://user-images.githubusercontent.com/31458531/197237396-e5ca4680-16bc-4926-997d-7c532ca36eba.png)

![image](https://user-images.githubusercontent.com/31458531/197238623-05e4bc43-ba73-42a4-a131-044b9d85e126.png)

![image](https://user-images.githubusercontent.com/31458531/197239161-a237ff12-05a4-433b-8630-62d97528c3de.png)

**Q. What is the use of `unchecked` keyword in solidity?**

**You dont' need SafeMath.sol in newer versions of solidity coz solidity does these checks internally, yo.**

Source of below answer: [Click here](https://ethereum.stackexchange.com/questions/113221/what-is-the-purpose-of-unchecked-in-solidity)

![image](https://user-images.githubusercontent.com/31458531/197239285-2e2665c7-a339-49bc-8434-6bb6285b6343.png)


## Solidity Standard Utilities

https://github.com/willitscale/solidity-util

## string concatenation


*Older way to concat string was: `string(abi.encodePacked(a, b))`. [Source](https://stackoverflow.com/a/69932390/10012446)*

Source: https://stackoverflow.com/a/70987389/10012446

```sol
contract Implementation {
    using Strings for string;

    string a = "first";
    string b = "second";
    string public c;
    
    constructor() {
        c = a.concat(b); // "firstsecond"
    }
}
```

## get length of `bytes` type variable in solidity?

`bytes memory byteStr = bytes(a)`

So in above we first convert string to bytes type and then we can use `.length` method to calculate the length of it.

## returning memory type variables from the function

[Source](https://www.youtube.com/watch?v=wOCIhzAuhgs)

![image](https://user-images.githubusercontent.com/31458531/197250700-baf44da4-1de9-45d9-9ae8-c9b163c283fd.png)


## storage, memory and calldata

Video: [Click here](https://www.youtube.com/watch?v=wOCIhzAuhgs)

SCP Article: [Click here](https://solidity-by-example.org/data-locations/)

- storage: you should use this to load dynamic data that you'll update
- memory: if you only need to read the data or modify it without saving it onto the blockchain
- calldata: for function inputs you can use it to save gas (check SS: If we don't use calldata then the variable's data is copied to the target funciton as well when we call `_internal` fn and it would have cost more gas. Thus in order to save gas you can use `caldata` to save gas while calling different functions as we do in this case).

![image](https://user-images.githubusercontent.com/31458531/197252238-5c143184-00c5-40e8-90fb-88fa055fa655.png)

Source of below image: [Click here](https://ethereum.stackexchange.com/a/63253/106687)

![image](https://user-images.githubusercontent.com/31458531/197252368-955a169b-25d3-4aeb-9a5f-9eea6974847d.png)

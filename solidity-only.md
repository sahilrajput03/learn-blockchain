## TODO

- Read this logbook article: [Click here](https://blog.logrocket.com/ultimate-guide-data-types-solidity/#bytes) and make notes, test cases for it (also you can refer the small notes seciton I made from this in hardcopy NotesBook2 of solidty).


# Learn Solidity

**TODO: Article: Technical Introduction to Events and Logs in Ethereum ~ Concensys:** [Click here](https://media.consensys.net/technical-introduction-to-events-and-logs-in-ethereum-a074d65dd61e)

**Aliases:**

- `uint` and `int` are aliases for `uint256` and `int256`, respectively. [Source](https://docs.soliditylang.org/en/develop/types.html#integers)
- `ufixed` and `fixed` are aliases for `ufixed128x18` and `fixed128x18`, respectively. [Source](https://docs.soliditylang.org/en/develop/types.html#fixed-point-numbers)
- Before (Prior to) version 0.8.0, `byte` used to be an alias for `bytes1`. [Source](https://docs.soliditylang.org/en/develop/types.html#fixed-size-byte-arrays)

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

## Events saves gas coz we can avoid saving data to storaage of contract

![image](https://user-images.githubusercontent.com/31458531/197341657-4ec70f77-def0-4f9a-bbc7-f287a5eb2e7b.png)


## Events are stored on blockchain? tldr;  yes(all events are stored on stored and can be accessed by clients) and **no(becoz no contract can event data emitted {not even the contract which emitted it})**

Source of below question/answer: [Click here](https://ethereum.stackexchange.com/a/84490/106687)

![image](https://user-images.githubusercontent.com/31458531/197341428-df6f5bda-1774-4200-b744-1bb05965df5a.png)

## what does the `indexed` keyword does?

Source of below answer: [Click here](https://ethereum.stackexchange.com/a/8659/106687)

![image](https://user-images.githubusercontent.com/31458531/197341565-a4587252-c545-4ff5-b4f5-6411e2d0d123.png)

## create one smart contract from another smart contract

![image](https://user-images.githubusercontent.com/31458531/197342027-48b2307c-55e1-40dd-bd50-18d294113343.png)

## In solidity docs you can search for any keyword that is used in solidity language by navigating to this page

Page in solidity docs: [Click here](https://docs.soliditylang.org/en/latest/genindex.html)

![image](https://user-images.githubusercontent.com/31458531/197353655-67404e31-c588-478e-a498-ec43c5af8d9d.png)

## abi.encodePacked

Stackoverflow answer: [Click here](https://ethereum.stackexchange.com/a/91835/106687)

![image](https://user-images.githubusercontent.com/31458531/197357960-babd10ce-c755-46b8-85b6-a15054f06cbe.png)


In docs: [Click here](https://docs.soliditylang.org/en/v0.8.11/abi-spec.html#non-standard-packed-mode)

![image](https://user-images.githubusercontent.com/31458531/197383579-608e14b8-d8f2-48f9-aa2e-9316d453d319.png)


## How does keccak functio works?

Source: [Click here](https://ethereum.stackexchange.com/q/11572/106687)

![image](https://user-images.githubusercontent.com/31458531/197383771-faf058a8-8138-45c3-89d7-b34d60d595d3.png)


## bytes and string

Source: [Click here](https://docs.soliditylang.org/en/develop/types.html#fixed-size-byte-arrays)

![image](https://user-images.githubusercontent.com/31458531/197385909-50fd70e7-34a1-4051-9fe0-0629f69759ed.png)

![image](https://user-images.githubusercontent.com/31458531/197387225-49d9dc8e-28d6-44a2-b008-6020f0b07842.png)

## learn data types of solidity

### bytes32 vs. string

- https://ethereum.stackexchange.com/questions/11770/what-is-the-difference-between-bytes-and-bytes32
- https://ethereum.stackexchange.com/questions/11556/use-string-type-or-bytes32

All bytes type variables are used to store binary data (0,1 format) stores in hex format: [Source](https://en.wikipedia.org/wiki/ASCII#Printable_characters)

![image](https://user-images.githubusercontent.com/31458531/197400410-72dc6c72-ad42-43a3-8991-ffe9225f0699.png)


**READ Todo:** LogRocket Article: [Click here](https://blog.logrocket.com/ultimate-guide-data-types-solidity/)

Understanding solidity data types from Oreily:

The bytes data type in Solidity is a dynamically sized byte[] array. As it's dynamic sized, the length of this type can grow and shrink. The bytes type is a bit different from bytes1 , bytes2, ... bytes31, and bytes32 types (stepping 1), as bytes stores tightly packed data, whereas bytesN does not. 

The bytes type variables are initialized with an empty string. If you check with the Remix IDE, it will return 0x, meaning a byte[] array with a length of 0.

There is no operator supported directly on bytes, but sometimes you might need to compare the two bytes variables. To check equality, you can compute the keccak256 hash of both the variables and perform a comparison, like that shown in following code example: ...

## POS and DPOS

Source: Master blockchain pdf book (1st edition).

![image](https://user-images.githubusercontent.com/31458531/197386567-b9cf9704-ae91-447e-8d26-2da0823671e2.png)

## Books

- Mastering Blockchain Programming with Solidity - Jitendra Chittoda (Rs. 443 Kindle Edition)
     The book is based on ethereum and truffle basis. 

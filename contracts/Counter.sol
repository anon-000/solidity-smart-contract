// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Counter {
    uint public count;
    string public name;

    constructor(string memory _name, uint _count) {
        count = _count;
        name = _name;
    }

    function increment() public {
        count++;
    }

    function decrement() public {
        count--;
    }

    function getData() public view returns (uint _r, string memory _s) {
        return (count, name);
    }

    function getName() public view returns (string memory _s) {
        return name;
    }

    function getCount() public view returns (uint _r) {
        return count;
    }
}

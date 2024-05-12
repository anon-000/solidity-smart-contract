const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", () => {
  let counter;

  beforeEach(async () => {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy("Auro", 1);
  });

  describe("Deployment", () => {
    it("Sets the initial count", async () => {
      expect(await counter.count()).to.equal(1);
    });

    it("Sets the initial name", async () => {
      expect(await counter.name()).to.equal("Auro");
    });
  });

  describe("Counting", () => {
    it("Increment the count", async () => {
      let transaction = await counter.increment();
      await transaction.wait();
      expect(await counter.count()).to.equal(2);
    });
  });
});

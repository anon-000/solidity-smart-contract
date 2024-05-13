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
    let transaction;

    it("reads the count var", async () => {
      expect(await counter.count()).to.equal(1);
    });

    it("reads the count using getCount()", async () => {
      expect(await counter.getCount()).to.equal(1);
    });

    it("Increments the count", async () => {
      transaction = await counter.increment();
      await transaction.wait();
      expect(await counter.count()).to.equal(2);

      transaction = await counter.increment();
      await transaction.wait();
      expect(await counter.count()).to.equal(3);
    });

    it("Decrements the count", async () => {
      transaction = await counter.decrement();
      await transaction.wait();
      expect(await counter.count()).to.equal(0);

      expect(await counter.count()).to.be.reverted;
    });

    it("reads the name var", async () => {
      expect(await counter.name()).to.equal("Auro");
    });

    it("reads the count using getName()", async () => {
      expect(await counter.getName()).to.equal("Auro");
    });
  });
});

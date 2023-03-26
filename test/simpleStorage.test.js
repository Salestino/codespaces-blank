const { expect } = require("chai");

describe("SimpleStorage", function () {
  let SimpleStorage, simpleStorage, owner, addr1;

  beforeEach(async function () {
    SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    [owner, addr1] = await ethers.getSigners();
    simpleStorage = await SimpleStorage.deploy();
    await simpleStorage.deployed();
  });

  it("Should set the value and return it", async function () {
    await simpleStorage.set(42);
    expect(await simpleStorage.get()).to.equal(42);
  });
});

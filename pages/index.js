import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function Home() {
  const [data, setData] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.request({ method: "eth_requestAccounts" });
      getData();
    }
  }, []);

  async function getData() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0, SimpleStorage.abi, signer);

      try {
        const storedData = await contract.get();
        setData(storedData.toString());
      } catch (err) {
        console.error(err);
      }
    }
  }

  async function setDataValue() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0, SimpleStorage.abi, signer);

      try {
        const transaction = await contract.set(inputValue);
        await transaction.wait();
        getData();
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <div>
      <h1>Simple Storage</h1>
      <p>Stored value: {data}</p>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={setDataValue}>Set Value</button>
    </div>
  );
}

export default Home;

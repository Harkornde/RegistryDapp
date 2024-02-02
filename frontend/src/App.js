import "./App.css";
import contractABI from "./abi.json";
import { ethers } from "ethers";

function App() {
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  const contractAddress = "0xf81e02a9fD14A018e79D6b3dD62A30F1FFE33F84";

  async function updateName() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.updateName("newName");
        await transaction.wait();
        console.log("Money withdrawn");
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  async function updateAge() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.updateAge(12);
        await transaction.wait();
        console.log("Money withdrawn");
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  async function getEntityDetails() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const [name, age] = await contract.getEntityDetails();
        console.log("Name:", name);
        console.log("Age:", age);
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  return (
    <div className="App">
      <div>
        <input type="text" placeholder="name" />
        <button
          onClick={() => {
            updateName();
          }}
        >
          Name
        </button>

        <input type="text" placeholder="age" />

        <button
          onClick={() => {
            updateAge();
          }}
        >
          Age
        </button>
        <button
          onClick={() => {
            getEntityDetails();
          }}
        >
          Get Entity
        </button>
      </div>
    </div>
  );
}

export default App;

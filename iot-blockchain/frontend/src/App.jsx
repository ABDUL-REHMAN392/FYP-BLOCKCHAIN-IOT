import React, { useEffect, useState } from "react";
import Web3 from "web3";
import contractABI from "./abi.json";

const CONTRACT_ADDRESS = "0xAf83e9699fb6a26B096281d3fd1299b79094D8b3";

export default function App() {
  const [_web3, setWeb3] = useState(null); // kept for future use
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [devices, setDevices] = useState([]);
  const [newDevice, setNewDevice] = useState({ address: "", name: "" });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadWeb3();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3Instance.eth.getAccounts();
        const contractInstance = new web3Instance.eth.Contract(contractABI, CONTRACT_ADDRESS);

        setWeb3(web3Instance);
        setAccount(accounts[0]);
        setContract(contractInstance);
        fetchDevices(contractInstance);
      } catch (err) {
        console.error("Failed to load web3:", err);
        alert("Web3 load failed.");
      }
    } else {
      alert("Please install MetaMask to use this dApp.");
    }
  }

  async function fetchDevices(contractInstance) {
    const knownAddresses = [
      "0xf3cf41d4C1628C11FE836C893552E0C9CF6F8782",
      "0x675043D2E7f92F2ce43dA05C7196fDFC835f9e10"
    ];
    const results = [];
    for (let addr of knownAddresses) {
      try {
        const d = await contractInstance.methods.getDevice(addr).call();
        if (d[0]) {
          results.push({
            address: addr,
            name: d[1],
            status: d[2],
            temperature: d[3],
            humidity: d[4],
            timestamp: d[5]
          });
        }
      } catch (error) {
        console.error("Error fetching device", addr, error);
      }
    }
    setDevices(results);
  }

  const addDevice = async () => {
    try {
      await contract.methods
        .addDevice(newDevice.address, newDevice.name)
        .send({ from: account });
      alert("Device added!");
      fetchDevices(contract);
    } catch (error) {
      console.error("Add device failed:", error);
      alert("Failed to add device.");
    }
  };

  const toggleDevice = async (address, currentStatus) => {
    try {
      await contract.methods
        .toggleDevice(address, Number(currentStatus) === 0)
        .send({ from: account });
      fetchDevices(contract);
    } catch (error) {
      console.error("Toggle failed:", error);
      alert("Toggle failed.");
    }
  };

  const removeDevice = async (address) => {
    try {
      await contract.methods.removeDevice(address).send({ from: account });
      fetchDevices(contract);
    } catch (error) {
      console.error("Remove failed:", error);
      alert("Remove failed.");
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>🔗 IoT Device Manager (Blockchain)</h2>
      <p><strong>Connected Wallet:</strong> {account}</p>

      <div style={{ marginTop: 20 }}>
        <h3>Add New Device</h3>
        <input
          placeholder="Device Address"
          value={newDevice.address}
          onChange={(e) => setNewDevice({ ...newDevice, address: e.target.value })}
        />
        <input
          placeholder="Device Name"
          value={newDevice.name}
          onChange={(e) => setNewDevice({ ...newDevice, name: e.target.value })}
        />
        <button onClick={addDevice}>➕ Add Device</button>
      </div>

      <div style={{ marginTop: 40 }}>
        <h3>📋 Registered Devices</h3>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Address</th>
              <th>Name</th>
              <th>Status</th>
              <th>Temp (°C)</th>
              <th>Humidity (%)</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((d, idx) => (
              <tr key={idx}>
                <td>{d.address}</td>
                <td>{d.name}</td>
                <td>{Number(d.status) === 0 ? "OFF" : "ON"}</td>
                <td>{Number(d.temperature)}</td>
                <td>{Number(d.humidity)}</td>
                <td>{new Date(Number(d.timestamp) * 1000).toLocaleString()}</td>
                <td>
                  <button onClick={() => toggleDevice(d.address, d.status)}>
                    {Number(d.status) === 0 ? "Turn ON" : "Turn OFF"}
                  </button>
                  <button onClick={() => removeDevice(d.address)}>🗑 Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

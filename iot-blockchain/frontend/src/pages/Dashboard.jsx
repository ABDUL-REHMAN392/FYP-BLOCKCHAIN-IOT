import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { Toaster, toast } from "react-hot-toast";
import Header from "../Components/Header";
import AddDeviceForm from "../Components/AddDeviceForm";
import Loader from "../Components/Loader";
import contractABI from "../abi.json";
import DeviceList from "../Components/DeviceTable";

const CONTRACT_ADDRESS = "0xAf83e9699fb6a26B096281d3fd1299b79094D8b3";

export default function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [devices, setDevices] = useState([]);
  const [newDevice, setNewDevice] = useState({ address: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [txLoading, setTxLoading] = useState(false);

  useEffect(() => {
    loadWeb3();
  }, []);

  useEffect(() => {
    let interval;
    if (contract) {
      fetchDevices(contract);
      interval = setInterval(() => fetchDevices(contract), 15000);
    }
    return () => clearInterval(interval);
  }, [contract]);

  async function loadWeb3() {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accs = await web3.eth.getAccounts();
        const contractInstance = new web3.eth.Contract(
          contractABI,
          CONTRACT_ADDRESS
        );
        setAccount(accs[0]);
        setContract(contractInstance);
      } catch {
        toast.error("Failed connecting to Web3.");
      }
    } else {
      toast.error("MetaMask not found.");
    }
  }

  async function fetchDevices(contractInstance) {
    setLoading(true);
    const known = [
      "0xf3cf41d4C1628C11FE836C893552E0C9CF6F8782",
      "0x675043D2E7f92F2ce43dA05C7196fDFC835f9e10",
    ];
    const res = [];
    for (let addr of known) {
      try {
        const d = await contractInstance.methods.getDevice(addr).call();
        if (d[0])
          res.push({
            address: addr,
            name: d[1],
            status: d[2],
            temperature: d[3],
            humidity: d[4],
            timestamp: d[5],
          });
      } catch (e) {
        console.error(e);
        toast.error(`Fetch failed: ${addr}`);
      }
    }
    setDevices(res);
    setLoading(false);
  }

  const addDevice = async () => {
    if (!newDevice.address || !newDevice.name)
      return toast.error("Enter all fields.");
    try {
      setTxLoading(true);
      await contract.methods
        .addDevice(newDevice.address, newDevice.name)
        .send({ from: account });
      toast.success("Device added!");
      setNewDevice({ address: "", name: "" });
      fetchDevices(contract);
    } catch {
      toast.error("Add failed.");
    } finally {
      setTxLoading(false);
    }
  };

  const toggleDevice = async (address, status) => {
    try {
      setTxLoading(true);
      await contract.methods
        .toggleDevice(address, Number(status) === 0)
        .send({ from: account });
      toast.success("Toggled successfully.");
      fetchDevices(contract);
    } catch {
      toast.error("Toggle failed.");
    } finally {
      setTxLoading(false);
    }
  };

  const confirmRemove = (address) => {
    if (window.confirm("Are you sure you want to remove this device?"))
      removeDevice(address);
  };

  const removeDevice = async (address) => {
    try {
      setTxLoading(true);
      await contract.methods.removeDevice(address).send({ from: account });
      toast.success("Device removed.");
      fetchDevices(contract);
    } catch {
      toast.error("Remove failed.");
    } finally {
      setTxLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black p-6 text-white font-sans mt-20">
      <Toaster position="top-right" />
      <Header account={account} />
      <AddDeviceForm
        newDevice={newDevice}
        setNewDevice={setNewDevice}
        addDevice={addDevice}
        loading={txLoading}
      />
      {loading ? (
        <Loader />
      ) : (
        <DeviceList
          devices={devices}
          loading={loading}
          toggleDevice={toggleDevice}
          confirmRemove={confirmRemove}
        />
      )}
    </div>
  );
}

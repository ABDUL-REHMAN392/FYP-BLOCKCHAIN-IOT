import { FiPlus } from "react-icons/fi";

export default function AddDeviceForm({ newDevice, setNewDevice, addDevice, loading }) {
  return (
    <div className="mb-8 flex justify-center">
      <div className="w-full max-w-3xl">
        <h3 className="text-xl font-semibold text-white mb-4 text-center">Add New Device</h3>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Device Address"
            value={newDevice.address}
            onChange={e => setNewDevice({ ...newDevice, address: e.target.value })}
          />
          <input
            className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Device Name"
            value={newDevice.name}
            onChange={e => setNewDevice({ ...newDevice, name: e.target.value })}
          />
          <button
            onClick={addDevice}
            disabled={loading}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded text-white font-semibold whitespace-nowrap ${
              loading ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <FiPlus /> {loading ? "Adding..." : "Add Device"}
          </button>
        </div>
      </div>
    </div>
  );
}

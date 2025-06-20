import { FiTrash2, FiPower } from "react-icons/fi";

export default function DeviceList({ devices, loading, toggleDevice, confirmRemove }) {
  if (loading) return <p className="text-center text-gray-400 py-8">Loading devices...</p>;
  if (devices.length === 0) return <p className="text-center text-gray-400">No devices yet. Add one above 👆</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {devices.map(d => (
        <div key={d.address} className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-bold text-white">{d.name}</h4>
            <span className={`font-semibold ${Number(d.status) ? "text-green-400" : "text-red-400"}`}>
              {Number(d.status) ? "ON" : "OFF"}
            </span>
          </div>
          <p className="text-gray-400 text-sm break-all">{d.address}</p>
          <p className="mt-2 text-gray-300">🌡 Temp: {Number(d.temperature)}°C</p>
          <p className="text-gray-300">💧 Humidity: {Number(d.humidity)}%</p>
          <p className="text-gray-500 text-xs mt-1">{new Date(Number(d.timestamp) * 1000).toLocaleString()}</p>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => toggleDevice(d.address, d.status)}
              className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded inline-flex justify-center items-center gap-2"
            >
              <FiPower /> Toggle
            </button>
            <button
              onClick={() => confirmRemove(d.address)}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded inline-flex justify-center items-center gap-2"
            >
              <FiTrash2 /> Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

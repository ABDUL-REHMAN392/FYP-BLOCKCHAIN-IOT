export default function Header({ account }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-white">🔗 IoT Device Manager</h2>
      <p className="text-gray-400 mt-2">
        <strong>Wallet:</strong> {account || "Not connected"}
      </p>
    </div>
  );
}

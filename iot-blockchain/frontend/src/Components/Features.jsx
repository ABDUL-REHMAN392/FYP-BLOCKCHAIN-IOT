import {
  FaLock,
  FaPowerOff,
  FaThermometerHalf,
  FaChartBar,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLock className="text-blue-400 text-3xl" />,
    title: "Secure Device Control",
    description:
      "Only the owner can register/remove devices via the smart contract.",
  },
  {
    icon: <FaPowerOff className="text-green-400 text-3xl" />,
    title: "Device ON/OFF Toggle",
    description: "Turn devices on/off from the frontend dashboard.",
  },
  {
    icon: <FaThermometerHalf className="text-red-400 text-3xl" />,
    title: "Live Sensor Monitoring",
    description:
      "Simulated temperature & humidity data pushed every 10 seconds.",
  },
  {
    icon: <FaChartBar className="text-purple-400 text-3xl" />,
    title: "Individual Device Charts",
    description: "Each device gets a separate chart on Node-RED.",
  },
  {
    icon: <FaDatabase className="text-yellow-400 text-3xl" />,
    title: "Blockchain Storage",
    description: "Data updates and device info are recorded on-chain.",
  },
  {
    icon: <FaBrain className="text-indigo-400 text-3xl" />,
    title: "Automated Python Integration",
    description: "Python fetches active devices and sends blockchain data.",
  },
];

const Features = () => {
  return (
    <section
      id="featuers"
      className="py-12 px-6 md:px-16 bg-black min-h-screen"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#5479f7] mb-4">Key Features</h2>
        <p className="text-gray-400 text-lg">
          A powerful set of tools built for secure, real-time IoT device control
          and monitoring.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          >
            <div>{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

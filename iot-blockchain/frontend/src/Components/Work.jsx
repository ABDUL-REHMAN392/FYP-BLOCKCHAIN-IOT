const steps = [
  {
    title: "Owner adds a device via frontend",
    description: "Uses MetaMask + Web3 to register a device securely.",
  },
  {
    title: "Smart contract stores the device",
    description: "Device data is written immutably on the blockchain.",
  },
  {
    title: "Python script checks every 10s",
    description: "It fetches all active devices from the smart contract.",
  },
  {
    title: "Sends fake sensor data",
    description:
      "If the device is ON, it sends simulated temperature and humidity data to the blockchain.",
  },
  {
    title: "Sends data to Node-RED",
    description:
      "The same data is POSTed to Node-RED via HTTP for visualization.",
  },
  {
    title: "Node-RED updates live charts",
    description: "Dashboards update in real-time with fresh sensor data.",
  },
];

const Work = () => {
  return (
    <section id="work" className=" py-10 px-6 md:px-16 ">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-[#5479f7]">How It Works</h2>
        <p className="mt-4 text-lg text-gray-400">
          From smart contracts to real-time dashboards — here’s how everything
          connects.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-100 rounded-full"></div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-20 group">
              {/* Step Circle */}
              <div className="absolute left-0 top-1 w-12 h-12 bg-[#5479f7] text-white rounded-full flex items-center justify-center text-lg font-bold shadow-md  transition-transform">
                {index + 1}
              </div>

              {/* Step Content */}
              <div>
                <h3 className="text-2xl font-semibold text-[#5479f7]">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-400 text-md">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

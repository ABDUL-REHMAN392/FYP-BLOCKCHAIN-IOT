import React, { useState } from "react";

const faqs = [
  {
    question: "How do I add a new IoT device?",
    answer:
      "Navigate to the Add Device section, enter the device address and name, and click “Add Device.” The device will be registered on the blockchain if you're the owner.",
  },
  {
    question: "Who can control the devices?",
    answer:
      "Only the contract owner can add/remove devices. Once added, anyone with access to the dashboard can toggle the device on/off securely.",
  },
  {
    question: "How do I view sensor data?",
    answer:
      "Sensor data (e.g. temperature/humidity) are simulated and sent every 10 seconds. Visit the Device Charts section to view real-time graphs via Node‑RED.",
  },
  {
    question: "Where is the data stored?",
    answer:
      "All device metadata and updates get recorded on the blockchain. Raw sensor data is pushed to Node‑RED, with metadata stored on‑chain for transparency.",
  },
  {
    question: "Is the system secure?",
    answer:
      "Yes! We use smart contracts for ownership verification and tamper-proof device registration. Frontend and backend communications are authenticated via your wallet.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-black py-12 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-[#5479f7] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-lg">
          Find answers to common questions about device registration, security,
          data flow, and more.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="bg-gray-800 rounded-lg">
            <button
              className="w-full flex justify-between items-center p-4 focus:outline-none"
              onClick={() => toggle(i)}
            >
              <span className="text-white text-lg font-medium">
                {item.question}
              </span>
              <span className="text-[#5479f7] text-xl">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <div className="p-4 border-t border-gray-700 text-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

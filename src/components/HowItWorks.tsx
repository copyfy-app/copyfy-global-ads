
const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Enter Your Product & Price",
      description: "Simply fill in your product details and pricing to start."
    },
    {
      number: "2", 
      title: "Select Your Target Country",
      description: "Choose from 100+ countries for localized copy translations."
    },
    {
      number: "3",
      title: "Generate Winning Ads", 
      description: "Receive high-converting ad copies tailored for your audience."
    }
  ];

  return (
    <section className="mb-14">
      <h2 className="text-3xl font-bold mb-6" 
          style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.7)' }}>
        How It Works
      </h2>
      <div className="flex flex-wrap justify-center gap-7">
        {steps.map((step) => (
          <div 
            key={step.number}
            className="bg-black/35 rounded-2xl p-6 flex-1 min-w-[260px] max-w-[300px] shadow-lg shadow-yellow-500/30"
          >
            <h3 className="text-yellow-500 text-xl font-semibold mb-3">
              {step.number}. {step.title}
            </h3>
            <p className="text-gray-100">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

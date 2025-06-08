
const WhyCopyfy = () => {
  const benefits = [
    {
      title: "Global Reach",
      description: "Supports over 100 countries with automatic translation."
    },
    {
      title: "Easy to Use",
      description: "Simple interface designed for marketers and affiliates."
    },
    {
      title: "Increase Conversions",
      description: "Copy optimized for Google Ads with proven strategies."
    }
  ];

  return (
    <section className="mb-14">
      <h2 className="text-3xl font-bold mb-6" 
          style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.7)' }}>
        Why Copyfy?
      </h2>
      <div className="flex flex-wrap justify-center gap-7">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-black/35 rounded-2xl p-6 flex-1 min-w-[260px] max-w-[300px] shadow-lg shadow-yellow-500/30"
          >
            <h3 className="text-yellow-500 text-xl font-semibold mb-3">
              {benefit.title}
            </h3>
            <p className="text-gray-100">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyCopyfy;


const FAQ = () => {
  const faqs = [
    {
      question: "Can I use Copyfy for any product?",
      answer: "Yes! Copyfy is designed to generate ad copies for any product or niche."
    },
    {
      question: "Which payment methods does it support?",
      answer: "Supports multiple payment options including credit cards, PayPal, Pix, and more."
    },
    {
      question: "Is there a trial version available?",
      answer: "Yes, you can try Copyfy with limited features before upgrading."
    }
  ];

  return (
    <section className="mb-14">
      <h2 className="text-3xl font-bold mb-6" 
          style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.7)' }}>
        Frequently Asked Questions
      </h2>
      <div className="text-left max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-yellow-500 font-semibold mb-2 cursor-pointer hover:text-yellow-400 transition-colors">
              {faq.question}
            </h4>
            <p className="text-gray-200 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

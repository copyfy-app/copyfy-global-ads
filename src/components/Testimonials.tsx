
const Testimonials = () => {
  const testimonials = [
    {
      name: "John D.",
      quote: "Copyfy helped me boost my international campaigns like never before!"
    },
    {
      name: "Emily R.", 
      quote: "Easy to use and the translations are spot on. Highly recommended."
    },
    {
      name: "Michael K.",
      quote: "Saved me hours of work and increased ROI significantly."
    }
  ];

  return (
    <section className="mb-14">
      <h2 className="text-3xl font-bold mb-6" 
          style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.7)' }}>
        What Our Users Say
      </h2>
      <div className="flex flex-wrap justify-center gap-7">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-black/35 rounded-2xl p-6 flex-1 min-w-[260px] max-w-[300px] shadow-lg shadow-yellow-500/30"
          >
            <h3 className="text-yellow-500 text-xl font-semibold mb-3">
              {testimonial.name}
            </h3>
            <p className="text-gray-100 italic text-sm">
              "{testimonial.quote}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

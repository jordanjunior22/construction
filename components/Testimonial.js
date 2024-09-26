"use client";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      company: "ABC Construction",
      feedback: "Working with this construction company was a game-changer for us. Their attention to detail and commitment to quality is unmatched!",
    },
    {
      name: "Jane Smith",
      company: "Smith & Co.",
      feedback: "Professional, reliable, and efficient. They delivered our project on time and exceeded our expectations.",
    },
    {
      name: "Michael Johnson",
      company: "MJ Builders",
      feedback: "The team&quot;s expertise in construction and project management made our experience smooth and enjoyable. Highly recommend!",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 relative overflow-hidden">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <FaQuoteLeft className="text-primary text-6xl opacity-20" />
              </div>
              <p className="text-lg italic mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

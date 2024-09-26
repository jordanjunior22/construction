"use client";

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl mb-6">
          Let us help you build your dreams with our expert construction services. Contact us today!
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 bg-secondary hover:bg-white hover:text-primary text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Get a Quote
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

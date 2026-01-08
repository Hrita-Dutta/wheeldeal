import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-20 flex justify-center px-4">
        <div className="w-full lg:w-295 px-6">
          <span className="font-bold text-[#FF6D3A] italic text-sm">
            GET IN TOUCH{" "}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 w-full lg:w-[36%] italic">
            We'd Love to Hear From You{" "}
          </h1>
          <p className="text-[#94A3B8] max-w-3xl">
            Have questions? We're here to help! Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 flex justify-center px-4">
        <div className="w-full lg:w-295 px-6">
          <div className="">
            {/* Contact Information Cards */}
            <div className="lg:col-span-1 flex flex-col lg:flex-row justify-between items-baseline py-6 gap-6">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow w-full lg:w-[25%]">
                <div className="flex gap-5 items-center">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#64748B]">Call Us</span>
                    <a
                      href="tel:+9779800000000"
                      className="text-[#1E3A5F] font-semibold hover:text-[#305c96] italic"
                    >
                      +977-9800000000
                    </a>
                  </div>
                </div>
                <p className="text-[#64748B] mb-3">
                  Available 24/7 for support
                </p>
              </div>
              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow w-full lg:w-[30%]">
                <div className="flex gap-5 items-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#64748B]">Email Us</span>
                    <a
                      href="mailto:support@wheeldeal.com"
                      className="text-[#1E3A5F] font-semibold hover:text-[#305c96] italic"
                    >
                      support@wheeldeal.com
                    </a>
                  </div>
                </div>
                <p className="text-[#64748B] mb-3">
                  We'll respond within 24hrs
                </p>
              </div>

              {/* Office Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow w-full lg:w-[30%]">
                <div className="flex gap-5 items-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#64748B]">Visit Us</span>
                    <p className="text-[#1E3A5F] font-semibold hover:text-[#305c96] italic">
                      Baneshwor, Kathmandu
                    </p>
                  </div>
                </div>
                <p className="text-[#64748B] mb-3">Mon-Sat 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <span className="font-bold italic text-[#FF6D3A]">
                  Send us a Message
                </span>
                <h2 className="text-3xl font-bold text-[#1E3A5F] mb-2 italic">
                  Get in Touch
                </h2>
                <p className="text-[#64748B] mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible.{" "}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-[#1E3A5F] mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#E2E8F0] border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-[#1E3A5F] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#E2E8F0] border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-[#1E3A5F] mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#E2E8F0] border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="+977-98XXXXXXXX"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-[#1E3A5F] mb-2 "
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#E2E8F0] border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all "
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="booking">Booking Issue</option>
                        <option value="payment">Payment Problem</option>
                        <option value="vehicle">Vehicle Listing</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#1E3A5F] mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none bg-[#E2E8F0]"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full md:w-auto border px-8 py-4 bg-[#FF6D3A] hover:bg-transparent hover:text-[#FF6D3A] border-[#FF6D3A] text-white font-semibold rounded-xl transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold italic text-3xl text-[#1E3A5F] mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Quick answers to common questions
            </p>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="bg-[#F8FAFC] rounded-xl p-6 border border-gray-200 group">
                <summary className="font-semibold text-[#1E3A5F] cursor-pointer list-none flex justify-between items-center">
                  How do I book a vehicle?
                  <span className="text-[#FF6D3A] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-700">
                  Browse available vehicles, select your dates, complete the
                  booking form, and make a secure payment. You'll receive
                  instant confirmation.
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="bg-[#F8FAFC] rounded-xl p-6 border border-gray-200 group">
                <summary className="font-semibold text-[#1E3A5F] cursor-pointer list-none flex justify-between items-center">
                  What payment methods do you accept?
                  <span className="text-[#FF6D3A] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-700">
                  We accept eSewa, Khalti, credit/debit cards, and cash payment
                  at pickup (for select vehicles).
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="bg-[#F8FAFC] rounded-xl p-6 border border-gray-200 group">
                <summary className="font-semibold text-[#1E3A5F] cursor-pointer list-none flex justify-between items-center">
                  Can I cancel my booking?
                  <span className="text-[#FF6D3A] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, you can cancel up to 24 hours before pickup for a full
                  refund. Cancellations within 24 hours may incur fees.
                </p>
              </details>

              {/* FAQ 4 */}
              <details className="bg-[#F8FAFC] rounded-xl p-6 border border-gray-200 group">
                <summary className="font-semibold text-[#1E3A5F] cursor-pointer list-none flex justify-between items-center">
                  How do I list my vehicle?
                  <span className="text-[#FF6D3A] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-700">
                  Create an owner account, verify your identity, and fill out
                  the vehicle listing form with photos and details. We'll review
                  and approve within 24 hours.
                </p>
              </details>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                Still have questions?{" "}
                <a
                  href="/faq"
                  className="text-[#FF6D3A] font-semibold hover:text-orange-600"
                >
                  View all FAQs
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      {/* Map Section */}
      <section className="py-8 px-4">
        <div className="flex flex-col items-center gap-5">
          <h3 className="font-bold italic text-3xl text-[#1E3A5F]">
            Find Us Here
          </h3>
          <div className="w-full lg:w-295 border-2 border-[#E2E8F0] rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0676609965287!2d87.69476107495565!3d26.663334676802573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef41f2b5f7f2c3%3A0xd5a7d7f98aaf07db!2sDamak%20Jaycees%20Chowk!5e0!3m2!1sen!2snp!4v1694500000000!5m2!1sen!2snp"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-[#1E3A5F] px-4">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-8 italic">Business Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 text-[#64748B]">
                <h3 className="font-semibold text-xl mb-4 text-[#FF6D3A]">
                  Customer Support
                </h3>
                <p className="mb-2 text-[#64748B]">
                  Monday - Friday:{" "}
                  <span className="font-bold">9: 00 AM - 6:00 PM</span>
                </p>
                <p className="mb-2">
                  Saturday:{" "}
                  <span className="font-bold">10:00 AM - 4:00 PM</span>
                </p>
                <p>
                  Sunday: <span className="font-bold">Closed</span>
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-[#64748B]">
                <h3 className="font-semibold text-xl mb-4 text-[#FF6D3A]">
                  Vehicle Pickup/Return
                </h3>
                <p className="mb-2">
                  Monday - Saturday:{" "}
                  <span className="font-bold">8:00 AM - 8:00 PM</span>
                </p>
                <p className="mb-2">
                  Sunday: <span className="font-bold">9:00 AM - 5:00 PM</span>
                </p>
                <p className="text-sm mt-3">*Hours may vary by owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="flex justify-center py-10 px-4">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 w-full lg:w-295">
          <h3 className="text-3xl font-bold text-blue-900 mb-4 italic">
            Follow Us
          </h3>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            >
              f
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            >
              𝕏
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            >
              in
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            >
              📷
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

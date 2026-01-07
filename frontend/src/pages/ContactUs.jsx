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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Have questions? We're here to help! Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Information Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-3">Mon-Fri 9am to 6pm</p>
                <a
                  href="tel:+9779800000000"
                  className="text-orange-500 font-semibold hover:text-orange-600"
                >
                  +977-9800000000
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-3">We'll respond within 24hrs</p>
                <a
                  href="mailto:support@wheeldeal.com"
                  className="text-orange-500 font-semibold hover:text-orange-600"
                >
                  support@wheeldeal.com
                </a>
              </div>

              {/* Office Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Office</h3>
                <p className="text-gray-600 mb-3">Visit us at our location</p>
                <p className="text-gray-700">
                  New Baneshwor,
                  <br />
                  Kathmandu, Nepal
                  <br />
                  ZIP: 44600
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
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
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-blue-900 mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible.{" "}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-blue-900 mb-2"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-blue-900 mb-2"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-blue-900 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="+977-98XXXXXXXX"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-blue-900 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white"
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
                      className="block text-sm font-semibold text-blue-900 mb-2"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Quick answers to common questions
            </p>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="bg-gray-50 rounded-xl p-6 border border-gray-200 group">
                <summary className="font-semibold text-blue-900 cursor-pointer list-none flex justify-between items-center">
                  How do I book a vehicle?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">
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
              <details className="bg-gray-50 rounded-xl p-6 border border-gray-200 group">
                <summary className="font-semibold text-blue-900 cursor-pointer list-none flex justify-between items-center">
                  What payment methods do you accept?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-700">
                  We accept eSewa, Khalti, credit/debit cards, and cash payment
                  at pickup (for select vehicles).
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="bg-gray-50 rounded-xl p-6 border border-gray-200 group">
                <summary className="font-semibold text-blue-900 cursor-pointer list-none flex justify-between items-center">
                  Can I cancel my booking?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, you can cancel up to 24 hours before pickup for a full
                  refund. Cancellations within 24 hours may incur fees.
                </p>
              </details>

              {/* FAQ 4 */}
              <details className="bg-gray-50 rounded-xl p-6 border border-gray-200 group">
                <summary className="font-semibold text-blue-900 cursor-pointer list-none flex justify-between items-center">
                  How do I list my vehicle?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">
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
                  href="#"
                  className="text-orange-500 font-semibold hover:text-orange-600"
                >
                  View all FAQs ���
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Find Us
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🗺️</span>
                <p className="text-gray-700 font-semibold">
                  Map Integration Here
                </p>
                <p className="text-gray-600 text-sm">
                  New Baneshwor, Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Business Hours</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-4 text-orange-400">
                  Customer Support
                </h3>
                <p className="mb-2">
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
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-4 text-orange-400">
                  Vehicle Pickup/Return
                </h3>
                <p className="mb-2">
                  Monday - Saturday:{" "}
                  <span className="font-bold">8:00 AM - 8:00 PM</span>
                </p>
                <p className="mb-2">
                  Sunday: <span className="font-bold">9:00 AM - 5:00 PM</span>
                </p>
                <p className="text-sm text-blue-200 mt-3">
                  *Hours may vary by owner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

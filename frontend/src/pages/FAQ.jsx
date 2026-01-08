import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = {
    general: [
      {
        question: "What is WheelDeal?",
        answer:
          "WheelDeal is Nepal's leading vehicle rental platform that connects vehicle owners with customers looking to rent cars, bikes, and other vehicles. We provide a safe, verified, and convenient way to rent vehicles across Nepal.",
      },
      {
        question: "How does WheelDeal work?",
        answer:
          "Simply browse our verified vehicles, select your dates, book and pay securely online, then pick up the vehicle from the owner.  After your rental period, return the vehicle and leave a review!",
      },
      {
        question: "Is WheelDeal available in my city?",
        answer:
          "We currently operate in major cities across Nepal including Kathmandu, Pokhara, Chitwan, Lalitpur, Bhaktapur, and more. We're constantly expanding to new locations.",
      },
      {
        question: "Are all vehicles verified?",
        answer:
          "Yes!  Every vehicle and owner goes through our verification process.  We check documents, insurance, and vehicle condition to ensure safety and reliability.",
      },
    ],
    booking: [
      {
        question: "How do I book a vehicle?",
        answer:
          "Browse available vehicles, select your preferred vehicle, choose your rental dates, fill in the booking form, and complete secure payment. You'll receive instant confirmation via email and SMS.",
      },
      {
        question: "Can I modify my booking?",
        answer:
          "Yes, you can modify your booking up to 24 hours before pickup. Go to 'My Bookings', select the booking, and click 'Modify'.  Some changes may affect pricing.",
      },
      {
        question: "What documents do I need to rent? ",
        answer:
          "You need a valid driver's license (for self-drive), national ID or passport, and a contact number. Some owners may require additional documents.",
      },
      {
        question: "Can someone else pick up the vehicle?",
        answer:
          "No, only the person who made the booking can pick up the vehicle.  You must present your ID and driver's license at pickup.",
      },
      {
        question: "What's the minimum rental period?",
        answer:
          "The minimum rental period is typically 1 day (24 hours), but some owners may offer hourly rentals. Check the vehicle listing for specific details.",
      },
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept eSewa, Khalti, credit/debit cards (Visa, Mastercard), and cash payment at pickup for select vehicles.",
      },
      {
        question: "When will I be charged?",
        answer:
          "Payment is processed immediately upon booking confirmation. The security deposit is held separately and refunded after vehicle return.",
      },
      {
        question: "Is my payment secure?",
        answer:
          "Absolutely!  We use industry-standard SSL encryption and work with certified payment gateways to ensure your financial information is completely secure.",
      },
      {
        question: "What is the security deposit?",
        answer:
          "A refundable security deposit is required for each booking to cover potential damages or violations. The amount varies by vehicle and is clearly shown before booking.",
      },
      {
        question: "When will I get my deposit back?",
        answer:
          "The security deposit is refunded within 3-5 business days after successful vehicle return and inspection by the owner.",
      },
    ],
    cancellation: [
      {
        question: "Can I cancel my booking?",
        answer:
          "Yes, you can cancel your booking.  Cancellation policies vary by timing:  Free cancellation up to 24 hours before pickup, 50% refund for 12-24 hours before, and no refund for cancellations within 12 hours.",
      },
      {
        question: "How do I cancel my booking?",
        answer:
          "Go to 'My Bookings', select the booking you want to cancel, and click 'Cancel Booking'. Follow the prompts and you'll receive a confirmation email.",
      },
      {
        question: "What if the owner cancels?",
        answer:
          "If an owner cancels your confirmed booking, you'll receive a full refund within 2-3 business days and a voucher for your next booking.",
      },
      {
        question: "Can I get a refund for early return?",
        answer:
          "Partial refunds for early returns are at the owner's discretion. Contact the owner directly or our support team to discuss your situation.",
      },
    ],
    owners: [
      {
        question: "How do I list my vehicle?",
        answer:
          "Create an owner account, complete identity verification, fill out the vehicle listing form with photos and details, set your pricing, and submit for review.  Approval typically takes 24-48 hours.",
      },
      {
        question: "How much can I earn?",
        answer:
          "Earnings vary based on vehicle type, location, and demand. On average, owners earn Rs. 15,000 - Rs. 50,000 per month.  You set your own pricing and availability.",
      },
      {
        question: "What fees does WheelDeal charge?",
        answer:
          "We charge a 15% service fee on each completed booking. This covers payment processing, insurance, customer support, and platform maintenance.",
      },
      {
        question: "When do I get paid?",
        answer:
          "Payments are released within 24 hours after successful vehicle return. You can withdraw to your bank account weekly or set up automatic payouts.",
      },
      {
        question: "What if my vehicle gets damaged?",
        answer:
          "All bookings include basic insurance coverage. The security deposit covers minor damages. For major issues, our support team will help mediate and file claims if needed.",
      },
    ],
    support: [
      {
        question: "How do I contact customer support?",
        answer:
          "You can reach us via email at support@wheeldeal. com, call +977-9800000000 (Mon-Fri 9AM-6PM), or use the live chat on our website.",
      },
      {
        question: "What if I have an issue during my rental?",
        answer:
          "Contact the owner first for quick resolution. If unresolved, contact our 24/7 emergency support line.  We'll help mediate and find a solution.",
      },
      {
        question: "How do I report a problem?",
        answer:
          "Go to 'My Bookings', select the relevant booking, and click 'Report Issue'.  Provide details and photos if applicable.  Our team will respond within 2 hours.",
      },
      {
        question: "Can I change my account details?",
        answer:
          "Yes!  Go to 'Profile Settings' to update your name, email, phone, address, and password. Some changes may require re-verification.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Find quick answers to common questions about WheelDeal
          </p>
        </div>
      </section>
      {/* Search Bar */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="🔍 Search for answers..."
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* General Questions */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">❓</span>
                </div>
                <h2 className="text-3xl font-bold text-blue-900">
                  General Questions
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.general.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(`general-${index}`)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-blue-900 text-lg pr-4">
                        {faq.question}
                      </span>
                      <span
                        className={`text-orange-500 text-xl font-bold transition-transform ${
                          openIndex === `general-${index}` ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {openIndex === `general-${index}` && (
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Questions */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h2 className="text-3xl font-bold text-blue-900">
                  Booking & Rentals
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.booking.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(`booking-${index}`)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-blue-900 text-lg pr-4">
                        {faq.question}
                      </span>
                      <span
                        className={`text-orange-500 text-xl font-bold transition-transform ${
                          openIndex === `booking-${index}` ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {openIndex === `booking-${index}` && (
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Questions */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h2 className="text-3xl font-bold text-blue-900">
                  Payment & Pricing
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.payment.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(`payment-${index}`)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-blue-900 text-lg pr-4">
                        {faq.question}
                      </span>
                      <span
                        className={`text-orange-500 text-xl font-bold transition-transform ${
                          openIndex === `payment-${index}` ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {openIndex === `payment-${index}` && (
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Cancellation Questions */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🚫</span>
                </div>
                <h2 className="text-3xl font-bold text-blue-900">
                  Cancellation & Refunds
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.cancellation.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(`cancellation-${index}`)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-blue-900 text-lg pr-4">
                        {faq.question}
                      </span>
                      <span
                        className={`text-orange-500 text-xl font-bold transition-transform ${
                          openIndex === `cancellation-${index}`
                            ? "rotate-180"
                            : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {openIndex === `cancellation-${index}` && (
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Owner Questions */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <h2 className="text-3xl font-bold text-blue-900">
                  For Vehicle Owners
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.owners.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(`owners-${index}`)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-blue-900 text-lg pr-4">
                        {faq.question}
                      </span>
                      <span
                        className={`text-orange-500 text-xl font-bold transition-transform ${
                          openIndex === `owners-${index}` ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {openIndex === `owners-${index}` && (
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Support Questions */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h2 className="text-3xl font-bold text-blue-900">
                  Support & Help
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.support.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(`support-${index}`)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-blue-900 text-lg pr-4">
                        {faq.question}
                      </span>
                      <span
                        className={`text-orange-500 text-xl font-bold transition-transform ${
                          openIndex === `support-${index}` ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {openIndex === `support-${index}` && (
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to
            help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-block"
            >
              Contact Support
            </a>
            <a
              href="<mailto:support@wheeldeal>. com"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-block"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

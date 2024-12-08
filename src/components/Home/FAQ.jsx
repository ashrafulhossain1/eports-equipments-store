import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of sports equipment do you sell?",
      answer:
        "We offer a wide range of sports equipment, including footballs, cricket bats, tennis rackets, badminton sets, and more. Browse through our categories to find the products you need.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to many countries worldwide. Shipping fees and delivery times may vary based on your location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our shipping partner’s website.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase for unused and undamaged products. Please check our return policy page for detailed information.",
    },
    {
      question: "Are there any discounts for bulk orders?",
      answer:
        "Yes, we offer discounts for bulk purchases. Contact our customer service team for more details and to request a quote.",
    },
    {
      question: "Can I customize my equipment?",
      answer:
        "Certain products, like jerseys and cricket bats, can be customized. Look for customization options on the product page or contact our support team.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, debit cards, PayPal, and various other online payment options. Check our payment options page for more details.",
    },
    {
      question: "Do you offer warranty on your products?",
      answer:
        "Yes, many of our products come with a manufacturer’s warranty. The warranty period varies depending on the product and brand.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <Fade direction="top" duration={1000}>  <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2></Fade>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Fade key={index} direction="top" duration={1000}>
              <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <span>
                    {open === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {open === index && (
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                )}
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

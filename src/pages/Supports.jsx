import React from 'react';

const Supports = () => {
    return (
        <div className="support-section container mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold text-center mb-6">Support and Help Center</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
                Need assistance? Our support team is here to help you with any questions or issues you may have.
                Visit our <a href="/support" className="text-blue-600 underline">Support Center</a> for FAQs, troubleshooting guides, and contact information.
            </p>
            <div className="text-center mt-6">
                <a
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
};

export default Supports;
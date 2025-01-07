import React from 'react';
import { Fade } from 'react-awesome-reveal';  // Import the Fade component

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            rating: 5,
            comment: "Amazing quality! The best sports gear I've ever purchased. Highly recommend!",
        },
        {
            id: 2,
            name: "Jane Smith",
            rating: 4,
            comment: "Good products overall, but the delivery took a bit longer than expected.",
        },
        {
            id: 3,
            name: "Mark Johnson",
            rating: 5,
            comment: "Excellent service and fantastic products. Will definitely shop again!",
        },
        {
            id: 4,
            name: "Emily Davis",
            rating: 4,
            comment: "Great experience! The customer support was helpful, but I wish the website was a bit easier to navigate.",
        },
        {
            id: 5,
            name: "Chris Lee",
            rating: 3,
            comment: "The products are fine, but I had some issues with the payment process. Hope they improve it.",
        },
    ];

    return (
        <div className="reviews-section container dark:text-white mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold text-center mb-6">What Our Customers Say</h2>
            
            {/* Apply the Fade effect to the grid of reviews */}
            <Fade direction='right' duration={1500} delay={300} cascade>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="review-card border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">{review.name}</h3>
                            <p className="text-yellow-500 mb-2 dark:text-white">{"⭐".repeat(review.rating)}</p>
                            <p className="text-gray-700 dark:text-white">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default Reviews;

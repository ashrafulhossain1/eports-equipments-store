import React from 'react';

const About = () => {
  return (
    <div  className="about-page container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">About EquiSports</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Welcome to EquiSports, your ultimate destination for top-quality sports equipment and accessories. 
        Our mission is to provide athletes, sports enthusiasts, and fitness lovers with the gear they need 
        to excel in their chosen disciplines. Whether you're a professional athlete or just starting your 
        fitness journey, we've got you covered.
      </p>

      <section className="features-section mb-6">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Wide range of sports equipment and apparel catering to various sports.</li>
          <li>Easy-to-use platform for browsing, purchasing, and reviewing products.</li>
          <li>Secure payment options and fast delivery services.</li>
          <li>Exclusive customization options to suit your preferences.</li>
          <li>Customer-first approach with dedicated support and feedback mechanisms.</li>
        </ul>
      </section>

      <section className="mission-vision-section mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Mission and Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          At EquiSports, our mission is to empower individuals to achieve their fitness goals by providing 
          exceptional products and services. Our vision is to become the go-to online store for sports 
          accessories, fostering a community of active and health-conscious individuals.
        </p>
      </section>

      <section className="team-section">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <p className="text-gray-700 leading-relaxed">
          Behind EquiSports is a passionate team of sports enthusiasts, product experts, and tech-savvy 
          professionals dedicated to creating a seamless shopping experience for our customers.
        </p>
      </section>
    </div>
  );
};

export default About;

import React from 'react';

const CoreValues = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and accountability in everything we do.',
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our services, from accuracy to customer support.',
    },
    {
      title: 'Partnership',
      description: 'We view our clients as partners and are committed to their long-term success.',
    },
    {
      title: 'Innovation',
      description: 'We embrace technology and innovation to deliver efficient and effective solutions.',
    },
    {
      title: 'Compassion',
      description: 'We understand the human side of healthcare and treat every interaction with care and respect.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-claimsBlue mb-4">Our Core Values</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our work is guided by a set of core values that define who we are and how we serve our clients:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

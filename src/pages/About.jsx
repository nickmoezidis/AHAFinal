import React from 'react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">About American Homeschool Academy</h1>
        <p className="mt-4 text-lg text-gray-600">
          Empowering students with a world-class education from the comfort of home, aligned with Common Core standards, delivered by animated AI avatars.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-500 text-white p-6 rounded-full mb-6">
            <span className="text-4xl font-semibold">🎓</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
          <p className="text-gray-600 mt-4">
            At American Homeschool Academy, our mission is to transform how students learn by delivering personalized, engaging, and efficient lessons that inspire success and curiosity. We bridge technology with education for a brighter future.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-green-500 text-white p-6 rounded-full mb-6">
            <span className="text-4xl font-semibold">🤖</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">What We Offer</h3>
          <p className="text-gray-600 mt-4">
            We offer a comprehensive K-8 curriculum across subjects including Math, Science, ELA, and Social Studies. Our animated AI avatars engage students, helping them learn in an interactive and fun environment.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-yellow-500 text-white p-6 rounded-full mb-6">
            <span className="text-4xl font-semibold">👩‍🏫</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Our Team</h3>
          <p className="text-gray-600 mt-4">
            Our team consists of dedicated educators, developers, and innovators working together to create a better learning experience. With over 20 years of expertise in education and technology, we’re committed to empowering both students and parents alike.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Why Choose Us?</h2>
        <p className="mt-4 text-lg text-gray-600">
          American Homeschool Academy offers more than just lessons—it offers a whole new approach to learning. With AI-driven avatars, personalized content, and an engaging, tech-enabled curriculum, we equip students with the knowledge they need to succeed in today’s world.
        </p>
      </div>
    </div>
  );
}

export default About;


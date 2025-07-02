import React from "react";

export default function Curriculum() {
  return (
    <div className="p-8 text-gray-900">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-800">Our Curriculum</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-700">
          At American Homeschool Academy, we offer a comprehensive, Common Core–aligned curriculum for students in Grades 1–8. Our lessons are interactive, engaging, and designed to make learning fun while ensuring strong academic progress.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Curriculum Overview</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our curriculum spans across **Math**, **English Language Arts (ELA)**, **Science**, and **Social Studies**. Each subject is carefully designed to build knowledge progressively, ensuring every student has a strong foundation in key academic areas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Math</h3>
            <p className="text-gray-600">
              Dive into math concepts that grow with your child’s understanding. We cover everything from basic arithmetic in Grade 1 to pre-algebra and geometry in Grade 8.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">ELA</h3>
            <p className="text-gray-600">
              Our English Language Arts curriculum includes reading comprehension, writing, grammar, and vocabulary, helping students communicate effectively and love reading.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Science</h3>
            <p className="text-gray-600">
              From Earth science to physical science, we provide hands-on experiments and interactive lessons that make science both accessible and exciting for young minds.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Social Studies</h3>
            <p className="text-gray-600">
              Our social studies curriculum covers history, geography, and civics, teaching students about the world around them and their role in a global community.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Weekly Structure</h2>
        <p className="text-lg text-gray-700 mb-6">
          Each subject is divided into **weekly themes** and delivered via interactive lessons. We make it easy for parents to stay involved with progress tracking, weekly goals, and a clear outline of the lessons.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Weekly Goals</h3>
            <p className="text-gray-600">
              Every week, students are presented with clear learning goals to focus on. This ensures they are not only engaged but understand their objectives for the week.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Interactive Lessons</h3>
            <p className="text-gray-600">
              Each lesson is designed with interaction in mind — students get to engage with the material through exercises, quizzes, and multimedia.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Parent Dashboard</h3>
            <p className="text-gray-600">
              Parents can track their child's progress through the Parent Dashboard, receive notifications, and export reports for review.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mt-12">
        <a
          href="/login"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Login to Parent Dashboard
        </a>
      </section>
    </div>
  );
}


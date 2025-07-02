import React from "react";

export default function FAQ() {
  return (
    <div className="p-8 text-gray-900">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-800">Frequently Asked Questions</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-700">
          Have questions? We’ve got answers! Below are some of the most commonly asked questions about American Homeschool Academy and how it works.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">General Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              What is American Homeschool Academy?
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              American Homeschool Academy (AHA) is a complete homeschooling platform for Grades 1–8 that provides an interactive, Common Core-aligned curriculum. It features animated AI teacher avatars, a personalized learning experience, and real-time progress tracking for parents.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              How does AHA support homeschooling?
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              AHA provides everything you need to educate your child at home. With our easy-to-use platform, your child will engage with interactive lessons, while you stay connected via the Parent Dashboard, where you can track progress and receive personalized recommendations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              Is AHA Common Core-aligned?
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              Yes! Our curriculum is fully aligned with Common Core standards, ensuring that students are meeting educational benchmarks for their grade level.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Technical Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              Do I need special software to use AHA?
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              No special software is required. AHA works in any modern web browser, so you can use it on a PC, Mac, tablet, or mobile device.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              Can I track my child’s progress?
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              Yes! Our Parent Dashboard allows you to track your child's progress in real-time, see completed lessons, and view detailed reports on their performance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              Can I print reports and certificates?
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              Yes, you can print reports, certificates, and progress charts from the Parent Dashboard to keep a physical record of your child’s learning milestones.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Account & Subscription</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              How do I sign up for AHA?
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              You can sign up on our website at any time. Simply click the "Get Started" button, fill out your information, and choose your subscription plan.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              What are the subscription plans?
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              AHA offers several subscription options, including monthly and annual plans. Choose the plan that best fits your family’s needs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              Can I cancel my subscription at any time?
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              Yes! You can cancel your subscription at any time through the Parent Dashboard. You will continue to have access until the end of your current billing period.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <p className="text-lg text-gray-700 mb-6">
          If you have more questions or need support, feel free to reach out to our customer service team.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

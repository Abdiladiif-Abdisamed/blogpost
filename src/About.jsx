import React from 'react'

const About = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">About BlogPost</h1>
      
      {/* Section 1: Our Mission */}
      <section className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to empower writers and readers by providing a simple, beautiful, and accessible platform for sharing ideas and stories. We believe everyone has a story worth telling.
        </p>
      </section>

      {/* Section 2: Who We Are */}
      <section className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Who We Are</h2>
        <p className="text-gray-700">
          BlogPost is built by a passionate team of developers and content creators who value creativity, learning, and community. We are dedicated to making blogging easy and enjoyable for everyone.
        </p>
      </section>

      {/* Section 3: Contact Us */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-gray-700">
          Have questions or feedback? Reach out to us at <a href="mailto:info@blogpost.com" className="text-blue-700 underline">info@blogpost.com</a>. We’d love to hear from you!
        </p>
      </section>
    </div>
  )
}

export default About
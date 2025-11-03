import React from 'react';
import { Link } from 'react-router';


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto  rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-8">About DevSaathi 🤝</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              DevSaathi is a dedicated platform built for developers, by developers. Our mission is to connect 
              talented developers from around the world, fostering collaboration, knowledge sharing, and 
              professional growth in the tech community.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DevSaathi provides a unique space where developers can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Discover and connect with developers sharing similar skills and interests</li>
              <li>Build meaningful professional relationships through our smart matching algorithm</li>
              <li>Collaborate on projects and share knowledge in real-time</li>
              <li>Expand their professional network in the tech industry</li>
              <li>Communicate seamlessly through our integrated chat system</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where developers can easily find collaborators, mentors, and friends who 
              share their passion for technology. DevSaathi aims to break down geographical barriers and 
              create a global community of developers helping each other grow and succeed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why DevSaathi?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🎯 Skill-Based Matching</h3>
                <p className="text-sm text-gray-700">Our algorithm connects you with developers based on shared skills and technologies.</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">💬 Real-Time Chat</h3>
                <p className="text-sm text-gray-700">Communicate instantly with your connections through our integrated messaging system.</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🔒 Privacy First</h3>
                <p className="text-sm text-gray-700">Your data security and privacy are our top priorities.</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🌍 Global Community</h3>
                <p className="text-sm text-gray-700">Connect with developers from all around the world.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">The Story Behind DevSaathi</h2>
            <p className="text-gray-700 leading-relaxed">
              DevSaathi was born from the need to create a dedicated platform where developers could find 
              like-minded professionals to collaborate, learn, and grow together. We understand the challenges 
              of finding the right people to work with, and that's why we built DevSaathi - to make meaningful 
              developer connections easier than ever.
            </p>
          </section>

          <section className="text-center mt-12">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-gray-700 mb-6">
              Ready to connect with amazing developers? Start your journey with DevSaathi today!
            </p>
            <Link to="/login" className="btn btn-primary btn-lg">
              Get Started
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
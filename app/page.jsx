"use client"

import React, { useState, useEffect } from 'react';
import SignupForm from '../components/signupform';
import Modal from '../components/modal';
import LoginForm from '../components/loginform';

function LandingPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSignUp = () => setIsSignupModalOpen(true);
  const handleLogin = () => setIsLoginModalOpen(true);
  const closeModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
  };

  return (
    <div data-theme="abyss" className="min-h-screen">
      {/* Navigation Bar */}
      <nav data-theme="abyss" className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold">NS ECL</h1>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleLogin}
                className="btn btn-neutral"
              >
                Log In
              </button>
              <button
                onClick={handleSignUp}
                className="btn btn-info"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className={`sm:text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <h1 data-theme="abyss" className="text-5xl font-extrabold sm:text-6xl">
                  <span className="block">Get the Loan You Need</span>
                  <span className="block text-blue-600">Fast and Easy</span>
                </h1>
                <p className="mt-4 text-lg sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                  Low interest rates, flexible terms, quick approvals. Start your journey to financial freedom today.
                </p>
                <div className="mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#calculator"
                      className="btn btn-info"
                    >
                      Calculate Your Loan
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section data-theme="abyss" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-4xl font-extrabold sm:text-5xl">
              Why Choose NS ECL?
            </h2>
            <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
              We offer the best loan solutions tailored to your needs.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Fast Approval",
                  description: "Get your loan approved in minutes.",
                  icon: "🚀",
                  color: "bg-gray-800 bg-opacity-70"
                },
                {
                  title: "Flexible Repayment",
                  description: "Choose a repayment plan that suits you.",
                  icon: "💰",
                  color: "bg-gray-800 bg-opacity-70"
                },
                {
                  title: "Transparent Terms",
                  description: "No hidden fees, no surprises.",
                  icon: "🔍",
                  color: "bg-gray-800 bg-opacity-70"
                },
                {
                  title: "Competitive Rates",
                  description: "Enjoy some of the best rates in the market.",
                  icon: "📈",
                  color: "bg-gray-800 bg-opacity-70"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`${benefit.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4 text-white">{benefit.icon}</div>
                  <h3 className="text-lg font-medium text-white">{benefit.title}</h3>
                  <p className="mt-2 text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      
      <section data-theme="abyss" id="calculator" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <h3 className="text-3xl font-semibold text-gray-900 text-center mb-8">
                Loan Calculator
              </h3>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Loan Amount
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Loan Term (months)
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter term"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Interest Rate (%)
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        step="0.1"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter rate"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn px-6 py-3 rounded-md text-white"
                  >
                    Calculate Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>

      {/* Modals */}
      <Modal isOpen={isLoginModalOpen} onClose={closeModal}>
        <LoginForm />
      </Modal>

      <Modal isOpen={isSignupModalOpen} onClose={closeModal}>
        <SignupForm/>
      </Modal>
    </div>
  );
}

export default LandingPage;
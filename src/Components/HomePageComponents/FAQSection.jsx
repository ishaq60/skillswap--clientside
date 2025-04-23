import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqs = [
    {
      question: "How can I book?",
      answer: "You can book a session directly through our website by selecting your preferred mentor, choosing an available time slot, and completing the payment process. Alternatively, you can contact our support team for assistance with booking."
    },
    {
      question: "Quisque dignissim vulputate purus in sodales?",
      answer: "Quisque dignissim vulputate purus in sodales est vitae feugiat. Nullam eget felis sit amet nulla volutpat eleifend. Suspendisse vulputate sem vitae justo convallis accumsan."
    },
    {
      question: "Nullam non vehicula neque. Vivamus sed consectetur nunc. Proin eu tristique justo, id eleifend urna?",
      answer: "Nullam non vehicula neque. Vivamus sed consectetur nunc. Proin eu tristique justo, id eleifend urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti."
    },
    {
      question: "Lorem ipsum is simply dummy text of the printing and typesetting?",
      answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
    },
    {
      question: "Sit amet pulvinar metus est ut nisl?",
      answer: "Sit amet pulvinar metus est ut nisl. Nulla facilisi. Mauris bibendum justo nec risus lacinia, in gravida velit egestas. Fusce tincidunt odio et tellus suscipit, eu efficitur justo sodales."
    }
  ];

  return (
    <section className="bg-indigo-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Logo in top left corner */}
      <div className="absolute top-4 left-4">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-yellow-400 rounded-l-full"></div>
          <div className="absolute inset-0 border-2 border-white rounded-l-full"></div>
        </div>
      </div>
      
      {/* Chart graphic in bottom right */}
      <div className="absolute bottom-4 right-4">
        <svg width="120" height="40" viewBox="0 0 120 40" className="text-white">
          <path d="M0,30 L20,25 L40,28 L60,15 L80,20 L100,5 L120,10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" />
          <path d="M0,30 L20,25 L40,28 L60,15 L80,20 L100,5 L120,10" 
                fill="none" 
                stroke="#FACC15" 
                strokeWidth="2" 
                strokeDasharray="4 2" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1 bg-blue-200 relative">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <p className="text-gray-300 max-w-xl mx-auto">
            They are highly aWe collect reviews from our users so you can get an
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-indigo-800"
            >
              <button
                className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <Plus 
                  className={`flex-shrink-0 ml-2 w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-45' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-5 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
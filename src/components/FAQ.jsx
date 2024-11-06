import React, { useState } from 'react';

function FAQ() {
    const faqs = [
        {
            question: "Why do I need an interior designer?",
            answer: "An interior designer can help you optimize your space, choose appropriate colors and furnishings, and ensure a cohesive look and feel tailored to your needs and preferences."
        },
        {
            question: "Why is Livspace perfect for your home interior design?",
            answer: "Livspace offers a comprehensive interior design service, providing quality designs, a range of products, and hassle-free project management for a seamless experience."
        },
        {
            question: "What services are included under home interior design?",
            answer: "Home interior design services may include space planning, color selection, furniture design, lighting, and decor placement, among other personalized design solutions."
        },
        {
            question: "How much does home interiors cost?",
            answer: "The cost of home interiors varies depending on the scope of work, materials chosen, and other factors. You can contact our team for a customized quote."
        },
    ];

    return (
        <section className="bg-gray-800 p-6  lg:w-full p-20 mx-auto">
            <h2 className="text-3xl text-white font-bold mb-6 text-gray-900">FAQs About Home Interior Design</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
}

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-300 rounded-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-900 bg-gray-100 hover:bg-gray-200"
            >
                <span>{question}</span>
                <span className="text-xl font-bold text-gray-500">
                    {isOpen ? '-' : '+'}
                </span>
            </button>
            {isOpen && (
                <div className="p-4 text-gray-700 bg-white">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default FAQ;

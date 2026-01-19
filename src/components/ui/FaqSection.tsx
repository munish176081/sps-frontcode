"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
    {
        question: "Which Vercel plan is right for me?",
        answer: (
            <>
                <p>
                    Our Hobby plan is for personal, non-commercial use. Pro is for small
                    teams with moderate bandwidth and collaboration requirements.
                    Enterprise is for teams seeking greater performance, collaboration,
                    and security.
                </p>
                <Link href="#" className="faq-link">
                    Contact our sales team
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                        <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="#3A724F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 2H14V6" stroke="#3A724F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.66602 9.33333L13.9993 2" stroke="#3A724F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>  to learn more.
            </>
        ),
    },
    { question: "Do you offer custom invoicing?" },
    { question: "What are the limits for each plan?" },
    { question: "I went over my limits. What can I do?" },
    { question: "Can I buy additional bandwidth?" },
    {
        question: "I have a Hobby account, how do I upgrade to a paid plan?",
    },
    { question: "Is there a limit to how many teams I can have?" },
    {
        question: "I want to transfer a domain name to Vercel. Is there a fee?",
    },
    { question: "How does Vercel calculate usage?" },
];

export default function FaqSection() {
    // DEFAULT OPEN = FIRST ITEM (index 0)
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        // If clicking same item → close it
        // If clicking different → open that & close others
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white pb-4 pb-md-5 my-md-3 faq-section">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 mb-4 mb-lg-0">
                        <small className="badge-text badge-primary d-block mb-3">FAQ</small>
                        <h2 className="h2 mb-4">
                            Your Questions,<br />Answered
                        </h2>
                        <p className="faq-desc">
                            From project planning to installation details, find the information you need to move forward with confidence.
                        </p>
                    </div>

                    <div className="col-md-6">
                        <div className="faq-accordion">
                            {faqs.map((item, index) => {
                                const isOpen = activeIndex === index;

                                return (
                                    <div className="accordion-item" key={index}>
                                        <button
                                            className={`accordion-button ${isOpen ? "" : "collapsed"
                                                }`}
                                            onClick={() => toggle(index)}
                                            aria-expanded={isOpen}
                                        >
                                            {item.question}
                                        </button>

                                        <div
                                            className={`accordion-body-wrapper ${isOpen ? "open" : ""
                                                }`}
                                        >
                                            <div className="accordion-body">
                                                {item.answer || <p>Answer content goes here.</p>}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

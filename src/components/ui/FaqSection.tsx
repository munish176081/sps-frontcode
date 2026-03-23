"use client";

import Link from "next/link";
import { JSX, useState } from "react";

export interface FaqItem {
  question: string;
  answer?: string | JSX.Element | null;
}

export default function FaqSection(items: { items?: FaqItem[] }) {
    // DEFAULT OPEN = FIRST ITEM (index 0)
    const faqs = items.items ?? [];
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

import Image from "next/image";

export const IntroSection = () => {
    return (
        <>
            <section className="py-md-5 pt-2 pb-5 how-begin-section">
                <div className="container">

                    <h2 className="h1 mb-4 mb-md-5">
                        An around the world ticket
                        <br />
                        and sense of wanderlust
                    </h2>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <figure className="mb-0">
                                <Image
                                    src="/about/about-pic1.webp"
                                    alt="Stone interior"
                                    width={600}
                                    height={554}
                                    className="w-100 h-auto"
                                />
                            </figure>
                        </div>

                        <div className="col-md-6">
                            <div className="begin-summary">
                                <figure>
                                    <Image
                                        src="/about/about-pic2.webp"
                                        alt="How it began"
                                        width={689}
                                        height={516}
                                        className="w-100 h-auto"
                                    />
                                </figure>
                                <small className="badge-text badge-primary d-block mb-4">How it began</small>
                                <h3 className="h6 mb-3 mb-md-4">
                                    [1] A journey sparked by curiosity, [2] shaped by encounters with ancient craftsmanship, and [3] guided by a deep respect for natural stone.
                                </h3>
                                <p>
                                    In 2008, founder Jordan Hill travelled through East Africa to the pyramids of Giza. Seeing the immense, hand-worked limestone blocks left a lasting impression — each piece carrying its own story. That moment ignited the inspiration behind Splendour in Stone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
        </>
    );
} 
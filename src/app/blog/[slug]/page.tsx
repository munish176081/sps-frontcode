import Image from "next/image";
import './style.scss';
import Link from "next/link";
import Button from "@/components/ui/Button";

const relatedPosts = [
  {
    slug: "common-bluestone-installation-mistakes",
    image: "/blog/blog-list-thumb1.webp",
    featured: true,
    date: "08, Dec 2025",
    title: "Common Bluestone Installation Mistakes And How To Avoid Them",
    excerpt:
      "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups...",
  },
  {
    slug: "best-paving-stones-for-pools",
    image: "/blog/blog-list-thumb2.webp",
    featured: true,
    date: "09, Dec 2025",
    title: "Best Paving Stones For Pool Areas",
    excerpt:
      "Choosing the right stone for pool paving is essential for safety, comfort, and durability...",
  },
];

export default function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <section className="py-4 py-md-5 blog-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <Image
                src="/blog/blog-detail1.webp"
                alt="Blog Hero"
                width={1200}
                height={600}
                className="w-100 h-auto"
                priority
              />
            </div>
          </div>

          {/* TITLE + META */}
          <div className="row align-items-end mb-4">
            <div className="col-lg-9">
              <h1 className="h1">
                Common Bluestone Installation Mistakes And How To Avoid Them
              </h1>
            </div>

            <div className="col-lg-3 text-lg-end">
              <div className="d-flex justify-content-between">
                <small className="d-block">08, Dec 2025</small>
                <small className="text-muted">Joel S</small>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="container">
          <div className="row py-md-5 py-4">
            <div className="col-12">
              <p>
                Natural stone has become a favourite choice for Australian pool areas
                because it brings lasting beauty, comfort underfoot, and year-round durability.
                Homeowners want pool surrounds that stay safe, look refined, and handle
                our tough climate with ease.
              </p>
              <p>
                A well-chosen stone can reduce heat, improve traction, and elevate the style
                of any backyard. Each type performs differently, which makes it important
                to understand their strengths before making a decision.
              </p>
              <p>
                This article explains the best stones for pool paving, key selection factors,
                ideal finishes, coping options, and installation tips.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="container">
          <div className="row py-4">
            <div className="col-lg-4">
              <h2 className="h2">What Makes a Stone Suitable for Pool Paving?</h2>
            </div>

            <div className="col-lg-8">
              <p>A good pool paving stone must handle water exposure, intense sun, and foot traffic without losing strength or appearance. It needs a texture that feels secure when wet and enough density to withstand outdoor conditions. Stones that stay cooler under the sun help create comfortable spaces for homes, especially around north-facing pools where heat builds quickly in summer.</p>
              <p>
                The stone should also complement the home’s style and landscaping while offering low maintenance and dependable long-term performance. When paired with the right finish and a simple sealing routine, these qualities ensure the pool area stays safe, durable, and visually consistent year-round.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="container">
          <div className="row py-4">
            <div className="col-lg-4">
              <h2 className="h2">Best Stones for Pool Paving in Australian Homes</h2>
            </div>

            <div className="col-lg-8">
              <p>Finding the best stones for pool paving starts with knowing which materials perform reliably in Australian conditions. Here are the top natural stones suited to backyard pools.</p>
            </div>
          </div>
        </div>

        <div className="container">

          <div className="border p-4 mb-3">
            <div className="row">
              <div className="col-lg-4">
                <h3 className="h3 mb-2 mb-md-0">1. Travertine Pavers</h3>
              </div>

              <div className="col-lg-8">
                <p>Finding the best stones for pool paving starts with knowing which materials perform reliably in Australian conditions. Here are the top natural stones suited to backyard pools.</p>
              </div>
            </div>
          </div>

          <div className="border p-4 mb-3">
            <div className="row">
              <div className="col-lg-4">
                <h3 className="h3 mb-2 mb-md-0">2. Limestone Pavers</h3>
              </div>

              <div className="col-lg-8">
                <p>Limestone stands out for its refined look, cooler surface feel, and balanced texture that supports confident movement around water. Its grain creates a gentle, consistent surface that suits relaxed outdoor settings without feeling slippery.</p>
                <p>Varieties like Loch Limestone and Selene Limestone offer clean, bright tones suited to coastal-inspired backyards. Their durability, versatile colouring, and soft aesthetic make limestone a reliable option for elegant, functional pool surrounds.</p>
              </div>
            </div>
          </div>

          <div className="border p-4 mb-3">
            <div className="row">
              <div className="col-lg-4">
                <h3 className="h3 mb-2 mb-md-0">3. Granite Pavers</h3>
              </div>

              <div className="col-lg-8">
                <p>Granite is prized for outstanding strength and long-term durability, making it ideal for homes with busy pools or frequent foot traffic. Its dense structure withstands chemicals, heat, and changing weather while maintaining a crisp, polished appearance.</p>
                <p>Varieties such as Charcoal Granite and Grey Granite offer sleek, contemporary tones that complement modern architecture. Their resilience and low maintenance needs make granite a dependable choice for long-lasting pool paving.</p>
              </div>
            </div>
          </div>

          <div className="border p-4 mb-3">
            <div className="row">
              <div className="col-lg-4">
                <h3 className="h3 mb-2 mb-md-0">4. Bluestone Pavers</h3>
              </div>

              <div className="col-lg-8">
                <p>Bluestone delivers a bold, structured look that suits modern outdoor designs and architectural pool settings. Its density holds up well in strong sunlight and frequent use, helping the stone retain depth and texture over time.</p>
                <p>Varieties like Flamed Bluestone and Sawn Bluestone offer rich, refined tones that elevate contemporary backyards. Although slightly warmer underfoot, bluestone remains a popular option for homeowners wanting a strong, distinctive pool surround.</p>
              </div>
            </div>
          </div>

          <div className="border p-4 mb-3">
            <div className="row">
              <div className="col-lg-4">
                <h3 className="h3 mb-2 mb-md-0">5. Porphyry Pavers</h3>
              </div>

              <div className="col-lg-8">
                <p>Porphyry is ideal for zones needing intense ground contact, particularly pathways, edging, and transition areas near the pool. Its rugged natural texture grips well under wet conditions, while its earthy colours create warmth in rustic or organic garden settings.</p>
                <p>Varieties such as Crazy Porphyry and Filetti Porphyry provide lively tones and natural variation. While seldom used as the main paving, they perform excellently as accents in high-traffic areas that require added grip.</p>
              </div>
            </div>
          </div>

          <div className="border p-4 mb-3">
            <div className="row">
              <div className="col-lg-4">
                <h3 className="h3 mb-2 mb-md-0">6. Marble (Special Use Cases)</h3>
              </div>

              <div className="col-lg-8">
                <p>Marble creates a luxurious, sculpted look that enhances high-end pool designs when used thoughtfully. It performs best in shaded or lightly exposed areas because it reacts to strong chemicals and prolonged sunlight.</p>
                <p>Varieties like Torro Marble and Atmos Marble offer elegant tones and soft veining that elevate premium outdoor spaces. Although visually striking, marble demands more care, placing it at the lower end of practicality for everyday family pools.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Pool */}
        <div className="container py-md-5 py-4">

          <div className="row">
            <div className="col-lg-3">
              <div className="d-flex flex-column h-100 justify-content-between pe-md-3">
                <h2 className="h2">Pool Paving Considerations for Australian Backyards</h2>
                <p>Designing a pool area that performs well year-round means thinking beyond appearance. These are the key considerations that help your paving last and stay practical in Australian backyard conditions.</p>
              </div>
            </div>

            <div className="col-lg-9">
              <Image
                src="/blog/pool-playing-thumb.webp"
                alt="Blog Hero"
                width={1024}
                height={576}
                className="w-100 h-auto"
                priority
              />
            </div>
          </div>

          <div className="d-block">

            <div className="border p-4 mb-3">
              <div className="row">
                <div className="col-lg-4">
                  <h3 className="h3 mb-2 mb-md-0">1. Saltwater vs Chlorinated Pools</h3>
                </div>

                <div className="col-lg-8">
                  <p>Stone near saltwater needs strong resistance to salt exposure, so choosing dense, low-porosity materials helps prevent long-term damage. Chlorinated pools are more forgiving, but both environments benefit from correct sealing and routine washing to protect the surface.</p>
                </div>
              </div>
            </div>

            <div className="border p-4 mb-3">
              <div className="row">
                <div className="col-lg-4">
                  <h3 className="h3 mb-2 mb-md-0">2. Heat Reflection for North-Facing Pools</h3>
                </div>

                <div className="col-lg-8">
                  <p>North-facing pools receive stronger sunlight, so selecting light-toned stones reduces surface heat and keeps the area comfortable. These colours reflect more warmth, which helps maintain safe, usable spaces during warm Australian summer afternoons.</p>
                </div>
              </div>
            </div>

            <div className="border p-4 mb-3">
              <div className="row">
                <div className="col-lg-4">
                  <h3 className="h3 mb-2 mb-md-0">3. Drainage and Fall Requirements</h3>
                </div>

                <div className="col-lg-8">
                  <p>Good drainage prevents puddling and reduces surface issues over time. Ensuring the right fall directs water away from the pool edge and prevents moisture from sitting on the surface, supporting long-term durability and safe daily use.</p>
                </div>
              </div>
            </div>

            <div className="border p-4 mb-3">
              <div className="row">
                <div className="col-lg-4">
                  <h3 className="h3 mb-2 mb-md-0">4. Compatibility With Surrounding Landscaping</h3>
                </div>

                <div className="col-lg-8">
                  <p>Stone choices should complement nearby garden beds, turf, and hardscape features to maintain visual harmony. Matching tones and textures helps create a cohesive backyard setting that feels intentional while keeping maintenance levels balanced across the space.</p>
                </div>
              </div>
            </div>

            <div className="border p-4 mb-3">
              <div className="row">
                <div className="col-lg-4">
                  <h3 className="h3 mb-2 mb-md-0">5. Regional Climate Differences</h3>
                </div>

                <div className="col-lg-8">
                  <p>Different regions experience different conditions, so stone selection should reflect local weather patterns. Melbourne’s cooler climate, Queensland’s humidity, and Perth’s heat all influence which materials perform best while still retaining their colour and texture throughout the year.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Best Pool Coping Options */}
        <div className="container py-md-5 py-4">

          <div className="row">
            <div className="col-lg-3">
              <div className="d-flex flex-column h-100 justify-content-between pe-md-3">
                <h2 className="h2">Best Pool Coping Options</h2>
                <p>The right coping creates a safe, comfortable, and polished edge for your pool. These are the most reliable coping profiles to suit different design styles and practical needs</p>
              </div>
            </div>

            <div className="col-lg-9">
              <Image
                src="/blog/pool-coping.webp"
                alt="Blog Hero"
                width={1024}
                height={576}
                className="w-100 h-auto"
                priority
              />
            </div>
          </div>

          <div className="d-block mt-4">

            <ul className="d-flex flex-column gap-1 list-styled">
              <li><strong>Square edge coping:</strong> A clean, modern profile that offers a seamless transition between the pool and surrounding paving, making it ideal for contemporary homes wanting a crisp and structured pool border.</li>
              <li><strong>Bullnose coping:</strong> A rounded front edge that feels comfortable to grip and gentle underfoot, which makes it perfect for families and steps where softer profiles improve safety and day-to-day usability.</li>
              <li><strong>Drop face coping:</strong> A sleek vertical drop creates a floating appearance around the pool, delivering an elegant finish that hides the joint line and suits modern architectural designs aiming for minimal visual clutter.</li>
              <li><strong>Rebated edge coping:</strong> A design that appears thicker than its actual size, giving the pool a premium, substantial look while reducing weight and simplifying installation around curved or straight edges.</li>
              <li><strong>Pencil edge coping:</strong> A lightly rounded edge that softens the look without losing clean lines, offering a safe, refined option for homeowners seeking a subtle yet polished pool border.</li>
              <li><strong>Custom coping solutions:</strong> Tailor-made lengths, thicknesses, and finishes help match surrounding pavers perfectly, ensuring a cohesive look across the whole pool area for both modern and classic outdoor designs.</li>
            </ul>

            <div className="border p-4 mt-4">
              <div className="row">
                <div className="col-lg-3">
                  <h3 className="h3 mb-2 mb-md-0">Popular Stone Finishes for Pool Areas</h3>
                </div>

                <div className="col-lg-9">
                  <p>Choosing the right finish matters just as much as choosing the stone itself. These are the most reliable finishes that support comfort, safety, and longevity around Australian pool areas.</p>
                  <ul className="d-flex flex-column gap-1 mb-0 list-styled">
                    <li><strong>Tumbled finish:</strong> Softened edges and a lightly textured surface create a comfortable feel underfoot while still helping maintain stable footing in wet areas, making it ideal for relaxed pool surrounds.</li>
                    <li><strong>Sandblasted finish:</strong> A consistent grainy texture improves ground hold and reduces surface shine, helping the stone feel secure in splash zones while preserving a natural, understated look suited to bright outdoor spaces.</li>
                    <li><strong>Brushed finish:</strong> Light brushing enhances texture without making the surface rough, offering a comfortable grip underfoot that works well around family pools while maintaining a refined and natural appearance.</li>
                    <li><strong>Exfoliated finish:</strong> Also known as flamed, this finish produces a crisp, textured surface that remains firm in wet areas and improves durability, making it ideal for Granite and similar dense stones.</li>
                    <li><strong>Honed finish:</strong> Creates a smooth, matte surface that suits outdoor designs needing a refined look, but should be paired with the right sealant and placement to avoid becoming too soft around water.</li>
                    <li><strong>Sawn finish:</strong> A clean cut finish with slight natural grain that offers consistent texture, making it suitable for modern outdoor designs needing a sleek but practical surface around the pool.</li>
                    <li><strong>Natural split finish:</strong> A rugged, organic texture created by splitting the stone along its layers, offering strong ground hold and a rustic feel suited to pathways and edges near pool zones.</li>
                  </ul>
                </div>
              </div>
            </div> 

          </div>
        </div>
    
        <div className="container mt-4">
          <div className="d-flex flex-column gap-3 align-items-start">
            <h2 className="h2">Bring Your Pool Project to Life</h2>
            <p>Choosing the right stone for your pool area brings together comfort, safety, and strong, long-term performance. Each material offers unique benefits that help create a pool surround suited to everyday use and Australian outdoor conditions.</p>
            <p>A thoughtfully selected stone finish also enhances the overall look, tying your landscaping and architecture together with colour and texture that feel natural around water. With proper care, quality stone continues to look impressive through the seasons.</p>
            <p>If you are ready to upgrade your pool area or plan a new outdoor project, contact Splendour in Stone for guidance, samples, and expert recommendations tailored to your home.</p>
            <Button variant="black" label="Get Consultation for my stone" rounded showIcon={false} />

            <div className="embed-responsive embed-responsive-16by9 w-100 mt-4">
              <iframe className="embed-responsive-item" src="https://www.google.com/maps?q=Myli+Beach+Greece&z=15&output=embed" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

      </section>

      {/* MORE TO EXPLORE */}
      <div className="container py-4">
        <h3 className="h2 mb-4 pb-0 pb-md-0">More to explore</h3>

        <div className="row">
          {relatedPosts.map((post) => (
            <div className="col-md-6 mb-4" key={post.slug}>
              <article className="blog-items">
                <figure>
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={700}
                      height={460}
                      className="w-100 h-auto"
                    />
                  </Link>
                </figure>
                <div className="px-md-3 blog-content">
                  <div className="row mt-4">
                    <div className="col-lg-5">
                      {post.featured && (
                        <small className="badge-text badge-primary d-block mb-4">Featured</small>
                      )}
                      <span className="d-none d-lg-block mt-md-4 pt-md-4">{post.date}</span>
                    </div>
                    <div className="col-lg-7">
                      <h2 className="h3 mb-2 mb-md-3"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                      <p>{post.excerpt}</p>
                      <span className="d-block d-lg-none mt-3">{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
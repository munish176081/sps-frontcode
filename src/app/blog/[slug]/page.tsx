import Image from "next/image";
import './style.scss';

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

        </div>

        <div className="container"> 

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

      </section>
    </>
  );
}
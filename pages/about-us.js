import Head from "next/head";
import Link from "next/link";
const AboutUs = () => {
  return (
    <>
     <Head>
        <title>About US | JBA</title>
      </Head>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">
             Home
            </Link>
            <span></span>About US
          </div>
        </div>
      </div>
      <section className="pt-40">
        <div className="container">
          <div className="product-header-banner-1">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="header-h">About us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="abot-sec">
        <div className="container">
          <div className="row abot-sec-cont">
            <div className="col-lg-6 align-self-center">
              <div className="about-left">
                <p>
                  Diamond manufacturing and creating jewelry is less science and
                  more art. We have a family business legacy dating back 40
                  years, making us a trusted and reliable business partner and
                  diamond expert for all delicate transactions.
                </p>

                <p>
                  At MPG, we have a strong management team comprised of the
                  second and third generations of the family who are deeply
                  committed to the organization's mission and values company.
                  They always strive to ensure the success of the company and
                  its stakeholders.
                </p>
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>

            <div className="col-lg-5">
              <div className="about-right">
                <img src="/img/about/about-side-pic.png" alt="about-side-pic" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pd-to">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="miss-viss">
                <img src="/img/about/mission.png" alt="mission" />

                <h2>Our Vision</h2>

                <p>
                  We aim to strengthen our position as the world's most trusted
                  supplier of diamonds, gemstones, fine jewelry, silver, and
                  pearls that are certified, high-quality, ethically sourced,
                  and meticulously manufactured.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="miss-viss">
                <img src="/img/about/vision.png" alt="mission" />

                <h2>Our Mission</h2>

                <p>
                  We are on a mission to inspire and make you fall in love with
                  the beauty and elegance of JBA's exquisitely designed jewelry
                  that makes heads turn and tells your unique story!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prom-sec">
        <div className="container">
          <div className="row abot-sec-cont">
            <div className="col-lg-4 col-md-6 align-self-center">
              <div className="card-left card-heg">
                <h2>Our Values</h2>

                <p>JBA is building long-lasting relationships by valuing</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card-mid card-heg">
                <img
                  src="/img/about/icon-1.png"
                  width="48"
                  height="48"
                  alt="icon-1"
                />

                <h3>Faith</h3>

                <p>
                  Faith propels trust. Jewels by Anu approaches every decision
                  and action with absolute and unwavering faith. Our people aim
                  high at building abiding trust amongst customers, employees,
                  clients, well-wishers, associates, and all stakeholders.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card-mid card-heg">
                <img
                  src="/img/about/icon-2.png"
                  width="48"
                  height="48"
                  alt="icon-2"
                />

                <h3>Hard Work</h3>

                <p>
                  At JBA, we value persistence & hard work. This has been the
                  key to our success in all our offerings. It is through our
                  people's dedication to hard work that we can consistently meet
                  milestones, setting higher standards for ourselves - our 40+
                  years' growth secret.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card-mid card-heg">
                <img
                  src="/img/about/icon-3.png"
                  width="48"
                  height="48"
                  alt="icon-3"
                />

                <h3>Innovation</h3>

                <p>
                  We passionately believe in providing freedom and ownership to
                  foster innovation. This approach is adding value to all our
                  services, empowering our people, and bringing uniqueness to
                  the table every time since our inception.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card-mid card-heg">
                <img
                  src="/img/about/icon-4.png"
                  width="48"
                  height="48"
                  alt="icon-4"
                />

                <h3>Togetherness</h3>

                <p>
                  Ideas can only be freely exchanged in a conducive environment.
                  We strive to maintain it across all levels and functions.
                  Integrated culture is something we take pride in at JBA; it is
                  not just employees but also their families.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card-last card-heg">
                <img src="/img/about/pic-diamond.png" alt="pic-diamond" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-grid-se">
                <a href="/book-a-virtual-appointment/">
                  <div className="inn-img">
                    <img src="/img/about/j-2.jpg" alt="left-frame" />
                  </div>
                  <div className="ineer-cont">
                    <h3>
                    Book A Virtual Appointment
                    </h3>
                    <p>We're here to help find your perfect jewelry. Book an appointment with our expert.</p>
                    <span>Book Now</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-grid-se">
                <a href="/bespoke/">
                  <div className="inn-img">
                    <img src="/img/about/j-1.jpg" alt="left-frame" />
                  </div>
                  <div className="ineer-cont">
                    <h3>
                    Bespoke Jewelry
                    </h3>
                    <p>Build legacy of bespoke jewels. Totally unique and personalized. Bespoke jewellery for new possibilities.</p>
                    <span>Create Yours</span>
                  </div>
                </a>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

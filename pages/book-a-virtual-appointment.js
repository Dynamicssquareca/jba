import Head from "next/head";
import Link from "next/link";


function BookAVirtualAppointment() {
  return (
    <>
      <Head>
        <title>Book A Virtual Appointment | JBA</title>
      </Head>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">
              Home
            </Link>
            <span></span>Book A Virtual Appointment
          </div>
        </div>
      </div>

      <section className="pt-40">
        <div className="container">
          <div className="product-header-banner-2">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="header-h">Book A Virtual Appointment</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="abot-sec">
        <div className="container">
          <div className="row abot-sec-cont">
            <div className="col-lg-12 align-self-center">
              <div className="about-left">
                <h2>Virtual Appointment</h2>
                <p>Book an appointment with our jewelry expert. You can choose to speak to us online according to your time.</p>
                <p>Whether you need help finding the perfect gift, celebrating an upcoming milestone or jewelry style advice, we're happy to help with complimentary virtual appointments. Use the scheduler on this page below to book a time. Or, you can always whatsapp/call <a href="tel:+918059102341">+91 8059102341</a> or email <a href="mailto:anu@shop.jewelsbyanu.com">anu@shop.jewelsbyanu.com</a></p>
              </div>
            </div>
            {/* <div className="col-lg-1 align-self-center"></div>

            <div className="col-lg-5">
              <div className="about-right">
                <img src="/img/about/about-side-pic.png" alt="about-side-pic" />
              </div>
            </div> */}
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
}

export default BookAVirtualAppointment;

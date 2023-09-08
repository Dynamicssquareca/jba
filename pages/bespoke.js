import Head from "next/head";
import Link from "next/link";

function bespoke() {
  return (
    <>
      <Head>
        <title>Bespoke | JBA</title>
      </Head>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">
              Home
            </Link>
            <span></span>Bespoke
          </div>
        </div>
      </div>

      <section className="pt-40">
        <div className="container">
          <div className="product-header-banner-2">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="header-h">The Art Of Bespoke</h1>
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
                <h2>Your Story Our Design</h2>
                <p>
                  Nothing is quite as personal and cherished as jewelry.
                  Personalised jewellery defines the personality of the owner.
                  Understanding the importance of perosonalised and customized
                  jewellery, Anu offers a special service where the designer
                  understand the requirements of the client through phone call,
                  whatsapp or online meeting. The process begins with
                  understanding your requirement, budget, style, purpose,
                  inspiration. Then designer sketch the designs for you. After
                  client approval, CAD design file is shared, team of experts
                  work together to bring your dream to reality.
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

      <section className="p-9">
        <div className="container">
          <div className="row bg-color-1">
            <div className="col-lg-12">
              <div className="jab-prom-banner-four">
                <div className="left">
                  <img src="/img/shop/dimond.png" alt="prom-banner" />
                </div>
                <div className="center">
                  <h3>ENDLESS POSSIBILITIES</h3>
                  <p>One-of-a-kind bespoke jewelry of your dreams</p>
                </div>
                <div className="right">
                  <a href="#" className="btn btn-lg">
                    INQUIRE NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="img-grid-se img-grid-se-1">
                <a href="/book-a-virtual-appointment/">
                  <div className="inn-img">
                    <img src="/img/about/rings-1.png" alt="left-frame" />
                  </div>
                  <div className="ineer-cont">
                    <h3>
                    Bespoke Rings
                    </h3>
                    <span>Explore More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="img-grid-se img-grid-se-1">
                <a href="/book-a-virtual-appointment/">
                  <div className="inn-img">
                    <img src="/img/about/bracelate.png" alt="left-frame" />
                  </div>
                  <div className="ineer-cont">
                    <h3>
                    Bespoke Bracelets 
                    </h3>
                    <span>Explore More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="img-grid-se img-grid-se-1">
                <a href="/book-a-virtual-appointment/">
                  <div className="inn-img">
                    <img src="/img/about/Pendant.png" alt="left-frame" />
                  </div>
                  <div className="ineer-cont">
                    <h3>
                    Bespoke Pendents
                    </h3>
                    <span>Explore More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="img-grid-se img-grid-se-1">
                <a href="/book-a-virtual-appointment/">
                  <div className="inn-img">
                    <img src="/img/about/earering.png" alt="left-frame" />
                  </div>
                  <div className="ineer-cont">
                    <h3>
                    Bespoke Earings
                    </h3>
                    <span>Explore More</span>
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

export default bespoke;

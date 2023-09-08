import Head from "next/head";
import Link from "next/link";


const BangleSize = () => {
  return (
    <>
      <Head>
        <title>Bangle Size Guide | JBA</title>
      </Head>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">
              Home
            </Link>
            <span></span>Bangle Size Guide
          </div>
        </div>
      </div>

      <section className="ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="new-header">Bangle Size Guide</h1>
            </div>
            <div className="col-lg-12">
              <div className="inner-content-defalul">
                <h3>Criteria To Measure Bangle Size</h3>
                <p>1. This is a chart that will be extremely helpful for you to determine the bangle size that you need. Measure your hand, you will need a measuring tape or a piece of paper and a ruler. Bring your thumb and little finger together and measure were your hand is the widest as shown in the picture.</p>
               <div className="row">
                <div className="col-lg-8">
                <table className="table table-responsive">
                  <thead>
                    <tr>
                      <th scope="col">Bangle Size (Indian)	</th>
                      <th scope="col" colspan="2">Bangle Size (Indian)	Circumference</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td><b>Inches</b></td>
                      <td><b>MM</b></td>
                    </tr>
                    <tr>
                      <td>2-2</td>
                      <td>6.67</td>
                      <td>169.4</td>
                    </tr>
                    <tr>
                      <td>2-4	</td>
                      <td>7.06</td>
                      <td>179.6</td>
                    </tr>
                    <tr>
                      <td>2-6</td>
                      <td>7.46</td>
                      <td>189.5</td>
                    </tr>
                    <tr>
                      <td>2-8</td>
                      <td>7.85</td>
                      <td>199.4</td>
                    </tr>
                    <tr>
                      <td>2-10</td>
                      <td>8.24</td>
                      <td>209.3</td>
                    </tr>
                    <tr>
                      <td>2-12</td>
                      <td>8.64</td>
                      <td>219.5</td>
                    </tr>
                    <tr>
                      <td>2-14</td>
                      <td>9.03</td>
                      <td>229.4</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>9.42</td>
                      <td>239.3</td>
                    </tr>
                  </tbody>
                </table>
                </div>
               </div>
                <p>2. Here is another chart that can also be considered in determining the appropriate bangle size. Measure the inside diameter of a bangle that you already own. It measures inside the diameter of such bangle in millimeters. This is normally used for double checking your results from the usual paper method. Apart from this, you can also make use of the bangle that you wear daily and cross check the same with below chart.</p>
                <div className="row">
                <div className="col-lg-8">
                <table className="table table-responsive">
                  <thead>
                    <tr>
                      <th scope="col">Bangle Size (Indian)	</th>
                      <th scope="col" colspan="2">Diameter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td><b>Inches</b></td>
                      <td><b>MM</b></td>
                    </tr>
                    <tr>
                      <td>2-2</td>
                      <td>2.125</td>
                      <td>54</td>
                    </tr>
                    <tr>
                      <td>2-4	</td>
                      <td>2.25</td>
                      <td>57.2</td>
                    </tr>
                    <tr>
                      <td>2-6</td>
                      <td>2.375</td>
                      <td>60.3</td>
                    </tr>
                    <tr>
                      <td>2-8</td>
                      <td>2.5</td>
                      <td>63.5</td>
                    </tr>
                    <tr>
                      <td>2-10</td>
                      <td>2.625</td>
                      <td>66.7</td>
                    </tr>
                    <tr>
                      <td>2-12</td>
                      <td>2.75</td>
                      <td>69.9</td>
                    </tr>
                    <tr>
                      <td>2-14</td>
                      <td>2.875</td>
                      <td>73</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>3</td>
                      <td>76.3</td>
                    </tr>
                  </tbody>
                </table>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BangleSize;

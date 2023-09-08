import { useEffect, useState } from "react";
import Head from 'next/head'
import HomeBannerSlider from "../components/sliders/HomeBannerSlider";
import CategoryHome from '../components/ecommerce/CategoryHome';
import FeaturedProduct from '../components/home/FeaturedProduct';
import NewArrivalProduct from '../components/home/NewArrivalProduct';
import PromoBannerOne from "../components/elements/PromoBannerOne";
import PromoBannerTwo from '../components/elements/PromoBannerTwo';
import PromoBannerThree from '../components/elements/PromoBannerThree';
import PromoBannerFour from '../components/elements/PromoBannerFour';
import BottomServiceList from '../components/elements/BottomServiceList';
import AppURL from "./api/AppUrl";
import CustomerReview from "@/components/elements/CustomerReview";


export default function Home({bannerdata,homecategorydata, featuredproductdata,newarrivalproductdata}) {
  const [bannerData] = useState(bannerdata);
  const [categoryData] = useState(homecategorydata);
  const [featuredproductData] = useState(featuredproductdata);
  const [newarrivalproductData] = useState(newarrivalproductdata);
  return (
    <div>
      <Head>
        <title>Loose Diamond Supplier, Manufacturer & Exporter from India | JBA</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>

      <main>
        <div>
          <section className="home-slider position-relative mb-30">
            <div className="container">
              <div className="home-slide-cover">
                {bannerData && bannerData.length >= 0 && (
                  <HomeBannerSlider banner={bannerData} />
                )}
              </div>
            </div>
          </section>


          <section className="m-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {categoryData && categoryData.length >= 0 && (
                    <CategoryHome homecategory={categoryData} />
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="mt-20">
            <div className='container'>
              <div className="section-title">
                <h2>Featured Products</h2>
              </div>
              <div className="row">

                <div className="col-lg-12">
                  <div className='related-products position-relative'>
                    {featuredproductData && featuredproductData.length >= 0 && (
                      <FeaturedProduct featureddata={featuredproductData} />
                    )}
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className='p-9'>
            <div className='container'>

              <div className='row'>
                <div className='col-lg-12'>
                  <PromoBannerOne />
                </div>

              </div>
            </div>
          </section>



          <section>
            <div className='container'>
              <div className="section-title">
                <h2>New Arrival</h2>
              </div>
              <div className='row'>
                <div className="col-lg-12">
                  <div className='related-products position-relative'>
                    {newarrivalproductData && newarrivalproductData.length >= 0 && (
                      <NewArrivalProduct newarrivaldata={newarrivalproductData} />
                    )}

                  </div>
                </div>


              </div>
            </div>
          </section>

          <section className='p-9'>
            <div className='container'>
              <div className='row'>
                <div className="col-lg-6">
                  <PromoBannerTwo />
                </div>
                <div className="col-lg-6">
                  <PromoBannerThree />
                </div>
              </div>
            </div>
          </section>

          <section className='p-9'>
            <div className='container'>
              <div className='row bg-color-1'>
                <div className="col-lg-12">
                  <PromoBannerFour />
                </div>
              </div>
            </div>
          </section>

          <BottomServiceList />

           <section className="p-9">
            <div className="container">
              <CustomerReview />
            </div>
           </section>


        </div>
      </main>


    </div>
  )
}
export const getServerSideProps = async (context) => {
  try {
    const bannerres = await fetch(AppURL.banner);
    const bannerdata = await bannerres.json();
    const homecategoryresponse = await fetch(AppURL.category);
    const fetauredproductres = await fetch(AppURL.featuredproduct);
    const newarrivalproductresponse = await fetch(AppURL.newarrivalproduct);
    const homecategorydata = await homecategoryresponse.json();
    const featuredproductdata = await fetauredproductres.json();
    const newarrivalproductdata = await newarrivalproductresponse.json();
    return {
      props: { bannerdata, homecategorydata, featuredproductdata, newarrivalproductdata },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: false,
      },
    };
  }
};
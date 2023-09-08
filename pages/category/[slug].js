import React from "react";
import axios from "axios";
import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import SingleProductShop from "../../components/ecommerce/SingleProductShop";
import Head from "next/head";
import { useEffect } from "react";
import AppURL from "../api/AppUrl";
const Slug = ({ slug, data ,categorybannerdata }) => {
  const [productbycategoryData] = useState(data);
  const [resProducts, setProducts] = useState(null);
  const [featured, setFeatured] = useState([]);
  const [pricehighlow, setPriceHighLow] = useState([]);
  const [pricelowhigh, setPriceLowHigh] = useState([]);
  const [newest, setNewest] = useState([]);
  const[category_url] = useState(categorybannerdata[0]['category_banner_url']);
  const FeaturedHandler = (e) => {
    const { name } = e.target
    if (featured.includes(name)) {
      const newArr = featured.filter((like) => like !== name);
      setFeatured(newArr);
    } else {
      setFeatured((p) => [...p, name]);
    }
  };
  const HighLowHandler = (e) => {
    const { name } = e.target
    if (pricehighlow.includes(name)) {
      const newArr = pricehighlow.filter((like) => like !== name);
      setPriceHighLow(newArr);
    } else {
      setPriceHighLow((p) => [...p, name]);
    }
  };
  const LowHighHandler = (e) => {
    const { name } = e.target
    if (pricelowhigh.includes(name)) {
      const newArr = pricelowhigh.filter((like) => like !== name);
      setPriceLowHigh(newArr);
    } else {
      setPriceLowHigh((p) => [...p, name]);
    }
  };
  const NewestHandler = (e) => {
    const { name } = e.target;
    if (newest.includes(name)) {
      const newArr = newest.filter((like) => like !== name);
      setNewest(newArr);
    } else {
      setNewest((p) => [...p, name]);
    }
  };
  useEffect(() => {
    if (data) {
      const check = featured.length > 0 || pricehighlow.length > 0 || pricelowhigh.length > 0 || newest.length > 0;
      if (check) {
        const pricehigh =
          pricehighlow.length > 0
            ? pricehighlow.map((value) => {
              return `pricehightolow=${value}`;
            })
            : [];
        const pricelow =
          pricelowhigh.length > 0
            ? pricelowhigh.map((value) => {
              return `pricelowtohigh=${value}`;
            })
            : [];
        const newestproduct =
          newest.length > 0
            ? newest.map((value) => {
              return `productnew=${value}`;
            })
            : [];
        axios.get(`${AppURL.categoryfilterlistproduct}?${pricehigh && pricehigh}${pricelow && pricelow}${newestproduct && newestproduct}category=${slug.charAt(0).toUpperCase() + slug.slice(1).split("-").join(" ")}`)
          .then((res) => {
            setProducts(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else {
        setProducts(productbycategoryData)
      }
    }

    else {
      return;
    }

  })
  return (
    <>
      <Head>
        <title>{slug.charAt(0).toUpperCase() + slug.slice(1)} | JBA</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>
      <section className="pt-40">
        <div className="container">
          <div className="product-header" style={{
            background: `url(${category_url}) no-repeat center top`,
            backgroundSize: "cover",
          }}>
            
            <div className="row">
              <div className="col-lg-8">
                <h1 className="header-h">{slug.charAt(0).toUpperCase() + slug.slice(1)}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb">
        <div className="container">
          <div className="filter-bg">
            <div className="row">
              <div className="col-lg-12">
                <div className="jab-tags-filter">
                  <ul className="jab-tags-list">
                    <li className="hover-up">

                      {slug.charAt(0).toUpperCase() + slug.slice(1)} <RiCloseCircleLine />

                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-60 pt-20">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-xl-9 col-lg-8">
              <div className="list-of-products-p ">
                <div className="row">
                  {resProducts && resProducts.map((item, i) => (
                    <div className="col-xxl-4 col-md-6 col-sm-6 col-6" key={i}>
                      <SingleProductShop productName={item.product_name} productSlug={item.product_slug} sku={item.product_sku_id} productPrice={item.product_price} productFrontImage={item.product_front_image_url} productBackImage={item.product_back_image_url} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="prodect-filter-wrper sticky-top">
                <div className="fliter-head">
                  <h3>Filter By</h3>
                </div>
                <div className="h-600">
                  <div className="filter-list-sec">
                    <h4>Sort By</h4>

                    <div className="form-check jba-checkbox">
                      <div >
                        <input
                          className="form-check-input"
                          id="0"
                          type="checkbox"
                          name="Featured"
                          onChange={(e) => FeaturedHandler(e)}

                        />
                        <label className="form-check-label" htmlFor="0">
                          Featured
                        </label>
                      </div>
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="HighLow"
                          onChange={(e) => HighLowHandler(e)}
                          id="1"
                        />
                        <label className="form-check-label" htmlFor="1">
                          Price High to Low
                        </label>
                      </div>
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="LowHigh"
                          onChange={(e) => LowHighHandler(e)}
                          id="2"
                        />
                        <label className="form-check-label" htmlFor="2">
                          Price Low to High
                        </label>
                      </div>
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="Newest"
                          onChange={(e) => NewestHandler(e)}
                          id="3"
                        />
                        <label className="form-check-label" htmlFor="3">
                          Newest
                        </label>
                      </div>
                    </div>
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
export default Slug;
export const getServerSideProps = async (context) => {
  let slug = context.query.slug;
  try {
    const res = await fetch(AppURL.productbycategory + slug.charAt(0).toUpperCase() + slug.slice(1).split("-").join(" "));
    const categorybannerres = await fetch(AppURL.categorybanner + slug.charAt(0).toUpperCase() + slug.slice(1).split("-").join(" "));
    const data = await res.json();
    const categorybannerdata = await categorybannerres.json();
    return {
      props: {
        slug, data,categorybannerdata,
      },
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
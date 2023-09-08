import React, {useEffect, useState } from "react";
import axios from "axios";
import { RiCloseCircleLine } from "react-icons/ri";
import SingleProductShop from "../components/ecommerce/SingleProductShop";
import Head from "next/head";
import { useRouter } from "next/router";
import ProductFilters from "./products/ProductFilters";
import AppURL from "./api/AppUrl";
const Index = (response={data}) => {
  const router =useRouter();
  const [categoriesFilter, setCategoriesFilter] = useState(null);
  const [resProducts, setProducts] = useState(null);
  const [selectedCategoryFilterItem, setSelectedCategoryFilterItem] = useState([]);
  const [volume, setVolume] = useState([0,0]);
  const volumeHandler = (value) => {
    setVolume(value);
  };
  const [featured, setFeatured] = useState([]);
  const [pricehighlow, setPriceHighLow] = useState([]);
  const [pricelowhigh, setPriceLowHigh] = useState([]);
  const [newest, setNewest] = useState([]);
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
  const categoryHandler = (e) => {
    const { name } = e.target;
    const filterCat =
      categoriesFilter &&
      categoriesFilter.length > 0 &&
      categoriesFilter.map((item) => {
        if (item.category_name === name) {
          return {
            ...item,
            selected: !item.selected,
          };
        } else {
          return {
            ...item,
          };
        }
      });
    setCategoriesFilter(filterCat);
    if (selectedCategoryFilterItem.includes(name)) {
      const newArr = selectedCategoryFilterItem.filter((like) => like !== name);
      setSelectedCategoryFilterItem(newArr);
    } else {
      setSelectedCategoryFilterItem((p) => [...p, name]);
    }
  };
  useEffect(() => {
    setCategoriesFilter(
      response.data &&
        response.data.categories.length > 0 &&
        response.data.categories.map((item) => {
          return {
            ...item,
            selected: false,
          };
        })
    );
    const min = response.data &&
        response.data.all_products &&
        Math.min(
            ...response.data.all_products.map((item) => parseInt(item.product_price))
        );
    const max =  response.data &&
        response.data.all_products &&
        Math.max(
            ...response.data.all_products.map((item) => parseInt(item.product_price))
        );
    const volumeArr = [min,max];
    setVolume(volumeArr);
      },[response.data.products]);
      useEffect(() => {
        if (response.data) {
          const min =
        response.data &&
        Math.min(
          ...response.data.all_products.map((item) => parseInt(item.product_price))
        );
      const max =
        response.data &&
        Math.max(
          ...response.data.all_products.map((item) => parseInt(item.product_price))
        );
          const check =  selectedCategoryFilterItem.length > 0 ||
          (volume[0] && volume[0] !== min) ||
        (volume[1] && volume[1] !== max)||
        featured.length > 0 ||
        pricehighlow.length > 0 ||
        pricelowhigh.length > 0 ||
        newest.length > 0;
          if (check) {
          const categoryQuery =
          selectedCategoryFilterItem.length > 0
            ? selectedCategoryFilterItem.map((value) => {
                return `categories[]=${value}`;
              })
            : [];
            const categoryString =
            categoryQuery.length > 0
              ? categoryQuery.map((value) => value + "&").join("")
              : "";
              const feturedproduct =
              featured.length > 0 ?
                featured.map((value) => {
                  return `featuredlist=${value}`;
                })
                : [];
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
            const newestproducts =
              newest.length > 0
                ? newest.map((value) => {
                  return `productnew=${value}`;
                })
                : [];
              axios.get(`${AppURL.searchproduct}?${
                  categoryString && categoryString
                  }${feturedproduct && feturedproduct}${
                     pricehigh && pricehigh
                  }${pricelow && pricelow}${
                  newestproducts && newestproducts
                 }`
              )
              .then((res) => {
                res.data && res.data.products.length > 0
              ? setProducts(res.data.products)
              : setProducts(response.data.all_products);
              })
              .catch((err) => {
                console.log(err);
              });
          }
          else {
            setProducts(response.data.all_products);
          }
        }
        else {
          return;
        }

      },
      [selectedCategoryFilterItem,
        featured,
        pricehighlow,
        pricelowhigh,
        newest,
        response.data.all_products]);
    
  return (
    <>
       <Head>
      <title>Search for {router.query.q}</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>
      <section className="pt-40">
        <div className="container">
          <div className="product-header" style={{
                    background: `url('/img/banner/product-header-bg.jpg') no-repeat center top`,
                    backgroundSize: "cover",
                  }}>
            <div className="row">
              <div className="col-lg-8">
                <h1 className="header-h">Search for {router.query.q}</h1>
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
                    {resProducts && resProducts.length>=0 && (
                             resProducts.map((productItem,i)=>(
                        <div className="col-lg-4" key={i}>
                              <SingleProductShop productName={productItem.product_name} productSlug={productItem.product_slug} sku={productItem.product_sku_id} productPrice={productItem.product_price} productFrontImage={productItem.product_front_image_url} productBackImage={productItem.product_back_image_url}/>
                        </div>
                         ))
                         )}
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <ProductFilters categories={categoriesFilter} 
              categoryHandler={categoryHandler}
              FeaturedHandler={FeaturedHandler}
              HighLowHandler={HighLowHandler}
              LowHighHandler={LowHighHandler}
              NewestHandler={NewestHandler}
              
               volume={volume}
                 priceMax={
                    resProducts &&
                    Math.max(
                      ...resProducts.map((item) =>
                        parseInt(item.product_price)
                      )
                    )
                  }
                  priceMin={
                    resProducts &&
                    Math.min(
                      ...resProducts.map((item) =>
                        parseInt(item.product_price)
                      )
                    )
                  }
                  volumeHandler={(value) => volumeHandler(value)}/>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Index;
export const getServerSideProps = async (context) => {
    try {
        const search = context.query.q;
      const res = await fetch(`${AppURL.searchproduct}?search_key=${search}`);
      const data = await res.json();
      return {
        props: {
          data
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

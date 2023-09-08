import React from 'react';
import Checkbox from '../../components/Helpers/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
export default function ProductFilters({categories,
    categoryHandler,volume,priceMin,priceMax,volumeHandler,FeaturedHandler,HighLowHandler,LowHighHandler,NewestHandler}) {
  return (
    <div>
      <div className="prodect-filter-wrper sticky-top-product">
                <div className="fliter-head">
                  <h3>Filter By</h3>
                </div>
               <div className="h-600">
               <div className="filter-list-sec">
                  <h4>Category</h4>

                  <div className="form-check jba-checkbox">
                  {categories &&
                categories.length > 0 &&
                categories.map((item, i) => (
                    <div key={i}>
                      <input
                        className="form-check-input"
                        id={item.category_slug}
                        type="checkbox"
                        name={item.category_name}
                        onChange={(e) => categoryHandler(e)}
                        checked={item.selected}
                      />
                      <label className="form-check-label" htmlFor={item.category_slug}>
                        {item.category_name}
                      </label>
                    </div>
                ))}
                  </div>
                </div>
                {/* <div className="filter-list-sec">
                    <div className="col-lg-9">
                    <h4>Price</h4>
                  {volume && (
                    <>
                  <div className="form-check jba-checkbox">
                    <RangeSlider componentId="BookSensor" value={volume}  onInput={volumeHandler} min={priceMin} max={priceMax}/>
                    
                  </div>
                  <p>Price: ₹{volume[0]} - ₹{volume[1]}</p>
                  </>
          )}
                    
                    </div>
                </div> */}
                {/* <div className="h-600">
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
                        name ="HighLow"
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
                        onChange = {(e) => LowHighHandler(e)}
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
               </div> */}
               </div>
              </div>
            
    </div>
  );
}

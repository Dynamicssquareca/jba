import React from 'react';

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
export default function ProductFilter({categoryHandler,volume,priceMin,priceMax,volumeHandler}) {
  return (
    <>
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
                        type="checkbox"
                        name="hii"
                        id="0"
                      />
                      <label className="form-check-label" htmlFor="0">
                        Latest
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
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
                        value=""
                        handleChange={(e) => categoryHandler(e)}
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
                        value=""
                        id="3"
                      />
                      <label className="form-check-label" htmlFor="3">
                      Discount
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row"> 
                <div className="filter-list-sec">
                {volume && (
            <>
              <div className="price-range mb-5">
                <RangeSlider value={volume} onInput={volumeHandler} min={priceMin} max={priceMax} />
              </div>
              <p className="text-xs text-qblack font-400">
                Price: ₹{volume[0]} - ₹{volume[1]}
              </p>
            </>
          )}
                </div>
                </div>
               </div>
              </div>
    </>
  );
}

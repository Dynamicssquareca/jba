import React from 'react';
import Checkbox from '../../components/Helpers/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
export default function ProductFiltersMobile({ categories,
  categoryHandler, volume, priceMin, priceMax, volumeHandler, FeaturedHandler, HighLowHandler, LowHighHandler, NewestHandler }) {
  return (
    <div>
      <div className="prodect-filter-wrper">
        {/* <div className="fliter-head">
          <h3>Filter By</h3>
        </div> */}
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
        </div>
      </div>
    </div>
  );
}

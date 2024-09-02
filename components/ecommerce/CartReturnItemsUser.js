import Link from "next/link";
import React from "react";
const CartReturnItemsUser = () => {
  return (
    <>
      <div className="jba-cart-product jba-cart-product-user">
        <div className="p-pic">
          <a href="/products/abc">
           
              <img src="/img/shop/prodct-dummy-1.png" alt="img" />
            </a>
           
        </div>
        <div className="product-dec">
          <h3>
            <a href="/products/abc">
            Pearl Diamond Hoops
            </a>
          </h3>
          <span className="sku">SKU : 54FG3FDH31GFH</span>
          <span className="p-price">15,999</span>
          <div className="p-size">
            <div>
              <span className="size-head">Size: 16</span>
            </div>
          </div>
        </div>
      </div>
      <div className="return-op">
        <h3>Reason for Return</h3>
        <div className="form-check jba-checkbox">
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="1"
            />
            <label className="form-check-label" htmlFor="1">
              Not happy with product
            </label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="2"
            />
            <label className="form-check-label" htmlFor="2">
              Received broken piece
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
              Size is Incorrect
            </label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="4"
            />
            <label className="form-check-label" htmlFor="4">
              Other Reason
            </label>
          </div>
        </div>
        <div className="mb-3">
          <textarea
            className="form-controls"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write your Additional Information (Optional)

"
          ></textarea>
          <p>Our executive will call you with in 2 days</p>
        </div>
        <div className="button-area">
          <a href="#" className="btn btn-md btn-1">
            Confirm Return
          </a>
          <a href="#" className="btn btn-md btn-2">
            Cancel
          </a>
        </div>
      </div>
    </>
  );
};

export default CartReturnItemsUser;

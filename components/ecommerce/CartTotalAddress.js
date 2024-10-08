import React from "react";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import { useRouter } from 'next/router';

const CartTotalAddress = () => {

  return (
    <div className="cart-total-price">
      <div className="order-summery mt-30">
        <h3 className="mb-25">Order Summary</h3>

        <div className="price-tab">
            <table className="sub-total">
                <tbody>
                <tr>
                    <th>Subtotal</th>
                    <td>30,998</td>
                </tr>
                <tr>
                    <th>Total Discount</th>
                    <td>-1500</td>
                </tr>
                <tr>
                    <th>Shipping(standard)</th>
                    <td>FREE</td>
                </tr>
                </tbody>
                
            </table>
            <hr className="border-hr-colo" />
            <table className="total-price">
            <tbody>
                <tr>
                    <th>Total Cost</th>
                    <td>₹ 29,498</td>
                </tr>
                </tbody>
            </table>
            <div className="check-out mt-50">
            {/* <button onClick={handleClick} type="submit" className="btn btn-primary">Continue</button> */}
            <a href="/payment/" className="btn btn-primary">Continue</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotalAddress;

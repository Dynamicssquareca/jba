export class AppURL  {
    static BaseURL = "https://api.jewelsbyanu.com/api";
    static LocalUrl = "http://127.0.0.1:8000/api";
    static headermenu = this.BaseURL+"/all/categories";
    static banner = this.BaseURL+"/all/banners";
    static category = this.BaseURL+"/all/categories";
    static featuredproduct = this.BaseURL+"/featured/product";
    static newarrivalproduct = this.BaseURL+"/newarrival/product";
    static productbycategory = this.BaseURL+"/category/";
    static categoryfilterlistproduct = this.BaseURL+"/featured/product";
    static productlistfilter = this.BaseURL+"/search/product";
    static searchproduct = this.BaseURL+"/search/product";
    static productdetails = this.BaseURL+"/product/details/";
    static allpurity = this.BaseURL+"/all/purity";
    static allattribute = this.BaseURL+"/all/attribute";
    static bycategory = this.BaseURL+"/category/";
    static categorybanner = this.BaseURL+"/category/banner/";
    static bysubcategory = this.BaseURL+"/subcategory/";
    static megamenu = this.BaseURL+"/megamenu/categories";
    static bytesting = this.BaseURL+"/testing/";
    static userRegister = this.LocalUrl+"/register";
    static UserLogin = this.LocalUrl+"/login";
    static UserDetails = this.LocalUrl+"/customer-profile";
    static UserUpdateDetails = this.LocalUrl+"/update-customer";
    static UserOrders = this.LocalUrl+"/my-orders";
    static UserForgotPassword = this.LocalUrl+"/forgot-password";
    static UserResetPassword = this.LocalUrl+"/reset-password";
    static UserLogout = this.LocalUrl+"/logout";
    static UserAddtoCart = this.LocalUrl+"/add-to-cart";
    static UserCartList = this.LocalUrl+"/cart-list";
    static UserRemoveCart(cartId) {
        return `${this.LocalUrl}/delete-cart/${cartId}`;
      }
    static AllCountries = this.LocalUrl+"/get-countries";
    static GetStatesByCountry(countryId) {
        return `${this.LocalUrl}/get-states/${countryId}`;
    }

    static GetCitiesByState(stateId) {
        return `${this.LocalUrl}/get-cities/${stateId}`;
    }

    static UserAddAddress = this.LocalUrl + "/add-address";
    static UserGetAddress = this.LocalUrl+"/get-addresses";
    static UserUpdateAddress(addressId) {
        return `${this.LocalUrl}/update-address/${addressId}`;
    }
    static UserCheckout = this.LocalUrl+"/checkout";
    static UserCheckoutCOD = this.LocalUrl+"/codcheckout"
    static UserOrderSuccess(OrderId) {
        return `${this.LocalUrl}/order-success/${OrderId}`;
    }
    static UserVerifyPayment = this.LocalUrl+"/verify-payment";
    static UserOrderDetails(OrderId) {
        return `${this.LocalUrl}/order-details/${OrderId}`;
    }
    static UserTrackOrder(OrderId) {
        return `${this.LocalUrl}/track-your-order/${OrderId}`;
    }
    static getAllCurrency = this.LocalUrl+"/get-currencies"

    static ChangeCurrency = `${this.LocalUrl}/currencychange`;

}

export default AppURL;
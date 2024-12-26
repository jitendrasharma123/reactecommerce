import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData, validateForm, clearErrors, clearForm } from '../features/checkout/checkoutFormSlice'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  } from "mdb-react-ui-kit";
const CheckoutForm = ()=>{
  const { formData, errors } = useSelector((state) => state.checkoutForm);
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(validateForm());

    if (Object.keys(errors).length === 0) {
      alert('Order placed successfully!');
      console.log('Form Data:', formData);
      dispatch(clearForm());
    }
  };

  console.log('itemscheckout==',items);

    return (
        <>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol>
        <MDBCard>
          <MDBCardBody className="p-4">
            <MDBRow>
              <MDBCol lg="7">
                <MDBTypography tag="h5">
                  <a href="#!" className="text-body">
                    <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                    shopping
                  </a>
                </MDBTypography>

                <hr />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have 4 items in your cart</p>
                  </div>
                  <div>
                    <p>
                      <span className="text-muted">Sort by:</span>
                      <a href="#!" className="text-body">
                        price
                        <MDBIcon fas icon="angle-down mt-1" />
                      </a>
                    </p>
                  </div>
                </div>

                <MDBCard className="mb-3">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                            fluid className="rounded-3" style={{ width: "65px" }}
                            alt="Shopping item" />
                        </div>
                        <div className="ms-3">
                          <MDBTypography tag="h5">
                            Iphone 11 pro
                          </MDBTypography>
                          <p className="small mb-0">256GB, Navy Blue</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: "50px" }}>
                          <MDBTypography tag="h5" className="fw-normal mb-0">
                            2
                          </MDBTypography>
                        </div>
                        <div style={{ width: "80px" }}>
                          <MDBTypography tag="h5" className="mb-0">
                            $900
                          </MDBTypography>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                          <MDBIcon fas icon="trash-alt" />
                        </a>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-3">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                            fluid className="rounded-3" style={{ width: "65px" }}
                            alt="Shopping item" />
                        </div>
                        <div className="ms-3">
                          <MDBTypography tag="h5">
                            Samsung galaxy Note 10
                          </MDBTypography>
                          <p className="small mb-0">256GB, Navy Blue</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: "50px" }}>
                          <MDBTypography tag="h5" className="fw-normal mb-0">
                            2
                          </MDBTypography>
                        </div>
                        <div style={{ width: "80px" }}>
                          <MDBTypography tag="h5" className="mb-0">
                            $900
                          </MDBTypography>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                          <MDBIcon fas icon="trash-alt" />
                        </a>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-3">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                            fluid className="rounded-3" style={{ width: "65px" }}
                            alt="Shopping item" />
                        </div>
                        <div className="ms-3">
                          <MDBTypography tag="h5">
                            Canon EOS M50
                          </MDBTypography>
                          <p className="small mb-0">Onyx Black</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: "50px" }}>
                          <MDBTypography tag="h5" className="fw-normal mb-0">
                            1
                          </MDBTypography>
                        </div>
                        <div style={{ width: "80px" }}>
                          <MDBTypography tag="h5" className="mb-0">
                            $1199
                          </MDBTypography>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                          <MDBIcon fas icon="trash-alt" />
                        </a>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-3">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                            fluid className="rounded-3" style={{ width: "65px" }}
                            alt="Shopping item" />
                        </div>
                        <div className="ms-3">
                          <MDBTypography tag="h5">
                            MacBook Pro
                          </MDBTypography>
                          <p className="small mb-0">1TB, Graphite</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: "50px" }}>
                          <MDBTypography tag="h5" className="fw-normal mb-0">
                            1
                          </MDBTypography>
                        </div>
                        <div style={{ width: "80px" }}>
                          <MDBTypography tag="h5" className="mb-0">
                            $1799
                          </MDBTypography>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                          <MDBIcon fas icon="trash-alt" />
                        </a>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol lg="5">
                <MDBCard className="bg-primary text-white rounded-3">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <MDBTypography tag="h5" className="mb-0">
                        Card details
                      </MDBTypography>
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                    </div>

                    <p className="small">Card type</p>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-visa fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-amex fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                    </a>

                    <form className="mt-4">
                      <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                        placeholder="Cardholder's Name" contrast />

                      <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                      <MDBRow className="mb-4">
                        <MDBCol md="6">
                          <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                            minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                            maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                        </MDBCol>
                      </MDBRow>
                    </form>

                    <hr />

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">$4798.00</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Shipping</p>
                      <p className="mb-2">$20.00</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total(Incl. taxes)</p>
                      <p className="mb-2">$4818.00</p>
                    </div>

                    <MDBBtn color="info" block size="lg">
                      <div className="d-flex justify-content-between">
                        <span>$4818.00</span>
                        <span>
                          Checkout{" "}
                          <i className="fas fa-long-arrow-alt-right ms-2"></i>
                        </span>
                      </div>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          {items ? items.map(item =>(
            <div id="checkout_cart">
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
            </div>
            )):''}
      <h2>Checkout Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}

          />
          
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        
        </div>

        {/* Address */}
        <div>
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          ></textarea>
          
          {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
        
        </div>

        {/* Card Number */}
        <div>
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
          />
          
          {errors.cardNumber && <p style={{ color: 'red' }}>{errors.cardNumber}</p>}
            
        </div>

        {/* Expiration */}
        <div>
          <label>Expiration Date (MM/YY)</label>
          <input
            type="text"
            name="expiration"
            value={formData.expiration}
            onChange={handleInputChange}
            
          />
        
          {errors.expiration && <p style={{ color: 'red' }}>{errors.expiration}</p>}
        
        </div>

        {/* CVV */}
        <div>
          <label>CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
          />
          
          {errors.cvv && <p style={{ color: 'red' }}>{errors.cvv}</p>}
        
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Place Order</button>
        </div>
      </form>
    </div>
        </>
    )
}

export default CheckoutForm
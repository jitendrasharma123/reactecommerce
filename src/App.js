import logo from './logo.svg';
import './App.css';
import { Container,Navbar,Nav, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, Suspense } from 'react';
import Cart from '../src/components/cart';
import { useSelector, useDispatch } from 'react-redux';
const Catspecproduct = React.lazy(() => import('./components/catProducts'));
function App() {
  const [categories, setCategories] = useState([])
  const [categoryproducts, setCategoryproducts] = useState([])
  const [showMinicart, setShowMinicart] = useState(false);
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const getAllCategories = ()=>{
    return fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then((cat)=>setCategories(cat))
    

  }

  useEffect(() => {
    getAllCategories();
  }, [])

  const getCategoryProducts = async (category)=>{
    let catname = category
    const catProducts =  fetch('https://fakestoreapi.com/products/category/'+catname.category)
    .then(res=>res.json())
    .then((catproduct)=>setCategoryproducts(catproduct))
    
    return catProducts
  }

  const getMiniCart = async ()=>{
    
    setShowMinicart(!showMinicart);
    console.log('showMinicart',showMinicart);
  }
  // useEffect(() => {
  //   getCategoryProducts();
  // }, [])
  
  
  return (
    <>

      <div className="App">
        <h1 style={{ color: "green" }}>Demo store</h1>
          <center>
            <Navbar expand="lg"
                    bg="warning">
                <Container>
                    <Navbar.Brand href="/">
                        Home
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            {categories.map((category) => {
              return (
                <>

                  

                    
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => getCategoryProducts({ category })}>{category}</Nav.Link>
                            
                            
                        </Nav>



                </>

              );
            })}
           
                </Container>
            </Navbar>
          </center>
          <div className='cartquantity'>{totalQuantity}</div>
          <img src='cart.png' style={{width:50,float:'right',cursor:'pointer'}} onClick={()=>getMiniCart()} />
          <div class="card" style={{width:200, float:'right'}}>{showMinicart ? <Cart /> :''}</div>
          
          <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Catspecproduct categoryproducts={categoryproducts} />
          </Suspense>

          </Container>

      </div> 
    </>
    
  );
}

export default App;


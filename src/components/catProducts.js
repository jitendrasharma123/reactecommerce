import { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import ReadMore from './readMore';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';



const Catproduct = ({categoryproducts})=>{
    const dispatch = useDispatch();

    const handleAddToCart = (catproduct) => {
        console.log('catproduct===',catproduct);
        dispatch(addToCart(catproduct));
      };
    
    return(
        <>
            <Container className="text-center my-5">
                <Card bg="info" text="white">
                    <Card.Body>
                        <Container>

                            <Row>

                                {categoryproducts.map((catproduct) => {
                                    const description = catproduct.description;
                                    console.log('catproduct', catproduct)
                                    return (<><div class="card" style={{width: '18rem', marginRight: "20px", marginBottom:"20px"}}>
                                    <img class="card-img-top" src={catproduct.image} alt="Card image cap" style={{ width: "200px", height: "150px", objectFit: "cover" }} ></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{catproduct.title}</h5>
                                        <p>Price: ${catproduct.price}</p>
                                        <p class="card-text"><ReadMore text={description} maxLength={100} /></p>
                                        <button class="btn btn-primary" onClick={() => handleAddToCart(catproduct)}>Add to cart</button>
                                    </div>
                                    </div> </>)
                                })}


                            </Row>
                        </Container>

                    </Card.Body>
                </Card>
            </Container>  
            
             
        </>
        
    )
}

export default Catproduct
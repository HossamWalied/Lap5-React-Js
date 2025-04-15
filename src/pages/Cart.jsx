import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, updateQuantity } from '../store/slices/cart';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Your Cart 🛒</h2>
      <hr />
      {cartItems.length === 0 ? (
        <p className="text-muted">Cart Is Empty</p>
      ) : (
        <>
          <Row className="g-3">
            {cartItems.map((item) => (
              <Col md={6} lg={4} key={item.id}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title className="fw-bold">{item.name}</Card.Title>
                    <Card.Text className="text-muted">Price : {item.price} $</Card.Text>
                    <Form.Group className="mb-3" controlId={`qty-${item.id}`}>
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      />
                    </Form.Group>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Delete This Product
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="d-flex justify-content-center mt-4">
            <Button variant="danger" onClick={() => dispatch(clearCart())}>
              Delete All Product
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;





// const Cart = () =>{
//     return(
//         <>
//         <h1>cart component</h1>
//         </>
//     )
// }
// export default Cart;















// src/components/Cart.js


// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, clearCart, updateQuantity } from '../store/slices/cart';

// function Cart() {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   const handleQuantityChange = (id, quantity) => {
//     dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
//   };

//   return (
//     <div>
//       <h2>🛒 سلة المشتريات</h2>
//       {cartItems.length === 0 ? (
//         <p>السلة فاضية</p>
//       ) : (
//         <>
//           <ul>
//             {cartItems.map((item) => (
//               <li key={item.id}>
//                 {item.name} - {item.price} جنيه
//                 <input
//                   type="number"
//                   min="1"
//                   value={item.quantity}
//                   onChange={(e) => handleQuantityChange(item.id, e.target.value)}
//                 />
//                 <button onClick={() => dispatch(removeFromCart(item.id))}>حذف</button>
//               </li>
//             ))}
//           </ul>
//           <button onClick={() => dispatch(clearCart())}>تفريغ السلة</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;





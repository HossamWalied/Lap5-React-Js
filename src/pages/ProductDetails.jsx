import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button, Card, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import StarRating from "../components/StarRating";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <h2 className="text-center mt-5">Product Not Found 😢</h2>;

  return (
    <Container className="my-5">
      <h2>Product Details :</h2>
      <hr />
      <Card className="shadow-lg">
        <Row className="g-0">
          <Col md={5} className="d-flex align-items-center justify-content-center p-3">
            <Image src={product.thumbnail} fluid rounded style={{ maxHeight: "400px" }} />
          </Col>
          <Col md={7}>
            <Card.Body className="p-4">
              <h3 className="fw-bold mb-3">{product.title}</h3>
              <p className="text-muted mb-2">{product.brand}</p>
              <h4 className="text-success mb-3">Price: ${product.price}</h4>
              <Badge bg={product.stock > 0 ? "success" : "danger"} className="mb-3">
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </Badge>
              <div className="mb-2">
                <StarRating rating={product.rating} />
              </div>
              <p className="text-secondary">{product.description}</p>
              <Button variant="dark" size="lg" className="mt-3">
                Add to Cart 🛒
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductDetails;


// import { useParams } from "react-router-dom";
// import { Container, Row, Col, Image, Button } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import axios from "axios";


// const ProductDetails = () => {
//     const [product,setProduct]=useState()
//     const { id } = useParams();
//     useEffect(()=>{
//         axios
//             .get(`https://dummyjson.com/products/${id}`)
//             .then(res =>setProduct(res.data))
//             .catch(err => console.log(err))
//     },[])

//   if (!product) return <h2 className="text-center mt-5">Product Not Found 😢</h2>;

//   return (
//     <Container className="my-5">
//       <h3>Product Details</h3>
//       <hr />
//       <Row>
//         <Col md={6}>
//           <Image src={product.thumbnail} fluid />
//         </Col>
//         <Col md={6}>
//           <h2>{product.name}</h2>
//           <p className="text-muted">Price: ${product.price}</p>
//           <p>⭐ {product.rating} / 5</p>
//           <p>{product.description}</p>
//           <Button variant="dark">Add to Cart 🛒</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ProductDetails;



// const ProductDetails = () =>{
//     return(
//         <>
//         </>
//     )
// }
// export default ProductDetails;


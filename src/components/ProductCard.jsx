import { Card, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/slices/cart";
import StarRating from "./StarRating";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Card className="shadow-sm h-100">

      <Card.Img
        variant="top"
        src={product.thumbnail}
        alt={product.name}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body>
      {product.stock > 0 ? (
        <Badge className="badge text-bg-success">Available</Badge>
      ) : (
        <Badge className="badge text-bg-warning">Not Available</Badge>
      )}
        <Card.Title className="fw-bold">{product.title}</Card.Title>
        <Card.Text className="text-muted mb-1">Price : ${product.price}</Card.Text>
        <div className="mb-1"><StarRating rating={product.rating}/></div>
        <Card.Text style={{ fontSize: "0.9rem", color: "#555" }}>
          {product.description}
        </Card.Text>

        <div className="d-flex gap-2 mt-2">
          <Button variant="dark" className="flex-fill" onClick={()=>dispatch(addToCart({ id:product.id , name: product.title, price: product.price }))}>Add to Cart 🛒</Button>
          <Button
            as={Link}
            to={`/product-details/${product.id}`}
            variant="outline-secondary"
            className="flex-fill"
          >
            View 👁️
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;



// import { Card, Button } from "react-bootstrap";

// const ProductCard = ({ product }) => {
//   return (
//     <Card className="shadow-sm h-100">
//       <Card.Img variant="top" src={product.thumbnail} alt={product.name} style={{ height: "250px", objectFit: "cover" }} />
//       <Card.Body>
//         <Card.Title className="fw-bold">{product.name}</Card.Title>
//         <Card.Text className="text-muted mb-1">Price : ${product.price}</Card.Text>
//         <Card.Text className="mb-1">⭐ {product.rating} / 5</Card.Text>
//         <Card.Text style={{ fontSize: "0.9rem", color: "#555" }}>
//           {product.description}
//         </Card.Text>
//         <Button variant="dark" className="mt-2 w-100">Add to Cart 🛒</Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ProductCard;


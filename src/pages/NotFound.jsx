import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: "100vh" }}>
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-3">Page isn't found</h2>
      <p className="mb-4">Oops! The link you followed may be broken or the page no longer exists</p>
      <Button as={Link} to="/" variant="primary">Back To Home</Button>
    </Container>
  );
};

export default NotFound;

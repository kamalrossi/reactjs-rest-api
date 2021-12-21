import React from "react";
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch,
	Route, Link } from "react-router-dom";
import CreateProduct from
	"./Components/create-product.component";
import EditProduct from
	"./Components/edit-product.component";
import ProductList from
	"./Components/product-list.component";


const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-product"}
				className="nav-link">
				React CRUD
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-product"}
					className="nav-link">
					Create Product
				</Link>
				</Nav>

				<Nav>
				<Link to={"/product-list"}
					className="nav-link">
					Product List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Switch>
				<Route exact path="/"
					component={CreateProduct} />
				<Route path="/create-product"
					component={CreateProduct} />
				<Route path="/edit-product/:id"
					component={EditProduct} />
				<Route path="/product-list"
					component={ProductList} />
				</Switch>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;

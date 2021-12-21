import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
const ProductTableRow = (props) => {
const { _id, name, description } = props.obj;
const deleteProduct = () => {
	axios
	.delete(
"http://localhost:4000/products/delete-product/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Product successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{name}</td>
	<td>{description}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-product/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteProduct}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};
export default ProductTableRow;

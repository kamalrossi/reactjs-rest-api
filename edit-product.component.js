import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";


const EditProduct = (props) => {
const [formValues, setFormValues] = useState({
	name: "",
	description: ""
});
	

const onSubmit = (productObject) => {
	axios
	.put(
		"http://localhost:4000/products/update-product/" +
		props.match.params.id,
		productObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Product successfully updated");
		props.history.push("/product-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Product went wrong"));
};

// Load data from server and reinitialize product form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/products/update-product/"
		+ props.match.params.id
	)
	.then((res) => {
		const { name, description} = res.data;
		setFormValues({ name, description });
	})
	.catch((err) => console.log(err));
}, []);

// Return product form
return (
	<ProductForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Product
	</ProductForm>
);
};


export default EditProduct;

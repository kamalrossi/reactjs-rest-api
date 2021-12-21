import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductForm from "./ProductForm";
const CreateProduct = () => {
const [formValues, setFormValues] =
	useState({ name: '',descrition: '' })
const onSubmit = productObject => {
	axios.post(
'http://localhost:4000/products/create-product',
	productObject)
	.then(res => {
		if (res.status === 200)
		alert('Product successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	

return(
	<ProductForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Product
	</ProductForm>
)
}

export default CreateProduct

import styled from "styled-components";
import ProductItem from "../subcomponents/ProductItem";
// import { popularProducts } from "./../data";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = ({ categories, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [sortProducts, setSortProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          categories
            ? `http://localhost:5000/api/products?category=${categories}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [categories]);

  useEffect(() => {
    categories &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, categories, filters]);

  // console.log(setFilteredProducts());

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <Container>
      {categories
        ? filteredProducts.map((item) => (
            <ProductItem item={item} key={item._id} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <ProductItem item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;

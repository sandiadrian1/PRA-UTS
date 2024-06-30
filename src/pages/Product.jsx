import React, { useState, useEffect } from "react";
import ListProduct from "../components/ListProducts";


const saveProduct = localStorage.getItem("mydata");

const initialProduct = [
  {
    id: 1,
    name: "Pisang",
    color: "Kuning",
    img: "http://myagri.com.my/wp-content/uploads/2015/09/Pisang-Cavendish.jpg",
    harga: 40300
  },
  {
    id: 2,
    name: "Anggur",
    color: "Ungu",
    img: "https://i2.wp.com/resepkoki.id/wp-content/uploads/2016/09/Anggur.jpg?fit=4368%2C2912&ssl=1",
    harga: 4000,
  },
  {
    id: 3,
    name: "naga",
    color: "merah",
    img: "https://www.faunadanflora.com/wp-content/uploads/2016/08/buah-naga-merah.jpg",
    harga: 70000,
  },
];

export default function Products() {
  const [products, setProducts] = useState(
    saveProduct ? JSON.parse(saveProduct) : initialProduct
  );
  const [productName, setProductName] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productHarga, setProductHarga] = useState("");

  const handleAddProduct = () => {
    if (!productName || !productHarga || !productColor || !productImage) return;
    const newProduct = {
      id: products.length + 1,
      name: productName,
      color: productColor,
      img: productImage,
      harga: productHarga,
    };
    setProducts([...products, newProduct]);
    setProductName("");
    setProductColor("");
    setProductImage("");
    setProductHarga("");
  };

  const handleEditProduct = (id, newName, newColor, newImage, newHarga) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, name: newName, color: newColor, img: newImage, harga: newHarga }
        : product
    );
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (id) => {
    const deleteProduct = products.filter((product) => product.id !== id);
    setProducts(deleteProduct);
  };

  const handleDetailProduct = (id) => {
    // Implementasi detail produk
  };

  useEffect(() => {
    localStorage.setItem("mydata", JSON.stringify(products));
  }, [products]);

  return (
    <div className="product-container">
      <div className="product-list">
        {products.map((p) => (
          <ListProduct
            key={p.id}
            product={p}
            handleEditProduct={handleEditProduct}
            handleDeleteProduct={() => handleDeleteProduct(p.id)}
          />
        ))}
      </div>
      <div className="product-form">
        <input
          type="text"
          placeholder="Name"
          className="input-field"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Color"
          className="input-field"
          value={productColor}
          onChange={(e) => setProductColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link Image"
          className="input-field"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Harga"
          className="input-field"
          value={productHarga}
          onChange={(e) => setProductHarga(e.target.value)}
        />
        <button onClick={handleAddProduct} className="add-button">Tambah</button>
      </div>
    </div>
  );
}

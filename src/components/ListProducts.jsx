import React, { useState } from "react";
// import "./ListProduct.css"; // Import file CSS

export default function ListProduct({
  product,
  handleEditProduct,
  handleDeleteProduct,
  handleDetailProduct
}) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(product.name);
  const [color, setColor] = useState(product.color);
  const [img, setImage] = useState(product.img);
  const [harga, setHarga] = useState(product.harga);

  const handleSave = () => {
    handleEditProduct(product.id, name, color, img, harga);
    setEdit(false);
  };

  return (
    <div className="product-container">
      {!edit ? (
        <>
          <div className="product-display">
            <img src={product.img} alt="Gambar" className="product-image" />
            <h1 className="product-name">{product.name}</h1>
            <p className="product-price">{product.harga}</p>
          </div>
          <div className="product-actions">
            <button onClick={() => setEdit(true)} className="btn edit-btn">
              Edit
            </button>
            <button onClick={() => handleDeleteProduct(product.id)} className="btn delete-btn">
              Delete
            </button>
            <button onClick={() => handleDetailProduct(product.id)} className="btn detail-btn">
              Detail
            </button>
          </div>
        </>
      ) : (
        <div className="edit-form">
          <input
            placeholder="Input Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <input
            placeholder="Input Color"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="input-field"
          />
          <input
            placeholder="Input link Image"
            type="text"
            value={img}
            onChange={(e) => setImage(e.target.value)}
            className="input-field"
          />
          <input
            placeholder="Input Harga"
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="input-field"
          />
          <button onClick={handleSave} className="btn save-btn">
            Save
          </button>
        </div>
      )}
    </div>
  );
}

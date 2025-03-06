import { createRoot } from "react-dom/client";
import "./style.css";

function Card(props) {
  const props = {key, title, image, brand, price}
  return (
    <div className="card" key={key}>
      <img src={image} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>$ {price}</b>
        </p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return Card({
            key : product.id,
            title : product.title,
            image : product.thumbnail,
            brand : product.brand,
            price : product.price
          });
        })}
      </div>
    );
  });

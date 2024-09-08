import "./bottle.css";
const Bottle = ({ bottle, handleToCart }) => {
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <h3>bottle :{name}</h3>
      <img src={img}></img>
      <p>price:$ {price}</p>
      <button onClick={() => handleToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;

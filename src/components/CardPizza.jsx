import { formatCLP } from "../utils/format";
const CardPizza = ({ name, price, ingredients, img }) => (
  <div className="card h-100 shadow-sm">
    <img src={img} className="card-img-top" alt={name} />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{name}</h5>
      <p className="card-text mb-1"><strong>Ingredientes:</strong></p>
      <ul className="list-inline small text-muted">
        {ingredients.map((ing) => <li key={ing} className="list-inline-item">🍕 {ing}</li>)}
      </ul>
      <p className="mt-auto fw-semibold">Precio: {formatCLP(price)}</p>
      <div className="d-flex gap-2">
        <button className="btn btn-outline-secondary btn-sm">Ver más 👀</button>
        <button className="btn btn-dark btn-sm">Añadir ➕</button>
      </div>
    </div>
  </div>
);
export default CardPizza;
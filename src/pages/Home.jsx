import CardPizza from "../components/CardPizza";
const Home = () => (
  <section className="container my-4">
    <div className="row g-4">
      <div className="col-md-4">
        <CardPizza name="Napolitana" price={5950} ingredients={["mozzarella","tomates","jamón","orégano"]} img={"/img/napolitana.jpg"} />
      </div>
      <div className="col-md-4">
        <CardPizza name="Española" price={6950} ingredients={["mozzarella","gorgonzola","parmesano","provolone"]} img={"/img/espanola.jpg"} />
      </div>
      <div className="col-md-4">
        <CardPizza name="Pepperoni" price={6950} ingredients={["mozzarella","pepperoni","orégano"]} img={"/img/pepperoni.jpg"} />
      </div>
    </div>
  </section>
);
export default Home;
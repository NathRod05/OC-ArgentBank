import Banner from "../../components/banner/Banner";
import image from "../../assets/bank-tree.jpeg";
import Card from "../../components/card/Card";
import "./home.css";
import data from "../../../data.json";

function Home() {
  return (
    <main>
      <div className="hero">
        <Banner
          image={image}
          description="A tree growing from coins"
          className="img"
        />
        <section className="hero-content">
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <div className="features">
        {data.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </main>
  );
}
export default Home;

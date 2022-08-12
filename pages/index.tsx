import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <header>
        <h1>
          Rocket<span>Coffee</span>
        </h1>
        <p>Aberto todos os dias. 8h-21h</p>
      </header>

      <section>
        <h2>Brunch</h2>
        <ul>
          <li>
            <div className="details">
              <h3>Waffle Doce</h3>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                atque.
              </p>
            </div>
            <strong className="price">R$37.70</strong>
          </li>

          <li>
            <div className="details">
              <h3>Maça Doce</h3>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                atque.
              </p>
            </div>
            <strong className="price">R$37.70</strong>
          </li>
        </ul>
      </section>

      <section>
        <h2>Bebidas</h2>
        <ul>
          <li>
            <div className="details">
              <h3>Vinho</h3>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                atque.
              </p>
            </div>
            <strong className="price">R$37.70</strong>
          </li>

          <li>
            <div className="details">
              <h3>Água com gás</h3>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                atque.
              </p>
            </div>
            <strong className="price">R$37.70</strong>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;

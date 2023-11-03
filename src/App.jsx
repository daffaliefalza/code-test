import { useState, useEffect } from "react";
import axios from "axios";
import heroImage from "./assets/hero-image.png";

const url = "https://course-api.com/react-store-products";

function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header className="bg-blue-800 text-white py-3">
        <div className="container flex flex-col justify-between items-center md:flex-row">
          <a href="#" className="font-bold text-[24px]">
            Clasika
          </a>
          <nav>
            <ul className="flex gap-5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="hero">
        <div className="container">
          <div className="grid grid-cols-1 place-items-center h-screen md:grid-cols-2">
            <div id="hero-left">
              <h1 className="text-[#1E2737] text-[60px] font-bold">
                An aesthetic room is given harmony
              </h1>
              <p className="text-[#BCC1CA] my-5">
                Change your view to realize a neat and aesthetic corner of the
                house and amaze everyone, especially your nuclear family. Make
                every moment of your home equipment a valuable item
              </p>
              <button className="bg-[#252424] text-white py-2 px-5 rounded-lg">
                Explore
              </button>
            </div>
            <img src={heroImage} alt="hero banner" />
          </div>
        </div>
      </section>
      <section id="about" className="bg-[#F2F5F8] ">
        <div className="container py-[3rem]">
          <h2 className="text-[38px] text-[#1E2737] mb-3">About</h2>
          <p className="text-[#53555A] text-[20px]">
            Clasika has been established since 2005 until now.We have handled
            more than 500 thousand customers who want their home equipment and
            furniture to be beautiful. With sufficient experience we have won 2
            world awards from world awards. We have also wontrust in various
            countries around the world
          </p>
        </div>
      </section>
      <section id="products">
        <div className="container">
          <h2 className="text-[38px] text-[#1E2737]">Products</h2>
          <div className=" grid grid-cols-1 gap-[20px] md:grid-cols-3">
            {products.map((product) => {
              const { id, image, price, name } = product;
              return (
                <div key={id} className="border">
                  <img
                    src={image}
                    alt=""
                    className="object-cover w-screen h-[300px]"
                  />
                  <h2>{name}</h2>
                  <p>{price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <footer className="bg-blue-900 py-3">
        <p className="text-center text-white">Clasika - All Rights Reserved</p>
      </footer>
    </>
  );
}
export default App;

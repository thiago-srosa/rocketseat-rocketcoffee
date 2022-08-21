import type { NextPage } from "next";
import Image from 'next/image'
import { useState, useEffect } from "react";

import logo from "../assets/rocket-coffee-logo.png"

type Sections = "Brunch" | "Bebidas";

interface menuItem {
  sectionName: Sections;
  productName: string;
  productDescription: string;
  price: number;
}

const Home: NextPage = () => {
  const [sections, setSections] = useState<Sections[]>([]);
  const [menuItens, setMenuItens] = useState<menuItem[]>([
    {
      sectionName: "Brunch",
      productName: "Waffle Doce",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earumatque.",
      price: 50,
    },
    {
      sectionName: "Bebidas",
      productName: "Maça Doce",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earumatque.",
      price: 37.7,
    },
    {
      sectionName: "Bebidas",
      productName: "Maça Doce",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earumatque.",
      price: 37.7,
    },
    {
      sectionName: "Bebidas",
      productName: "Maça Doce",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earumatque.",
      price: 37.7,
    },
  ]);

  const handleSections = menuItens
    .map((menuItem) => {
      return menuItem.sectionName;
    })
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  useEffect(() => {
    setSections(handleSections);
  }, []);

  return (
    <>
      <header>
        <div>
          <Image
            src={logo}
            alt="Picture of the author"
            width={47}
            height={50}
            style={{paddingRight: 10}}
          />
          <h1>
            Rocket<span>Coffee</span>
          </h1>
        </div>
        <p>Aberto todos os dias. 8h-21h</p>
      </header>

      {sections.map((section, index) => (
        <section key={index}>
          <h2>{section}</h2>
          <ul>
            {menuItens.map((menuItem, index) =>
              menuItem.sectionName == section ? (
                <li key={index}>
                  <div className="details">
                    <h3>Waffle Doce</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Earum atque.
                    </p>
                  </div>
                  <strong className="price">R$37.70</strong>
                </li>
              ) : null
            )}
          </ul>
        </section>
      ))}
    </>
  );
};

export default Home;

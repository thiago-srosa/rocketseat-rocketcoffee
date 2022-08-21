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

const Home: NextPage = (): JSX.Element => {
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

  const handleSections: Sections[] = menuItens
    .map((menuItem: menuItem): Sections => {
      return menuItem.sectionName;
    })
    .filter((value: Sections, index: number, self: Sections[]): boolean => {
      return self.indexOf(value) === index;
    });

  useEffect((): void => {
    setSections(handleSections);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <div>
          <span style={{ paddingRight: 10, paddingTop: 10 }}>
            <Image
              src={logo}
              alt="Picture of the author"
              width={42}
              height={50}
            />
          </span>
          <h1>
            Rocket<span>Coffee</span>
          </h1>
        </div>
        <p>Aberto todos os dias. 8h-21h</p>
      </header>

      {sections.map((section: Sections, index: number): JSX.Element => (
        <section key={index}>
          <h2>{section}</h2>
          <ul>
            {menuItens.map((menuItem: menuItem, index: number): JSX.Element | null =>
              menuItem.sectionName == section ? (
                <li key={index}>
                  <div className="details">
                    <h3>{menuItem.productName}</h3>
                    <p className="description">
                      {menuItem.productDescription}
                    </p>
                  </div>
                  <strong className="price">R$ {menuItem.price.toFixed(2)}</strong>
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

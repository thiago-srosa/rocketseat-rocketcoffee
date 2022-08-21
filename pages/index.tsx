import type { NextPage } from "next";
import Image from 'next/image'
import { useState, useEffect } from "react";

import logo from "../assets/rocket-coffee-logo.png"

type Sections = "Brunch" | "Drinks";

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
      productName: "Cake",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earumatque.",
      price: 10,
    },
    {
      sectionName: "Drinks",
      productName: "Hot Chocolate",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earumatque.",
      price: 10.99,
    },
    {
      sectionName: "Drinks",
      productName: "Tea",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earumatque.",
      price: 5.99,
    },
    {
      sectionName: "Brunch",
      productName: "Donut",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earumatque.",
      price: 5.99,
    },
    {
      sectionName: "Brunch",
      productName: "Pudding",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earumatque.",
      price: 12.99,
    },
    {
      sectionName: "Drinks",
      productName: "Smoothie",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earumatque.",
      price: 12.99,
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
        <p>Open all days</p>
        <p>8 am to 9 pm</p>
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

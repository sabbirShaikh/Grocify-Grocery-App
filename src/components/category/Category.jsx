import React from "react";
import Headings from "../headings/Headings";
import fruitCat from "../../assets/fruits-and-veggies.png";
import dairyCat from "../../assets/dairy-and-eggs.png";
import seaFoodCat from "../../assets/meat-and-seafood.png";
import Button from "../button/Button";

function Category() {
  const renderCards = categories.map((cat) => {
    return (
      <div className="flex-1 basis-[250px]" key={cat.id}>
        {/* card image */}
        <div className="w-full min-h-[30vh] relative -mb-10">
          <img src={cat.image} className="absolute bottom-0" />
        </div>

        {/* card content */}
        <div className="bg-zinc-100 pt-15 p-9 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{cat.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{cat.description}</p>
          <Button content="See All" />
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Headings highlight="Shop" heading="By Category" />

        {/* category cards */}
        <div className="flex flex-wrap gap-20 md:mt-15">{renderCards}</div>
      </div>
    </section>
  );
}

export default Category;

const categories = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: fruitCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "High-quality dairy products and farm-fresh eggs. From creamy milk to artisanal cheeses, find everything you need for your kitchen.",
    image: dairyCat,
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description:
      "Premium cuts of meat and fresh seafood delivered to your door. Choose from a variety of options.",
    image: seaFoodCat,
  },
];

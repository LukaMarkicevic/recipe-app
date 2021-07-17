import React from "react";
import Ingridient from "./Ingridient";

interface RecipeProps {
  name: string;
  ingredients: [];
  image: string;
}

const Recipe: React.FC<RecipeProps> = ({ name, ingredients, image }) => {
  return (
    <div className="filter drop-shadow-md md:drop-shadow-xl bg-white p-7 m-10 w-96">
      <img
        className="mx-auto object-cover h-50 w-50"
        src={image}
        alt="PICTURE MISSING"
      />
      <h1 className="text-lg font-bold text-center">{name}</h1>
      <p>
        {ingredients.map((ingridient: any) => (
          <Ingridient
            text={ingridient.text}
            key={Math.floor(Math.random() * 100000)}
          />
        ))}
      </p>
    </div>
  );
};

export default Recipe;

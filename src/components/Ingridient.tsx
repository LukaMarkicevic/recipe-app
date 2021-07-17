import React from "react";

interface IngridientProps {
  key: number;
  text: string;
  weight?: number;
  image?: string;
}

const Ingridient: React.FC<IngridientProps> = ({ text, weight, image }) => {
  return <p className="font-normal">{text}</p>;
};

export default Ingridient;

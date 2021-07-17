import React from "react";

interface HeaderProps {
  text: string;
  changeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeSearch: (e: any) => void;
}

const Header: React.FC<HeaderProps> = ({ text, changeText, changeSearch }) => {
  return (
    <div className="flex shadow-sm p-4 text-center justify-between">
      <div className="flex">
        <a href="https://github.com/LukaMarkicevic/recipe-app">
          <img
            className="w-5 h-5 mt-1"
            src={`${process.env.PUBLIC_URL}/assets/logo/github.png`}
            alt="PICTURE MISSING"
          />
        </a>
        <label className="ml-2">recipe-app</label>
      </div>
      <form onSubmit={changeSearch}>
        <input
          className="outline-none filter drop-shadow-md h-6"
          type="text"
          value={text}
          onChange={changeText}
        />
        <button className="font-semibold ml-2">SEARCH</button>
      </form>
      <div className="flex">
        <label className="mr-2">Luka Markićević</label>
        <a href="https://www.linkedin.com/in/lukamarkicevic1/">
          <img
            className="w-5 h-5 mt-1"
            src={`${process.env.PUBLIC_URL}/assets/logo/linkedin.png`}
            alt="PICTURE MISSING"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;

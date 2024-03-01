import React from "react";

const Header = () => {
  return (
    <div className="font-mono text-left ml-10 mb-5  selection:bg-yellow-900">
      Welcome to my portfolio! I am Manthan Kasle  <br />
      Type <span className="text-teal-400">help</span> to get a list of
      available commands. <br />
      You can use <span className="text-teal-400">Tab</span> key to autocomplete
      commands!!
    </div>
  );
};

export default Header;

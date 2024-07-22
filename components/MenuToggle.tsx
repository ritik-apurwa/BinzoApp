import React from "react";

interface MenuToggleProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuToggle = ({ active, setActive }: MenuToggleProps) => {
  return (
    <button
      onClick={() => setActive(!active)}
      className="lg:hidden flex flex-col items-center"
    >
      <div className={`w-6 h-1 bg-white mb-1 transition-transform ${active ? "transform rotate-45 translate-y-2" : ""}`}></div>
      <div className={`w-6 h-1 bg-white mb-1 transition-opacity ${active ? "opacity-0" : "opacity-100"}`}></div>
      <div className={`w-6 h-1 bg-white transition-transform ${active ? "transform -rotate-45 -translate-y-2" : ""}`}></div>
    </button>
  );
};

export default MenuToggle;

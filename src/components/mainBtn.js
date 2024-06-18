import React from "react";

const MainBtn = ({ label }) => (
  <>
    <button className="rounded-lg bg-blue px-6 py-3 font-primary font-bold uppercase text-white shadow-md shadow-blue/20 transition-all hover:shadow-lg hover:shadow-blue/40 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      {label}
    </button>
  </>
);

export default MainBtn;

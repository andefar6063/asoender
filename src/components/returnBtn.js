import React from "react";
import { NavLink } from "react-router-dom";

const ReturnBtn = ({ label }) => (
  <>
    <NavLink to={`/${label}`} exact>
      <button className="fixed bottom-4 left-4 flex items-center rounded-lg bg-blue px-6 py-3 font-primary font-bold uppercase text-white shadow-md shadow-blue/20 transition-all hover:shadow-lg hover:shadow-blue/40 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </NavLink>
  </>
);

export default ReturnBtn;

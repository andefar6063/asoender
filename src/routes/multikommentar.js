import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchKommentarer } from "../api/supabaseFetch";
import { NavLink } from "react-router-dom";

const sectionClass =
  "min-h-screen flex items-center flex-col justify-center space-y-5 py-10 border-b-2 border-blue";

const MultiKommentar = () => {
  const {
    isLoading,
    data: kommentarList,
    error,
  } = useQuery({
    queryKey: ["kommentarer"],
    queryFn: fetchKommentarer,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mx-auto w-11/12 font-primary text-grey">
      <section className={sectionClass}>
        <h1 className="mb-5 text-large font-bold text-black">Kommentarer</h1>
        <div className="w-full space-y-5 md:w-3/4 lg:w-2/3">
          {kommentarList.map((kommentar, index) => (
            <NavLink to={`/kommentar/${kommentar.id}`} key={kommentar.id}>
              <div
                className={`rounded-lg border bg-white p-5 shadow-md ${index !== kommentarList.length - 1 ? "mb-5" : ""}`}
              >
                <h2 className="mb-2.5 text-medium font-bold text-black">
                  {kommentar.heading}
                </h2>
                <p className="text-small">
                  {kommentar.text.substring(0, 100)}...
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MultiKommentar;

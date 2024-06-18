import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchKommentarer } from "../api/supabaseFetch";
import ReturnBtn from "../components/returnBtn";

const sectionClass =
  "min-h-screen flex items-center flex-col justify-center space-y-5 py-10 border-b-2 border-blue";

const SingleKommentar = () => {
  const { id } = useParams();
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

  const kommentar = kommentarList.find((k) => k.id === parseInt(id));

  if (!kommentar) return <div>Kommentar not found</div>;

  return (
    <div className="mx-auto w-11/12 font-primary text-grey">
      <section className={sectionClass}>
        <ReturnBtn label="kommentarer" />
        <div className="w-full space-y-5 md:w-3/4 lg:w-2/3">
          <h2 className="mb-5 text-large font-bold text-black">
            {kommentar.heading}
          </h2>
          <p className="text-small">{kommentar.text}</p>
        </div>
      </section>
    </div>
  );
};

export default SingleKommentar;

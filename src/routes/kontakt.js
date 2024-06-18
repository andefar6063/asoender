import React from "react";

export default function Kontakt() {
  const sectionClass =
    "min-h-screen flex items-center flex-col justify-center space-y-5 py-10 border-b-2 border-blue";

  return (
    <div className="mx-auto w-11/12 font-primary text-grey">
      <section className={`${sectionClass} min-h-[60vh]`}>
        <h1 className="mb-2.5 text-large font-bold text-black md:text-xlarge">
          Kontakt
        </h1>
        <div className="w-full space-y-10 md:w-3/4 lg:w-2/3">
          <div className="mb-10">
            <p className="mb-2.5 text-small">
              På det nuværrende tidspunkt er de eneste muligheder for at
              kontakte mig, via de givende muligheder herunder.
            </p>
            <ul className="list-inside list-disc">
              <li className="text-small">E-mail: antonjimmyheino@gmail.com</li>
              <li className="text-small">Tlf.: 20410319</li>
              <li className="text-small">Twitter (X): @andefar0001</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

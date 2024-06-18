import React from "react";
import { NavLink } from "react-router-dom";
import MainBtn from "../components/mainBtn";
import profilePicture from "../images/headshot.png";

export default function Root() {
  const sectionClass =
    "min-h-screen flex items-center flex-col justify-center space-y-5 py-10 border-b-2 border-blue";

  return (
    <div className="mx-auto w-11/12 font-primary text-grey">
      <section className={`${sectionClass}`}>
        <h1 className="text-header font-bold text-black">Velkommen</h1>
        <p className="text-center text-medium">
          Her er min lille hjemmeside, hvor du få et indblik i hvad jeg har af
          interesser og færdigheder
        </p>
        <NavLink to="/kontakt" exact>
          <MainBtn label="kontakt mig" />
        </NavLink>
      </section>

      <section className={`${sectionClass} min-h-[60vh]`}>
        <img
          src={profilePicture}
          alt="Profile"
          className="h-36 w-36 rounded-full object-cover"
        />
        <div className="mt-5 flex flex-col justify-center md:mt-0 md:w-2/3">
          <h1 className="mb-2.5 text-large font-bold text-black md:text-xlarge">
            Om mig
          </h1>
          <p className="text-small md:text-medium">
            <span className="font-bold">Hejsa</span> mit navn er Anton. Jeg er
            en 18-årig knægt, som intresserer sig for programmering og
            iværksætteri. Siden 2020 har jeg programmeret on and off, men har
            siden start 2024 sat mig et mål for at programmere dagligt. Nedenfor
            ses nogle af mine projekter, som hen over tiden har ført mig til den
            jeg er i dag.
          </p>
        </div>
      </section>

      <section className={`${sectionClass}`}>
        <h1 className="mb-2.5 text-large font-bold text-black md:text-xlarge">
          Tidligere projekter
        </h1>
        <div className="w-full space-y-10 md:w-3/4 lg:w-2/3">
          <div className="mb-10">
            <h3 className="mb-2.5 text-medium font-bold text-black">
              Eternity AIO
            </h3>
            <p className="mb-2.5 text-small">
              Eternity AIO var mit første programmeringsprojekt. Kort forklaret
              var det en bot, der brugte requests til at købe eksklusive sko ved
              lancering. Projektet blev lukket kort før min rejse til USA, men
              det blev brugt af 50+ personer til at forbedre deres chancer for
              at få fat i skoene.
            </p>
            <ul className="list-inside list-disc">
              <li className="text-small">Python</li>
            </ul>
          </div>
          <div className="mb-10">
            <h3 className="mb-2.5 text-medium font-bold text-black">
              Personlig AI Træner
            </h3>
            <p className="mb-2.5 text-small">
              Personlig AI Træner var min første "full stack" hjemmeside.
              Hjemmesiden gjorde brug af kunstig intelligens til at lave
              personlige træningsprogrammer, og det skabte desuden disse
              programmer med et strejf af David Goggins tankegang.
            </p>
            <ul className="list-inside list-disc">
              <li className="text-small">Node.js</li>
              <li className="text-small">HTML & CSS</li>
              <li className="text-small">Vanilla JavaScript</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

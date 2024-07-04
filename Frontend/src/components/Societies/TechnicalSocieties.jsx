import Robo from "./images/ROBO.jpeg";
import BDCOE from "./images/BDCOE.jpeg";
import Conatus from "./images/Conatus.jpeg";
import CSI from "./images/CSI.jpeg";
import ISTE from "./images/ISTE.jpeg";
import Nirmaan from "./images/Nirmaan.jpeg";
import OSS from "./images/OSS.jpeg";
import Phoenix from "./images/Phonix.jpeg";
import SAE from "./images/sae.jpeg";
import Samveg from "./images/SAMVEG.jpeg";
import SI from "./images/SI.jpeg";
import Speed from "./images/speed.jpeg";
import GDSC from "./images/GDSC.jpeg";
import BRL from "./images/BRL.jpeg";
import OORJA from "./images/OORJA.jpeg";
import { Card } from "../index";

function TechnicalSocieties() {
  return (

    <div className="grid justify-center w-full grid-cols-2 px-5 bg-transparent gap-x-10 md:gap-x-8 md:px-10">
      <Card
        Label="Software Incubator"
        Description="
          Research & development center of AKGEC, 
          SDC-SI, 
          Love▪️Peace▪️Code"
        ImgLabel={SI}
        Path="/Societies/TechnicalSocieties/SI"
        className="h-48 md:h-auto"
      />

      <Card
        Label="Blockchain Research Lab"
        Description="
          BRL works for development of innovative solution using Blockchain & supportive technology.
          Registration link for the event"
        ImgLabel={BRL}
        Path="/Societies/TechnicalSocieties/BRL"
        className="h-48 md:h-auto"
      />

      <Card
        Label="Big Data Centre of Excellence
          "
        Description="
          Research and Development Centre of AKGEC"
        ImgLabel={BDCOE}
        Path="/Societies/TechnicalSocieties/BDCOE"
        className="h-48 md:h-auto"
      />

      <Card
        Label="Google Developer Student Clubs"
        Description="
          GDSC AKGEC is a community that fosters the spirit of learning and a student focused development program by Google Developers."
        ImgLabel={GDSC}
        Path="/Societies/TechnicalSocieties/GDSC"
        className="h-48 md:h-auto"
      />

      <Card
        Label="Computer Society Of India"
        Description="
          Technical Society Of AKGEC"
        ImgLabel={CSI}
        Path="/Societies/TechnicalSocieties/CSI"
        className="h-48 md:h-auto"
      />

      <Card
        Label="Team OSS"
        Description="
          Open Source Software Research and Development Centre, CSE Department AKGEC"
        ImgLabel={OSS}
        Path="/Societies/TechnicalSocieties/OSS"
        className="h-48 md:h-auto"
      />

      <Card
        Label="Team Conatus"
        Description="
          Technical Society of CS/IT Department of AKGEC."
        ImgLabel={Conatus}
        Path="/Societies/TechnicalSocieties/Conatus"
        className="h-48 md:h-auto"
      />

      <Card
        Label="OORJA"
        Description="
          Departmental society of AKGEC Electrical and Electronics Engineering."
        ImgLabel={OORJA}
        Path="/Societies/TechnicalSocieties/OORJA"
        className="h-48 md:h-auto"
      />

      <Card
        Label="SAE"
        Description="
          AKGECREDESIGN, RECREATE, RENOVATE."
        ImgLabel={SAE}
        Path="/Societies/TechnicalSocieties/SAE"
        className="h-48 md:h-auto"
      />

      <Card
        Label="Speed"
        Description="
          Student Platform for Engineering Excellence Development
          AKGEC-CORE."
        ImgLabel={Speed}
        Path="/Societies/TechnicalSocieties/Speed"
        className="h-48 md:h-auto"
      />

      <Card
        Label="PHOENIX"
        Description="
          The society of ECE
          ||Without change there is no Innovation, Creativity or Incentivefor Improvement.||."
        ImgLabel={Phoenix}
        Path="/Societies/TechnicalSocieties/Phoenix"
        className="h-48 md:h-auto"
      />

      <Card
        Label="Robotics Club"
        Description="
          Robocon • Mitsubishi Cup • Ni-Yantra • WRO •
          Techtrishna • Technoxian • IISF • SIH
          ."
        ImgLabel={Robo}
        Path="/Societies/TechnicalSocieties/Robo"
        className="h-48 md:h-auto"
      />

      <Card
        Label="ISTE"
        Description="
          INDIAN SOCIETY FOR TECHNICAL EDUCATION
          ."
        ImgLabel={ISTE}
        Path="/Societies/TechnicalSocieties/ISTE"
        className="h-48 md:h-auto"
      />
      <Card
        Label="Nirmaan"
        Description="
          The Technical Society of Civil Engineering
        AKGEC."
        ImgLabel={Nirmaan}
        Path="/Societies/TechnicalSocieties/Nirmaan"
        className="h-48 md:h-auto"
      />
      <Card
        Label="Samveg"
        Description="
          SOCIETY OF MECHANICAL DEPARTMENT
          DOMAIN:-TECHNO+MANAGERIAL
          Estd:-4 Feb 2018."
        ImgLabel={Samveg}
        Path="/Societies/TechnicalSocieties/Samveg"
        className="h-48 md:h-auto"
      />
    </div>

  );
}

export default TechnicalSocieties;

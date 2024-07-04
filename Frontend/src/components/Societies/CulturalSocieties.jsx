import Footprints from "./images/Footprints.jpg";
import Taal from "./images/Taal.jpg";
import Renaissance from "./images/Renaissance.jpg";
import Euphony from "./images/Euphony.jpeg";
import Goonj from "./images/Goonj.jpg";
import Horizon from "./images/Horizon.jpeg";
import Vecell from "./images/Vecell.jpeg";
import Verve from "./images/Verve.jpeg"
import { Card } from "../index";

function CulturalSocieties() {
  return (

    <div className="grid justify-center w-full grid-cols-2 px-5 bg-transparent gap-x-10 md:gap-x-8 md:px-10">
      <Card
        Label="TAAL"
        Description="Dance Society of AKGEC"
        ImgLabel={Taal}
        Path="/Societies/CulturalSocieties/Taal"
      />

      <Card
        Label="FOOTPRINTS"
        Description="A place where raw creativity takes a giant leap and leaves its
          impressions across the horizons."
        ImgLabel={Footprints}
        Path="/Societies/CulturalSocieties/Footprints"
      />

      <Card
        Label="RENAISSANCE"
        Description='Ethical cum Socio-Cultural Society - AKGEC
          "Education is the only lane to gleam up and enlighten the
            world"'
        ImgLabel={Renaissance}
        Path="/Societies/CulturalSocieties/Renaissance"
      />

      <Card
        Label="EUPHONY"
        Description="Spreading Happiness with Music!"
        ImgLabel={Euphony}
        Path="/Societies/CulturalSocieties/Euphony"
      />

      <Card
        Label="GOONJ"
        Description="Dramatics Society | AKGEC - Ghaziabad | Theatre Enthusiasts
          Theatre 🎥 | Nukkad 🎭| Standup 🎙| Poetry ✒️ | Mimicry
          🎤|Designing💻"
        ImgLabel={Goonj}
        Path="/Societies/CulturalSocieties/Goonj"
      />

      <Card
        Label="HORIZON"
        Description="Incubates Leaders, Orators, Writers and Multi-Dimensional
          Individuals. Fill out the form below to register for our
          recruitment drive!"
        ImgLabel={Horizon}
        Path="/Societies/CulturalSocieties/Horizon"
      />

      <Card
        Label="VE-CELL"
        Description="Existence is Co-existence."
        ImgLabel={Vecell}
        Path="/Societies/CulturalSocieties/Vecell"
      />

      <Card
        Label="V-VERVE
          "
        Description='𝓣𝓮𝓪𝓶 𝓥-𝓥𝓮𝓻𝓿𝓮 - "We speak the language of fashion."'
        ImgLabel={Verve}
        Path="/Societies/CulturalSocieties/Verve"
      />
    </div>
  );
}

export default CulturalSocieties;

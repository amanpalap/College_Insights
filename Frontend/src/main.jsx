import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  About,
  Body,
  Login,
  SinUp,
  CulturalSocieties,
  TechnicalSocieties,
  Exam,
  SocietiesHome,
  Sports,
  Goonj,
  Taal,
  Euphony,
  Renaissance,
  Horizon,
  Footprints,
  Verve,
  Vecell,
  BDCOE,
  BRL,
  Conatus,
  CSI,
  GDSC,
  ISTE,
  Nirmaan,
  OORJA,
  OSS,
  Phoenix,
  Robo,
  SAE,
  Samveg,
  SI,
  Speed,
  BB,
  CC,
  FC,
  TT,
  BAD,
  KAB,
  KHO,
  VB,
  Athelete,
  Iyear,
  IIyear,
  IIIyear,
  IVyear
} from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "SignUp",
        element: <SinUp />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Societies",
        element: <SocietiesHome />,
      },
      {
        path: "Societies/CulturalSocieties",
        element: <CulturalSocieties />,
      },
      {
        path: "Societies/CulturalSocieties/Taal",
        element: <Taal />,
      },
      {
        path: "Societies/CulturalSocieties/Goonj",
        element: <Goonj />,
      },
      {
        path: "Societies/CulturalSocieties/Verve",
        element: <Verve />,
      },
      {
        path: "Societies/CulturalSocieties/Horizon",
        element: <Horizon />,
      },
      {
        path: "Societies/CulturalSocieties/Footprints",
        element: <Footprints />,
      },
      {
        path: "Societies/CulturalSocieties/Renaissance",
        element: <Renaissance />,
      },
      {
        path: "Societies/CulturalSocieties/Vecell",
        element: <Vecell />,
      },
      {
        path: "Societies/CulturalSocieties/Euphony",
        element: <Euphony />,
      },
      {
        path: "Societies/TechnicalSocieties",
        element: <TechnicalSocieties />,
      },
      {
        path: "Societies/TechnicalSocieties/BDCOE",
        element: <BDCOE />,
      },
      {
        path: "Societies/TechnicalSocieties/BRL",
        element: <BRL />,
      },
      {
        path: "Societies/TechnicalSocieties/Conatus",
        element: <Conatus />,
      },
      {
        path: "Societies/TechnicalSocieties/CSI",
        element: <CSI />,
      },
      {
        path: "Societies/TechnicalSocieties/GDSC",
        element: <GDSC />,
      },
      {
        path: "Societies/TechnicalSocieties/ISTE",
        element: <ISTE/>,
      },
      {
        path: "Societies/TechnicalSocieties/Nirmaan",
        element: <Nirmaan />,
      },
      {
        path: "Societies/TechnicalSocieties/OSS",
        element: <OSS/>,
      },
      {
        path: "Societies/TechnicalSocieties/OORJA",
        element: <OORJA />,
      },
      {
        path: "Societies/TechnicalSocieties/Phoenix",
        element: <Phoenix />,
      },
      {
        path: "Societies/TechnicalSocieties/Robo",
        element: <Robo/>,
      },
      {
        path: "Societies/TechnicalSocieties/SAE",
        element: <SAE />,
      },
      {
        path: "Societies/TechnicalSocieties/Samveg",
        element: <Samveg/>,
      },
      {
        path: "Societies/TechnicalSocieties/SI",
        element: <SI/>,
      },
      {
        path: "Societies/TechnicalSocieties/Speed",
        element: <Speed />,
      },
      {
        path: "Sports",
        element: <Sports />,
      },
      {
        path: "BB",
        element: <BB />,
      },
      {
        path: "CC",
        element: <CC />,
      },
      {
        path: "VB",
        element: <VB/>,
      },
      {
        path: "BAD",
        element: <BAD />,
      },
      {
        path: "TT",
        element: <TT/>,
      },
      {
        path: "KHO",
        element: <KHO/>,
      },
      {
        path: "KAB",
        element: <KAB />,
      },
      {
        path: "FC",
        element: <FC />,
      },
      {
        path: "Athelete",
        element: <Athelete />,
      },
      {
        path: "Exam",
        element: <Exam />,
      },
      {
        path: "2year",
        element: <IIyear />,
      },
      {
        path: "3year",
        element: <IIIyear />,
      },
      {
        path: "4year",
        element: <IVyear />,
      },
      {
        path: "1year",
        element: <Iyear />,
      },
      {
        path: "About-Us",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

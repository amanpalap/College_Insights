import Athelete from "./Images/Atheletics.jpeg";
import BAD from "./Images/BAD.jpeg";
import BB from "./Images/BAL.jpeg";
import CC from "./Images/CC.jpeg";
import FC from "./Images/FC.jpeg";
import KAB from "./Images/KB.jpeg";
import KHO from "./Images/KHO.jpeg";
import TT from "./Images/TT.jpeg";
import VB from "./Images/VB.jpeg";
import { Card } from "../index"


function Sports() {
  return (

    <div className="grid justify-center w-full grid-cols-2 px-5 bg-transparent gap-x-10 md:gap-x-8 md:px-10">

      <Card
        Label="BasketBall Team"
        Description="Official page for the Akgec Basketball team 🏀"
        ImgLabel={BB}
        Path="/BB">
      </Card>

      <Card
        Label="Football Club"
        Description="Hala AKG_FC!! ⚽"
        ImgLabel={FC}
        Path="/FC">
      </Card>

      <Card
        Label="Kho-Kho Team"
        Description="TEAM WHO CHASE FOR WINNING TROPHY "
        ImgLabel={KHO}
        Path="/KHO">
      </Card>

      <Card
        Label="Volleyball team
        "
        Description="Official team of volleyball 🏐"
        ImgLabel={VB}
        Path="/VB">
      </Card>

      <Card
        Label="Kabaddi Team"
        Description="Official page of Kabaddi Team AKGEC"
        ImgLabel={KAB}
        Path="/KAB">
      </Card>

      <Card
        Label="Cricket Club🏏"
        Description="Official Cricket Club of Ajay AKGEC"
        ImgLabel={CC}
        Path="/CC">
      </Card>

      <Card
        Label="Table Tennis
        "
        Description="Official Table tennis group of AKGEC"
        ImgLabel={TT}
        Path="/TT">
      </Card>

      <Card
        Label="Athletics Team"
        Description="(Official page of athletics team )
        PRACTICE like you have never won ,
        PERFORM like you've never lost.
        •Sprinters •Runners •Throwers •jumpers"
        ImgLabel={Athelete}
        Path="/Athelete">
      </Card>

      <Card
        Label="Badminton Team"
        Description="Official Badminton group of AKGEC"
        ImgLabel={BAD}
        Path="/BAD">
      </Card>

    </div>

  );
}

export default Sports;

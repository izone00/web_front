import { Fragment } from "react";
import Header from "./Component/room_Component/Header"
import Img from "./Component/room_Component/Img";
import Title from "./Component/room_Component/Title";
import Main from "./Component/room_Component/Main";
import Review from "./Component/room_Component/Review";
import Location from "./Component/room_Component/Location";
import Host from "./Component/room_Component/Host";
import Precautions from "./Component/room_Component/Precautions";

function Room() {
  return (
      <Fragment>
        <Header />
        <Title />
        <Img />
        <Main />
        <Review />
        <Location />
        <Host />
        <Precautions />
      </Fragment>

  );
}



export default Room;
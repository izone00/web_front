import { Fragment } from "react";
import Header from "./Component/room_Component/Header"
import Img from "./Component/room_Component/Img";
import Title from "./Component/room_Component/Title";
import Main from "./Component/room_Component/Main";

function Room() {
  return (
      <Fragment>
        <Header />
        <Title />
        <Img />
        <Main />
      </Fragment>

  );
}



export default Room;
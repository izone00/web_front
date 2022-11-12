import { Fragment } from "react";
import Header from "../head_Component/Header"
import Img from "./Img";
import Title from "./Title";
import Main from "./Main";
import Review from "./Review";
import Location from "./Location";
import Host from "./Host";
import Precautions from "./Precautions";

function Room() {
  return (
      <Fragment>
        <Header site="room"/>
        <Title />
        <Img />
        <Main />
        <Review />
        <Location />
        <Host />
        <Precautions />
      </Fragment>
  );
};

export default Room;
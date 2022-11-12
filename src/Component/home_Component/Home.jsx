import { Fragment } from "react";
import Header from "../head_Component/Header";
import Nav from "./Nav_Com/Nav";
import HomeMain from "./MomeMain_Com/HomeMain";

const Home = () => {
  return (
      <Fragment>
        <Header site="home"/>
				<Nav />
        <HomeMain />
      </Fragment>
  );
};

export default Home;
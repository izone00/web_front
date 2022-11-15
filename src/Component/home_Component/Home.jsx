import { Fragment } from "react";
import Header from "../head_Component/Header";
import Nav from "./Nav_Com/Nav";
import HomeMain from "./MomeMain_Com/HomeMain";
import Footer from "./Footer";

const Home = () => {
  return (
      <Fragment>
        <Header site="home"/>
				<Nav />
        <HomeMain />
        <Footer />
      </Fragment>
  );
};

export default Home;
import React from "react";
import CarouselComp from "../CarouselComp";
import Subheadings from "../Subheadings";
import CardsHeader from "../CardsHeader";
import Video from "../Video";
import Cards from "../Cards";
import {cardsContents} from "../../data";

function Home() {
  return (
    <div style={{ maxWidth: "1440px" , margin: "0 auto"}}>
      <CarouselComp />
      <Subheadings />
      <Video />
      <CardsHeader />
      <Cards cardsContents={cardsContents} />
    </div>
  );
}

export default Home;

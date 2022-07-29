import React from "react";
import CarouselComp from "../CarouselComp";
import Subheadings from "../Subheadings";
import CardsHeader from "../CardsHeader";
import Video from "../Video";
import Cards from "../Cards";

function Home() {
  return (
    <div>
      <CarouselComp />
      <Subheadings />
      <Video />
      <CardsHeader />
      <Cards />
    </div>
  );
}

export default Home;

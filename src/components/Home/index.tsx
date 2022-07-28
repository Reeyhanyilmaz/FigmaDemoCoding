import React from "react";
import CarouselComp from "../CarouselComp";
import Subheadings from "../Subheadings";
import Paragraph from "../Paragraph";
import CardsHeader from "../CardsHeader";
import Video from "../Video";
import Cards from "../Cards";
import Header from "../Header";

function Home() {
  return (
    <div>
      <CarouselComp />
      <Subheadings />
      <Header />
      <Paragraph />
      <Video />
      <CardsHeader />
      <Cards />
    </div>
  );
}

export default Home;

import React from "react";
import styles from "./styles.module.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Paragraph from "../Paragraph";
import Header from "../Header";

function Subheadings() {
  return (
    <div className={styles.subheadingsDiv}>
      <Tabs colorScheme="red">
        <TabList className={styles.tabList}>
          <Tab color="#7F7F7F" className={styles.p}>
            Lorem Ipsum
          </Tab>
          <Tab color="#7F7F7F" className={styles.p}>
            Dolor Sit Ament
          </Tab>
          <Tab color="#7F7F7F" className={styles.p}>
            Consectetur adipiscing elit
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Header />
            <Paragraph />
          </TabPanel>
          <TabPanel>
            <Header />
            <Paragraph />
          </TabPanel>
          <TabPanel>
            <Header />
            <Paragraph />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Subheadings;

{
  /* <Link to="/coming-soon" className={styles.linkto}>
        <span className={styles.p1}>Lorem Ipsum</span>
      </Link>
      <Link to="/coming-soon" className={styles.linkto}>
        <span className={styles.p2}>Dolor Sit Ament</span>
      </Link>
      <Link to="/coming-soon" className={styles.linkto}>
        <span className={styles.p3}>Consectetur adipiscing elit</span>
      </Link> */
}

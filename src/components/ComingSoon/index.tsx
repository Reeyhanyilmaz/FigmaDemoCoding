import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Text } from "@chakra-ui/react";

function ComingSoon() {
  return (
    <div className={styles.coming}>
      <Text
        as="i"
        color="white"
        fontSize={{ base: "30px", md: "40px", lg: "100px" }}
      >
        Coming Soon...
      </Text>

      <Link to="/" className={styles.linkto}>
        <Text as="u">Back to Home</Text>
      </Link>
    </div>
  );
}

export default ComingSoon;

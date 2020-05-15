import React from "react";
import PropTypes from "prop-types";

import { StyledTailwindSample } from "./TailwindSample.styled";
import Image from "@frontity/components/image";
import logoImage from "../../assets/navbar-logo.png";

const TailwindSample = ({ title }) => (
  <>
    <Image src={logoImage}></Image>
    <StyledTailwindSample>{title}</StyledTailwindSample>
  </>
);

TailwindSample.propTypes = {
  title: PropTypes.string,
};

export default TailwindSample;

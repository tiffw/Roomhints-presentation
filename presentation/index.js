// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
return (
  <Deck transition={['zoom','slide']} transitionDuration={800}>
    <Slide bgColor="primary">
      <Heading size={1} fit caps>
        Welcome to:
      </Heading>
      <Heading size={2} fit caps>
       Roomhints
      </Heading>
    </Slide>
    <Slide bgColor="black">
      <Heading size={1} fit textColor="primary" textFont="secondary">
        #1 App connecting customers with products "hints" from designers
      </Heading>
    </Slide>
    <Slide bgColor="primary" textColor="black" align="center top">
      <Heading size={1} textColor="black" textFont="primary">
        How it Works?
      </Heading>
      <List>
        <ListItem>Customer uploads a photo of their room and asks a question</ListItem>
        <ListItem>Designer answers their question and sends product "hints" directly to the customer</ListItem>
        <ListItem>Customer purchases the products directly on Roomhints and you get commission</ListItem>
        <ListItem>Simple solution to build your brand, meet new customers & get products you love in front of customers</ListItem>
      </List>
    </Slide>
      <Slide bgColor="black">
      <Heading size={1} fit textColor="primary" textFont="secondary">
        Every Sunday Roomhints features 1 celebritory designer - get in touch if you are interested in being featured
      </Heading>
    </Slide>
  </Deck>
    );
  }
}

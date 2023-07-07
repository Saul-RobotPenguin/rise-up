import * as React from "react";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Map from "./Map";
import Footer from "./Footer";

import { ContentContainer } from "./ContentContainer";

const theme = createTheme({
  palette: {
    custom: {
      grey: "#5D5F71",
      orange: "#F6AA1C",
      white: "#EBEBEB",
      mint: "#63A375",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
});

const sections = [
  {
    title: "Free Wifi Locations",
    url: "http://localhost:3000/wifi",
    name: "wifi",
  },
  {
    title: "Shelter Locations",
    url: "http://localhost:3000/shelter",
    name: "shelter",
  },
  {
    title: "Free Meal Locations",
    url: "http://localhost:3000/meal",
    name: "meal",
  },
  {
    title: "Free & Low Cost Health Locations",
    url: "http://localhost:3000/health",
    name: "health",
  },
  { title: "NYCHA Help", url: "#" },
  { title: "About Rise Up", url: "#" },
];

const mainFeaturedPost = {
  title: "Helping New Yorkers Get Back On Their Feet!",
  description: "A Resource To Help New Yorkers With Basic Necessities",
  image:
    "https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
  imageText: "main image description",
};

const featuredPosts = [
  {
    title: "What's The Purpose Of Rise Up ✊?",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "How We Can DO Our P",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

export default function Blog({ lat, lng }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          title="Rise Up ✊"
          sections={sections}
          theme={theme.palette.custom}
        />
        <ContentContainer lat={lat} lng={lng} />
      </Container>
      <Footer
        title="Rise Up ✊"
        description="A Resource To Help New Yorkers With Basic Necessities"
      />
    </ThemeProvider>
  );
}

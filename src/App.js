import React, { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "./Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import AppRouter from "./Components/AppRouter";
import { ToastContainer, toast } from "react-toastify";

import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { HashRouter as Router } from "react-router-dom";
const ISLOGlN = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;
function App() {
  const {
    data: { isLoggedIn }
  } = useQuery(ISLOGlN);
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        <Router>
          <Header />
          <AppRouter isLoggedIn={isLoggedIn} />
          <Footer />
        </Router>
      </Wrapper>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;

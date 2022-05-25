import React, { useReducer } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Grid, Typography, Container } from "@mui/material";

import Navbar from "../components/Navbar";
import ActionAreaCard from "../components/ActionAreaCard";

import {
  pledgeFormReducer,
  pledgeFormInitialState,
  SelectedCategoryType,
} from "../reducers/pledgeFormReducer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Uniters - help Ukraine</title>
        <meta name="description" content="Pomoc Ukrainie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Container>
          <Typography
            textAlign="center"
            mt={6}
            mb={4}
            variant="h3"
            component="h1"
            color="white"
          >
            Choose the sector you want to support
          </Typography>
          <Grid container spacing={{ md: 2 }} mt={4} pb={10}>
            <Grid item xs={12} md={6} mb={2}>
              <ActionAreaCard
                targetURL={`/category/${SelectedCategoryType.DEFENDERS}`}
                title="Defenders"
                imgURL="/images/category/defender.jpg"
              />
            </Grid>
            <Grid item xs={12} md={6} mb={2}>
              <ActionAreaCard
                targetURL={`/category/${SelectedCategoryType.CIVILANS}`}
                title="Civil population"
                imgURL="/images/category/civilian.jpg"
              />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Home;

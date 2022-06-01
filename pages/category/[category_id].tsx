import React, { useContext, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { PayPayButton } from "../../atoms/PayPalButton";
import { SelectedCategoryType } from "../../reducers/pledgeFormReducer";
import { OrderContext } from "../../context/OrderContext";
import Navbar from "../../components/Navbar";
import { TaggedImage } from "../../components/TaggedImage";
const backgroundColorTextArea = "rgba(0,0,0,0.5 )";

const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: "red",
  },
  // focused color for input with variant='standard'
  "& .MuiInput-underline:after": {
    borderBottomColor: "red",
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "red",
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "red",
    },
  },
  "&.Mui-focused .MuiInputAdornment-root .MuiTypography-root": {
    color: "red",
  },

  outlinedInput: {
    "&:hover .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: "red",
    },
    "&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: "red",
    },
  },
}));

const PldgeCategory: NextPage = () => {
  const {
    selectCategory,
    updateAmmount,
    orderStore: { ammountToPledge },
  } = useContext(OrderContext);

  const {
    query: { category_id },
  } = useRouter();

  const isSlugOnKnownCategory = Object.values(SelectedCategoryType).includes(
    category_id as unknown as SelectedCategoryType
  );

  // Set category for payment if its of a category we know
  useEffect(() => {
    isSlugOnKnownCategory &&
      selectCategory &&
      selectCategory(category_id as SelectedCategoryType);
  }, [category_id]);

  const handleChange = (event: Event | React.ChangeEvent) =>
    updateAmmount && updateAmmount(Number((event as any).target.value));

  if (!isSlugOnKnownCategory) {
    return (
      <Typography
        textAlign="center"
        mt={6}
        mb={4}
        variant="h3"
        component="h1"
        color="white"
      >
        Sorry, category uknown
      </Typography>
    );
  }

  return (
    <div>
      <Head>
        <title>{`Help Ukraine ${category_id}`}</title>
        <meta name="description" content="Help Ukraine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Container>
        <Typography
          textAlign="center"
          mt={6}
          mb={4}
          variant="h3"
          component="h1"
          color="white"
        >
          Help Ukraine by supporting <strong>{category_id}</strong>
        </Typography>
        <Grid container spacing={{ md: 2 }} mt={4} pb={10}>
          <Grid item xs={12} md={6} mb={2}>
            <Card
              variant="outlined"
              sx={{ backgroundColor: backgroundColorTextArea, color: "white" }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Thank you for your donations!
                </Typography>

                <Typography variant="body2">Every penny counts</Typography>
                <Box sx={{ width: 300 }}>
                  <Slider
                    aria-label="Small steps"
                    defaultValue={10}
                    value={ammountToPledge}
                    valueLabelFormat={(value) => `${value}$`}
                    step={10}
                    marks
                    min={0}
                    max={4000}
                    valueLabelDisplay="auto"
                    onChange={handleChange}
                    sx={{ color: "red" }}
                  />

                  <CssTextField
                    label="DONATE AMMOUNT"
                    id="outlined-start-adornment"
                    sx={{
                      m: 1,
                      width: "25ch",
                      input: { color: "red" },
                      label: { color: "red", borderColor: "red" },
                      outlineColor: "red",
                      color: "red",
                      borderColor: "red",
                    }}
                    InputProps={{
                      type: "numer",
                      onChange: handleChange,
                      value: ammountToPledge,
                      startAdornment: (
                        <InputAdornment
                          sx={{ color: "white" }}
                          position="start"
                        >
                          <AttachMoneyIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </CardContent>
              <CardActions
                style={{
                  minHeight: "60px",
                  paddingLeft: "20px",
                }}
              >
                <PayPayButton />
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} mb={2}>
            <Card
              variant="outlined"
              sx={{
                backgroundColor: backgroundColorTextArea,
                color: "white",
                padding: 0,
              }}
            >
              <TaggedImage
                variant={category_id as SelectedCategoryType}
                selectedPrice={ammountToPledge}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PldgeCategory;

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Link from "next/link";

interface IProps {
  imgURL: string;
  title: string;
  targetURL: string;
}

const backgroundColorTextArea = "rgba(0,0,0,0.5 )";

export default function ActionAreaCard(props: IProps) {
  return (
    <Link href={props.targetURL} passHref>
      <a>
        <Card sx={{ backgroundColor: backgroundColorTextArea }}>
          <CardActionArea sx={{ backgroundColor: backgroundColorTextArea }}>
            <CardMedia
              component="img"
              height="100%"
              image={props.imgURL}
              alt={props.title}
            />
            <CardContent
              sx={{ backgroundColor: backgroundColorTextArea, color: "white" }}
            >
              <Typography
                align="center"
                gutterBottom
                variant="h5"
                component="div"
              >
                {props.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </Link>
  );
}

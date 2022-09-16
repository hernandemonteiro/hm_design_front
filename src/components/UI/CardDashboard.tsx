import React from "react";
import { Card, Typography } from "@mui/material";

interface cardProps {
  title: string;
  quantity: number;
}
export default function CardDashboard(props: cardProps) {
  return (
    <Card sx={{ width: "30%", padding: 2, margin: "4%" }}>
      <Typography variant="body2" color="text.secondary">
        {props.title}
      </Typography>
      <Typography
        gutterBottom
        sx={{ textAlign: "center" }}
        variant="h1"
        component="div"
      >
        {props.quantity}
      </Typography>
    </Card>
  );
}

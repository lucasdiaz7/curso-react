import React from "react";
import style from "./ItemList.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ItemList = ({ items, theme }) => {
  return (
    <div className={style.card}>
      {items.map((e) => {
        return (
          <div key={e.id}>
            <Card sx={{ maxWidth: 345 }}>
              {/* <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {`$${e.price}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/item/${e.id}`}>
                  <Button size="small" variant="contained">
                    Ver Detalle
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

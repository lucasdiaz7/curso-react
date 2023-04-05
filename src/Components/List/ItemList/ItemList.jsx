import React from "react";
import style from "./ItemList.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import SearchBar from "../../SearchBar/SearchBar";
import CategoryContainer from "../../Category/CategoryContainer";


const ItemList = ({ items, theme }) => {
  return (
    <div>
      <CategoryContainer/>
      {/* <SearchBar/> */}
    <div className={style.card}>
      
      {items.map((e) => {
        return (
          <div key={e.id} >
            <Card
              sx={{ height: 550, width: "381px", margin: "17px", backgroundColor: "#e2e2e2" }}
              className={style.box}
            >
              <Link className={style.link} to={`/item/${e.id}`}>
              <CardMedia sx={{margin:5, height: 300}} image={e.img} title={e.name}  />
              <CardContent >
                <Typography sx={{color: "black" }} gutterBottom variant="h5" component="div" >
                  {e.name}
                </Typography>
                <Typography sx={{color: "black" }} gutterBottom variant="h6" component="div" >
                  {`$${e.price}`}
                </Typography>
              </CardContent>
                </Link>

            </Card>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default ItemList;

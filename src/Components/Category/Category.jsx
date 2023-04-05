import React from 'react'
import { Link } from "react-router-dom";
import style from "./category.module.css"
import LaptopIcon from '@mui/icons-material/Laptop';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import TvIcon from '@mui/icons-material/Tv';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

const Category = ({categories}) => {
 
  return (
    <div className={style.cat} >
        {categories.map((c) => {
          return <Link className={style.link} to={c.path} key={c.id}>
            {c.name === "notebooks"? <LaptopIcon/> :null } 
            {c.name === "celulares"? <PhoneAndroidIcon/> :null } 
            {c.name === "tablets"? <TabletAndroidIcon/> :null } 
            {c.name === "aires"? <AcUnitIcon/> :null } 
            {c.name === "rodados"? <PedalBikeIcon/> :null } 
            {c.name === "televisores"? <TvIcon/> :null } 
            {c.name === "lavarropas"? <LocalLaundryServiceIcon/> :null } 
            {c.name}
            </Link>;
        })}
    
    </div>
  );
};

export default Category;

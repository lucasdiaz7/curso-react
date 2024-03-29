import React, { useEffect, useState } from "react";
import Category from './Category';
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


const CategoryContainer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const itemCollection = collection(db, "category");
      getDocs(itemCollection).then((res) => {
        let categ = res.docs.map((c) => {
          return {
            ...c.data(),
            id: c.id,
          };
        });
        setCategories(categ);
      });
    }, []);


  return (
    <div>
        <Category categories={categories} /> 
    </div>
  )
}

export default CategoryContainer;
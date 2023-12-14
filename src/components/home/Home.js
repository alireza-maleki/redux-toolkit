import React, { useEffect } from 'react';
import classes from "./Home.module.css";

import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../../store/ProductAction';


const Home = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.items);

  useEffect(() => {
    dispatch(getAllData());
  }, []);


  console.log(items);


  return (
    <div className={classes.navbar}>
      <nav>

        <li>
          Product
        </li>

        <li>Profile</li>

        <li>Logout</li>

      </nav>
    </div>
  )
}

export default Home
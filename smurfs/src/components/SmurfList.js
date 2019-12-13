import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSmurfs } from "../actions";
import Smurf from "./Smurf";

const SmurfList = () => {
  const dispatch = useDispatch();
  const smurfs = useSelector(state => state.smurfs);

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, [smurfs]);

  const renderSmurfs = () => {
    return smurfs.map(smurf => <Smurf key={smurf.id} data={smurf} />);
  };

  return <div>{smurfs ? renderSmurfs() : "Loading..."}</div>;
};

export default SmurfList;
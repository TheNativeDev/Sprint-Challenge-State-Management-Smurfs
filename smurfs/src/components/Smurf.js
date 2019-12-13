import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSmurf } from "../actions";
import EditSmurf from "./EditSmurf";

const Smurf = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteSmurf(data.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const renderSmurf = () => {
    return (
      <>
        <p>{data.name}</p>
        <p>{data.age}</p>
        <p>{data.height}</p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </>
    );
  };

  const renderEditForm = () => {
    return <EditSmurf data={data} setIsEditing={setIsEditing} />;
  };
  return <>{isEditing ? renderEditForm() : renderSmurf()}</>;
};

export default Smurf;
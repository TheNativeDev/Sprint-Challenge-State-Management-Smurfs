import React from "react";
import { useDispatch } from "react-redux";
import { useInput } from "../hooks/useInput";
import { putSmurf } from "../actions";

const EditSmurf = ({ data, setIsEditing }) => {
  const [name, setName, handleNameChange] = useInput(data.name);
  const [age, setAge, handleAgeChange] = useInput(data.age);
  const [height, setHeight, handleHeightChange] = useInput(data.height);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(putSmurf(data.id, { name, age, height }));

    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={e => handleNameChange(e.target.value)}
          value={name}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={e => handleAgeChange(e.target.value)}
          value={age}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          onChange={e => handleHeightChange(e.target.value)}
          value={height}
        />
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditSmurf;
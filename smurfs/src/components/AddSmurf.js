import React from "react";
import { useDispatch } from "react-redux";
import { useInput } from "../hooks/useInput";
import { postSmurf } from "../actions";

const AddSmurf = () => {
  const [name, setName, handleNameChange] = useInput("");
  const [age, setAge, handleAgeChange] = useInput("");
  const [height, setHeight, handleHeightChange] = useInput("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(postSmurf({ name, age, height }));
    setName("");
    setAge("");
    setHeight("");
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddSmurf;
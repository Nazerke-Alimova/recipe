import React from "react";
import '../Input/Input.css'

export default function Input({ value, onChange }) {
  return (
    <input className="search-bar" value={value} onChange={onChange}></input>
  );
}

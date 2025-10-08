"use client";
import React, { useState } from "react";

const NameInput: React.FC = () => {
  const [name, setName] = useState("");

  return (
    <>
      <div className="mt-6">
        <label htmlFor="name-input" className="block text-sm font-medium text-gray-700 mb-1">
          Name:
        </label>
        <input
          id="name-input"
          type="text"
          className="border rounded px-3 py-2 w-full"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div className="mt-6 text-sm text-gray-600">
        Click <a className="text-blue-600" href={"/api/set-name?name=" + name}>set name={name}</a> to set a cookie (demo).
      </div>
    </>
  );
};


export default NameInput;
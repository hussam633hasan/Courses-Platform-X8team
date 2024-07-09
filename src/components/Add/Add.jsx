import React, { useState } from "react";
import "./Add.css";

function Add({ title, fields, onSubmit }) {
  const initialData = {};
  fields.forEach(field => {
    initialData[field.name] = "";
  });
  const [Data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(Data);
    const resetData = {};
    fields.forEach(field => {
      resetData[field.name] = "";
    });
    setData(resetData);
  };

  return (
    <>
      <div className="EI-addsection">
        <p className="EI-title">{title}</p>
        <form className="EI-add" onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={index}>
              <label htmlFor={`EI-${field.name}`} className="required">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={`EI-${field.name}`}
                  name={field.name}
                  value={Data[field.name]}
                  onChange={handleChange}
                  required
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  id={`EI-${field.name}`}
                  name={field.name}
                  value={Data[field.name]}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          ))}
          <button className="EI-submit" type="submit">Save</button>
        </form>
      </div>
    </>
  );
}

export default Add;

import React, { useState, useEffect } from "react";
import "./Add.css";
import { Link } from "react-router-dom";

function Edit({ title, fields, onSubmit }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("editData");
    console.log("Stored Data:", storedData);

    if (storedData) {
      setFormData(JSON.parse(storedData));
    } else {
      const initialData = {};
      fields.forEach((field) => {
        initialData[field.name] = field.initialValue || "";
      });
      setFormData(initialData);
    }
  }, [fields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  required
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  id={`EI-${field.name}`}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          ))}
          <Link to="/articledashboard">
            <button className="EI-submit" type="submit">
              Save
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Edit;

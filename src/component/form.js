import React, { useState } from 'react';

export default function Form(initial = {}) {
  //set state to allow for input
  const [input, setInput] = useState(initial);

  const handleChange = (event) => {
    let { value, name, type } = event.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    setInput({ ...input, [name]: value });
  };
  const resetForm=()=> {
    setInput(initial);
  }
  const clearForm =()=> {
  
  }

  const handleSubmit = (event) => {
event.preventDefault()
  }

  return (
    <div>
      <hi className="header">GITHUB PORTFOLIO</hi>
      <p className="para">
        Enter your Github username to access your portfolio.
      </p>
      <form className="username" onSubmit = {handleSubmit}>
        <label htmlFor="github" className="label">Username:</label>
        <input className="input"
          id="github"
          type="text"
          name="github"
          placeholder="e.g. rareprince"
        />
      </form>
    </div>
  );
}

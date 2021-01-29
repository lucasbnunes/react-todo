import React, { useRef } from 'react';
import { HiPlus } from 'react-icons/hi';
import './Input.css';

function Input({ value, text, onChange, onClick, placeholder }) {
  const inputRef = useRef();

  function handleSubmit(event) {
    inputRef.current.focus();
    event.preventDefault();
  }
  return (
    <form onSubmit={(event) => handleSubmit(event)} className="Input">
      <div className="Input__searchbar">
        <input
          ref={inputRef}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <button onClick={onClick}>
          <HiPlus />
        </button>
      </div>
    </form>
  );
}

export default Input;

import React from "react";
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("onsearch cambio ");
  }, [onSearch]);

  useEffect(() => {
    console.log("componente listo");
  }, []);

  useEffect(() => {
    console.log("search cambio");
  }, [search]);

  useImperativeHandle(ref, () => ({
    search,
    setSearch,
  }));

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div
      ref={ref}
      style={{
        marginBottom: 14,
        width: "100%",
        display: "flex",
      }}
    >
      <div style={{ flex: 1, display: "flex" }}>
        <p style={{
          fontSize: 24,
          fontWeight: 'bold'
        }}>Mi boletera</p>
      </div>
      <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'flex-end' }}>
        <input
          placeholder="Busca tu evento favorito"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={search}
          style={{
            fontSize:16,
            padding:'6px 12px',
            borderRadius: 4,
            border:'none',
            width:200,
          }}
        ></input>
      </div>
    </div>
  );
});

Navbar.displayName = "Nabvar";
export default Navbar;

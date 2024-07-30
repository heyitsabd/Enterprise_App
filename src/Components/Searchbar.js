import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../App.css';

const SearchBar = ({handleSearch}) => {
  return (
    <div className="search-bar-container">
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>{handleSearch(e.target.value)}}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
};

export default SearchBar;

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput !== '') router.push(`/search/${searchInput}`);
  };
  return (
    <Form onSubmit={handleSubmit} id="searchBar">
      <input className="form-control" type="text" placeholder="Enter your search here" onChange={handleChange} value={searchInput} />
      <Button variant="success" type="submit" size="sm">search</Button>
    </Form>
  );
}

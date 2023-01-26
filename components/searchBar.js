import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { getMembers } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';

export default function SearchBar({ placeholder }) {
  const [members, setMembers] = useState();
  const { user } = useAuth();

  const allTheMembers = () => {
    getMembers(user.uid).then(setMembers);
  };

  useEffect(() => {
    allTheMembers();
  });
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      <div className="dataResults">
        {members.map((member) => (
          <p>{member.name}</p>
        ))}
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
}.isrequired;

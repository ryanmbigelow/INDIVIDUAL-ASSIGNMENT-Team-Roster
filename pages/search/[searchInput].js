import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getMembers } from '../../api/memberData';
import MemberCard from '../../components/MemberCard';
import { useAuth } from '../../utils/context/authContext';

export default function SearchResult() {
  const [searchReults, setSearchResults] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { searchInput } = router.query;

  const getSearchResults = () => {
    getMembers(user.uid).then((searchResultsArray) => {
      const filterResults = searchResultsArray.filter((member) => member.name.toLowerCase().includes(searchInput)
      || member.role.toLowerCase().includes(searchInput)
      || member.description.toLowerCase().includes(searchInput));
      setSearchResults(filterResults);
    });
  };

  useEffect(() => {
    getSearchResults();
    return () => {
      setSearchResults([]);
    };
  }, [searchInput]);
  return (
    <div>
      <div className="d-flex flex-wrap">
        {searchReults.map((obj) => (
          <MemberCard key={obj.firebaseKey} memberObj={obj} onUpdate={getSearchResults} />
        ))}
      </div>
    </div>
  );
}

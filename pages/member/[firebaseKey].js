import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleMember } from '../../api/memberData';

export default function ViewMemberDetails() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;
  useEffect(() => {
    getSingleMember(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={memberDetails.image} alt={memberDetails.name} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {memberDetails.name}
        </h5>
        <p>Role: {memberDetails.role}</p>
        <p>Bio: {memberDetails.description}</p>
      </div>
    </div>
  );
}

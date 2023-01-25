import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleMember } from '../../../api/memberData';
import MemberForm from '../../../components/MemberForm';

export default function EditAMember() {
  const [editMember, setEditMember] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    getSingleMember(firebaseKey).then(setEditMember);
  }, [firebaseKey]);
  return (<MemberForm memberObj={editMember} />);
}

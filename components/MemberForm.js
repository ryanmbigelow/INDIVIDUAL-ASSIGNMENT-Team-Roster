// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { getMembers } from '../api/memberData';
// import { useAuth } from '../utils/context/authContext';

// const initialState = {
//   firebaseKey: '',
//   image: '',
//   name: '',
//   role: '',
//   uid: '',
// };

// export default function MemberForm({ memberObj }) {
//   const [formInput, setFormInput] = useState(initialState);
//   const [members, setMembers] = useState([]);
//   const user = useAuth();
//   const router = useRouter;

//   useEffect(() => {
//     getMembers(user.uid).then(setMembers)

//     if (memberObj.firebaseKey) (setFormInput(memberObj));
//   }, [memberObj, user]);

//   return (
//     <Form>

//     </Form>
//   );
// }

// MemberForm.propTypes = {
//   memberObj: PropTypes.shape({
//     image: PropTypes.string,
//     name: PropTypes.string,
//     role: PropTypes.string,
//     uid: PropTypes.string,
//     firebaseKey: PropTypes.string,
//   }),
// };

// MemberForm.defaultProps = {
//   memberObj: initialState,
// };

// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Option from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

const initialState = {
  firebaseKey: '',
  image: '',
  name: '',
  role: '',
};

const memberRoles = [
  'Conductor', 'Soprano', 'Alto', 'Tenor', 'Baritone', 'Bass',
];

export default function MemberForm({ memberObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();
  // const router = useRouter;

  useEffect(() => {
    if (memberObj.firebaseKey) (setFormInput(memberObj));
  }, [memberObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (memberObj.firebaseKey) {
      console.warn('create update function');
    } else {
      const payload = { ...formInput, user: user.uid };
      console.warn(payload);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{memberObj.firebaseKey ? 'Update' : 'Create'} Member</h2>

      {/* NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter the singer's name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Image" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter an image of the singer"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Role" className="mb-3">
        <Form.Select
          type="text"
          placeholder="Select the singer's vocal range"
          name="role"
          value={formInput.role}
          onChange={handleChange}
          required
        />
        <Option value="">Select a vocal range</Option>
        {
          memberRoles.map(() => (
            <Option
              key={memberObj.firebaseKey}
              value={memberObj.firebaseKey}
            >
              {memberRoles}
            </Option>
          ))
        }
      </FloatingLabel>

      <Button type="submit">{memberObj.firebaseKey ? 'Update' : 'Create'} Member</Button>

    </Form>
  );
}

MemberForm.propTypes = {
  memberObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

MemberForm.defaultProps = {
  memberObj: initialState,
};

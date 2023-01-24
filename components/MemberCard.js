import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteMember } from '../api/memberData';

export default function MemberCard({ memberObj, onUpdate }) {
  const deleteThisMember = () => {
    if (window.confirm(`Delete ${memberObj.name}?`)) {
      deleteMember(memberObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <div>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={memberObj.image} alt={memberObj.name} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>{memberObj.name}</Card.Title>
          <p className="card-text bold">{memberObj.role}</p>
          <Link href={`/member/${memberObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">VIEW</Button>
          </Link>
          <Link href={`/member/edit/${memberObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisMember} className="m-2">
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

MemberCard.propTypes = {
  memberObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

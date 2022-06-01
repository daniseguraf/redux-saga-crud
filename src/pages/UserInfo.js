import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { getUsersRequest } from '../redux/actions';

const UserInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  console.log(users);

  const user = users.find((el) => el.id === +id);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <h2>User Detail</h2>
      <p>ID: {user?.id}</p>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <MDBBtn onClick={() => navigate('/')} color="danger">
        Go back
      </MDBBtn>
    </div>
  );
};

export default UserInfo;

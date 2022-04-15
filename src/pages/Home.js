import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersStart } from '../redux/actions';

import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBSpinner,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Home = () => {
  const distpatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  const handleDelete = () => {};

  useEffect(() => {
    distpatch(loadUsersStart());
  }, []);

  return (
    <div className="container" style={{ marginTop: '150px' }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        {users &&
          users.map((el, index) => (
            <MDBTableBody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td>{el.address}</td>
                <td>
                  <MDBBtn
                    className="m-1"
                    tag="a"
                    color="none"
                    onClick={() => handleDelete(el.id)}
                  >
                    <MDBTooltip title="Delete" tag="a">
                      <MDBIcon
                        fas
                        icon="trash"
                        style={{ color: '#dd4b39' }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </MDBBtn>{' '}
                  <Link to={`/editUser/${el.id}`}>
                    <MDBTooltip title="Edit" tag="a">
                      <MDBIcon
                        fas
                        icon="pen"
                        style={{ color: '#55acee', marginBottom: '10px' }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </Link>{' '}
                  <Link to={`/userInfo/${el.id}`}>
                    <MDBTooltip title="View" tag="a">
                      <MDBIcon
                        fas
                        icon="eye"
                        style={{ color: '#3b5998', marginBottom: '10px' }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
    </div>
  );
};

export default Home;

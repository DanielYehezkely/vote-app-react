import React from "react";
import useFetchUsers from "../../hooks/fetchUsers";
import Loader from '../../components/Loader/Loader';

import './AdminUsersTable.css';

const AdminUsersTable = () => {
  const { users, isLoadingUsers, error } = useFetchUsers();

  return (
    <>
      {isLoadingUsers ? (
        <Loader />
      ) : (
        <section className='users-status'>
          {error ? (
            <div className="global-error-message">
              <p>Oops! Something went wrong: {error}</p>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Voted</th>
                  <th>CandidateId</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.type}</td>
                    <td className={user.vote ? 'voted' : 'not-voted'}>
                      {user.vote ? 'Yes' : 'No'}
                    </td>
                    <td>{user.votedCandidateId ? user.votedCandidateId : 'No vote'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      )}
    </>
  );
};

export default AdminUsersTable;


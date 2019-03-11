import React from 'react';

const Users = ({ users }) => {
  return (
    <ul className="list-group">
      {users.map(user => (
        <li className="list-group-item" key={user.id}>
          <h5>{user.name}</h5>

          <ul className="list-group">
            {user.favorites.map(favorite => (
              <li className="list-group-item" key={favorite.thing.id}>
                {favorite.thing.name} (Ranked: {favorite.rank})
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Users;

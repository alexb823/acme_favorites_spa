import React from 'react';

const Things = ({ things }) => {
  return (
    <ul className="list-group">
      {things.map(thing => (
        <li className="list-group-item" key={thing.id}>
          <h5>{thing.name}</h5>

          <ul className="list-group">
            {thing.favorites.map(favorite => (
              <li className="list-group-item" key={favorite.user.id}>
                favorited by: {favorite.user.name}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Things;

import React from 'react';
import clangImage from '../img/c.png';  // Renamed the import to avoid conflict

const Clang = () => {
  return (
    <div>
      <img src={clangImage} alt="C language logo" />
    </div>
  );
};

export default Clang;

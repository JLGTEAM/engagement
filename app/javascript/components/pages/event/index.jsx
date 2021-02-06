import React, { useState } from 'react';
import Ideas from './Ideas';
import Guessing from './guessing';
import Sidebar from '../../ui/Sidebar';
import Voting from './voting';

const Event = () => {
  const [activeItem, setActiveItem] = useState("Ideas");

  const handleChange = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <Sidebar handleChange={handleChange}>
        {activeItem === "Ideas" && <Ideas />}
        {activeItem === "Voting" && <Voting />}
        {activeItem === "Guessing" && <Guessing />}
      </Sidebar>
    </>
  );
}

export default Event;

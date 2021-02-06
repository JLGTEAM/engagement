import React, { useState } from 'react';

import Sidebar from './Sidebar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Event = () => {
  const [value, setValue] = useState(2);
  const [activeItem, setActiveItem] = useState('');

  const [showIdeas, setShowIdeas] = useState(false);
  const [showVoting, setShowVoting] = useState(false);
  const [showGuessing, setShowGuessing] = useState(false);

  const handleChange = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <Sidebar handleChange={handleChange}>
        {activeItem === 'Ideas' && <div>Ideas</div>}
        {activeItem === 'Voting' && <div>Ideas2</div>}
        {activeItem === 'Guessing' && <div>Ideas 3</div>}
      </Sidebar>
    </>
  );
}

export default Event;

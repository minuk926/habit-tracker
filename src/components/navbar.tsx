import React from 'react';
import {HabitTotCnt} from '../habit.model';

const Navbar: React.FC<HabitTotCnt> = (props) => {
  return (
    <div>
      <i className="fas fa-leaf" />
      <span>Habit tracker</span>
      <span>{props.totalCount}</span>
    </div>
  );
};

export default Navbar;

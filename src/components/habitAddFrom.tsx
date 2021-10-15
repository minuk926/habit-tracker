import React, {useRef} from 'react';
import {IHabitAdd} from '../habit.model';

const HabitAddFrom: React.FC<IHabitAdd> = (props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = inputRef.current!.value;
    name && props.onAdd(name);
    formRef.current!.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Habit" />
      <button>Add</button>
    </form>
  );
};

export default HabitAddFrom;

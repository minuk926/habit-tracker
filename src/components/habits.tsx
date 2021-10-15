import React, {Component} from 'react';
import {HabitProps, IHabit} from '../habit.model';
import HabitAddFrom from './habitAddFrom';
import Habit from './habit';

class Habits extends Component<HabitProps> {
  handleAdd = (name: string) => this.props.onAdd(name);
  handleIncrement = (habit: IHabit) => this.props.onIncrement(habit);
  handleDecrement = (habit: IHabit) => this.props.onDecrement(habit);
  handleDelete = (habit: IHabit) => this.props.onDelete(habit);

  render() {
    return (
      <div>
        <HabitAddFrom onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button onClick={this.props.onReset}>Reset</button>
      </div>
    );
  }
}

export default Habits;

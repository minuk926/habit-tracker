import React, {Component} from 'react';
import {HabitProp} from '../habit.model';

class Habit extends Component<HabitProp> {
  handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => this.props.onIncrement(this.props.habit);
  handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => this.props.onDecrement(this.props.habit);
  handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => this.props.onDelete(this.props.habit);

  render() {
    const {name, count} = this.props.habit;
    return (
      <li>
        <span>{name}</span>
        <span>{count}</span>
        <button onClick={this.handleIncrement}>
          <i className="fas fa-plus-square" />
        </button>
        <button onClick={this.handleDecrement}>
          <i className="fas fa-minus-square" />
        </button>
        <button onClick={this.handleDelete}>
          <i className="fas fa-trash" />
        </button>
      </li>
    );
  }
}

export default Habit;

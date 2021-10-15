import './app.css';
import Navbar from './components/navbar';
import {Component} from 'react';
import Habits from './components/habits';
import {IHabit} from './habit.model';

class App extends Component {
  state = {
    habits: [{id: 1, name: 'Reading', count: 1}],
  };

  handleAdd = (name: string) => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({habits});
  };

  handleIncrement = (habit: IHabit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) return {...habit, count: habit.count + 1};
      return item;
    });
    this.setState({habits});
  };
  handleDecrement = (habit: IHabit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id && habit.count > 0) return {...habit, count: habit.count - 1};
      return item;
    });
    this.setState({habits});
  };
  handleDelete = (habit: IHabit) => {
    const habits = this.state.habits.filter((item) => {
      return item.id !== habit.id;
    });
    this.setState({habits});
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count !== 0) return {...item, count: 0};
      return item;
    });
    this.setState({habits});
  };

  render() {
    return (
      <div>
        <Navbar totalCount={this.state.habits.filter((item) => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;

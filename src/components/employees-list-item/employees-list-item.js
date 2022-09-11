import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rise: false,
    }
  }

  onIncrease = () => {
    this.setState(({increase}) => ({  // аргумент {increase} = state
      increase: !increase,
    }));
  };

  onClick = () => {
    this.setState(({rise}) => ({
      rise: !rise,
    }));
  };

  render() {
    const {name, salary, onDelete } = this.props;
    const {increase, rise} = this.state;

    const increaseClass = increase === true ? 'increase' : '';
    const riseClass = rise === true ? 'like' : '';

    return (
      <li
        className={`list-group-item d-flex justify-content-between ${increaseClass} ${riseClass}`}>
        <span className="list-group-item-label" onClick={this.onClick}>{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
        <div className="d-flex justify-content-center align-items-center">
          <button type="button"
            className="btn-cookie btn-sm "
            onClick={this.onIncrease}>
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
};

export default EmployeesListItem;

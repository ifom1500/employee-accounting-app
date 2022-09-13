import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: '',
    };
  }

  onChange = (e) => {
    const salaryValue = e.target.value;
    const element = e.target
    this.setState({
      salary: salaryValue,
    });
    this.props.onChangeSalary(salaryValue, element);
  };

  render() {
    const { name, salary, increase, rise, onDelete, onToggleProp } = this.props;

    const increaseClass = increase === true ? 'increase' : '';
    const riseClass = rise === true ? 'like' : '';

    return (
      <li className={`list-group-item d-flex justify-content-between ${increaseClass} ${riseClass}`}>
        <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">
          {name}
        </span>
        <input type="text" className="list-group-item-input" defaultValue={`${salary}`} onChange={this.onChange} />
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-cookie btn-sm " onClick={onToggleProp} data-toggle="increase">
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;

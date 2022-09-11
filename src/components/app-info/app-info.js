import './app-info.css';

const AppInfo = ({ employeesAmount, awardEmployeesAmount }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании</h1>
      <h2>Общее число сотрудников: {employeesAmount}</h2>
      <h2>Премию получат: {awardEmployeesAmount}</h2>
    </div>
  );
};

export default AppInfo;

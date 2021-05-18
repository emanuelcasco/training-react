import Chart from '../Chart/Chart';

const initChartValues = (expenses) => {
  const INITIAL_CHART_VALUES = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];
  const initChartValue = [...INITIAL_CHART_VALUES];
  for (const expense of expenses) {
    const index = expense.date.getMonth();
    initChartValue[index].value += expense.value;
  }
  return initChartValue;
};

const ExpensesChart = ({ expenses }) => {
  const dataPoints = initChartValues(expenses);
  console.log(Array.isArray(dataPoints), typeof dataPoints);
  return <Chart dataPoints={dataPoints} />;
};

export default ExpensesChart;

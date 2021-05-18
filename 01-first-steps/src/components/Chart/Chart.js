import ChartBar from './ChartBar';
import './Chart.css';

const getMaxValue = (dataPoints) =>
  Math.max(...dataPoints.map((dataPoint) => dataPoint.value));

const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={getMaxValue(dataPoints)}
        />
      ))}
    </div>
  );
};

export default Chart;

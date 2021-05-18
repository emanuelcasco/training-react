import './ChartBar.css';

const calculateFillBarHeight = (value, max) =>
  max > 0 ? Math.round((value / max) * 100) + '%' : '0%';

const ChartBar = ({ label, value, maxValue }) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: calculateFillBarHeight(value, maxValue) }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;

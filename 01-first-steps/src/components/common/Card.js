import './Card.css';

const Card = ({ children, className: childClasses }) => (
  <div className={`class ${childClasses}`}>{children}</div>
);

export default Card;

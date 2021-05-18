const Optional = ({ children, condition, placeholder }) => {
  const defaultPlaceholder = <p style={{ textAlign: 'center' }}>Empty</p>;
  return condition ? children : placeholder || defaultPlaceholder;
};

export default Optional;

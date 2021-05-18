import Card from '../Card/Card';
import Container from '../Container/Container';

const Content = (props) => {
  return (
    <Container>
      <Card className={props.className}>{props.children}</Card>
    </Container>
  );
};

export default Content;

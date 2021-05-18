import { useDispatch } from 'react-redux';
import { shoppingCartActions } from '../../store/shopping-cart';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {
    id: '01',
    title: 'Test',
    price: 6,
    description: 'This is a first product - amazing!',
  },
  {
    id: '02',
    title: 'Monitor',
    price: 190.0,
    description: "6', is an square!",
  },
  {
    id: '03',
    title: 'Mouse',
    price: 99.99,
    description: 'With a ball',
  },
];

const Products = (props) => {
  const dispatch = useDispatch();

  const addProductToCartHandler = (product) => () => {
    dispatch(shoppingCartActions.addProduct({ ...product, quantity: 1 }));
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((p) => (
          <ProductItem
            key={p.id}
            title={p.title}
            price={p.price}
            description={p.description}
            onAddToCart={addProductToCartHandler(p)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

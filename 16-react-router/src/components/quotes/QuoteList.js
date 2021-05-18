import { useHistory, useLocation } from 'react-router';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortBy = (isAscending) => (isAscending ? 'ascending' : 'descending');
const sortingMethod = (ascending) => (x, y) =>
  (x.id > y.id ? 1 : -1) * (ascending ? 1 : -1);

const QuoteList = (props) => {
  const history = useHistory();
  const { pathname, search } = useLocation();

  const urlParams = new URLSearchParams(search);
  const sortIsAscending = urlParams.get('sort') === 'ascending';

  const changeSortingHandler = () => {
    history.push({
      pathname,
      search: `?sort=${sortBy(!sortIsAscending)}`,
    });
  };

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>{`Sort ${sortBy(
          sortIsAscending
        )}`}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.sort(sortingMethod(sortIsAscending)).map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;

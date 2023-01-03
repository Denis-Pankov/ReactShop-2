function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeForBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className='collection-item'>
      {name}
      <i
        className='material-icons btn-controlBasket purple-text'
        onClick={() => decQuantity(id)}
      >
        remove_circle_outline
      </i>
      x{quantity}
      <i
        className='material-icons btn-controlBasket purple-text'
        onClick={() => incQuantity(id)}
      >
        add_circle_outline
      </i>{' '}
      = {price * quantity} руб.
      <span
        className='secondary-content'
        onClick={() => removeForBasket(id)}
      >
        <i className='material-icons basket-delete purple-text'>close</i>
      </span>
    </li>
  );
}

export { BasketItem };

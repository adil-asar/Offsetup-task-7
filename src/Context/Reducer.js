const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart_items: [...state.cart_items, action.payload],
      };
    case "REMOVE_ALL_ITEMS":
      return {
        ...state,
        cart_items: [],
      };
    case "REMOVE_SINGLE_ITEM":
      return {
        ...state,
        cart_items: state.cart_items.filter(
          (item) => item.id !== action.payload
        ),
      };
      case 'INCREMENT_QUANTITY':
        return {
          ...state,
          cart_items: state.cart_items.map((item) =>
            item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
          ),
        };
        case 'DECREMENT_QUANTITY':
          return {
            ...state,
            cart_items: state.cart_items.map((item) =>
              item.id === action.payload && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
            ),
          };
          case 'total_item_amount':
      const totalItems = state.cart_items.reduce((acc, item) => acc + item.qty, 0);
      const subtotal = state.cart_items.reduce((acc, item) => acc + item.price * item.qty, 0);
      const totalTax =subtotal  * 0.1;
      const totalPrice = subtotal + totalTax;

      return {
        ...state,
        totalItems,
        subtotal,
        totalTax,
        totalPrice
      };
      
    default:
      return state;
  }
};

export default Reducer;

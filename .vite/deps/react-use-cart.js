import {
  require_react
} from "./chunk-UM3JHGVO.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/react-use-cart/dist/react-use-cart.esm.js
var import_react = __toESM(require_react());
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function useLocalStorage(key, initialValue) {
  var _React$useState = (0, import_react.useState)(function() {
    try {
      var item = typeof window !== "undefined" && window.localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      return initialValue;
    }
  }), storedValue = _React$useState[0], setStoredValue = _React$useState[1];
  var setValue = function setValue2(value) {
    try {
      var valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
var initialState = {
  items: [],
  isEmpty: true,
  totalItems: 0,
  totalUniqueItems: 0,
  cartTotal: 0,
  metadata: {}
};
var CartContext = (0, import_react.createContext)(initialState);
var createCartIdentifier = function createCartIdentifier2(len) {
  if (len === void 0) {
    len = 12;
  }
  return [].concat(Array(len)).map(function() {
    return (~~(Math.random() * 36)).toString(36);
  }).join("");
};
var useCart = function useCart2() {
  var context = (0, import_react.useContext)(CartContext);
  if (!context)
    throw new Error("Expected to be wrapped in a CartProvider");
  return context;
};
function reducer(state, action) {
  switch (action.type) {
    case "SET_ITEMS":
      return generateCartState(state, action.payload);
    case "ADD_ITEM": {
      var items = [].concat(state.items, [action.payload]);
      return generateCartState(state, items);
    }
    case "UPDATE_ITEM": {
      var _items = state.items.map(function(item) {
        if (item.id !== action.id)
          return item;
        return _extends({}, item, action.payload);
      });
      return generateCartState(state, _items);
    }
    case "REMOVE_ITEM": {
      var _items2 = state.items.filter(function(i) {
        return i.id !== action.id;
      });
      return generateCartState(state, _items2);
    }
    case "EMPTY_CART":
      return initialState;
    case "CLEAR_CART_META":
      return _extends({}, state, {
        metadata: {}
      });
    case "SET_CART_META":
      return _extends({}, state, {
        metadata: _extends({}, action.payload)
      });
    case "UPDATE_CART_META":
      return _extends({}, state, {
        metadata: _extends({}, state.metadata, action.payload)
      });
    default:
      throw new Error("No action specified");
  }
}
var generateCartState = function generateCartState2(state, items) {
  if (state === void 0) {
    state = initialState;
  }
  var totalUniqueItems = calculateUniqueItems(items);
  var isEmpty = totalUniqueItems === 0;
  return _extends({}, initialState, state, {
    items: calculateItemTotals(items),
    totalItems: calculateTotalItems(items),
    totalUniqueItems,
    cartTotal: calculateTotal(items),
    isEmpty
  });
};
var calculateItemTotals = function calculateItemTotals2(items) {
  return items.map(function(item) {
    return _extends({}, item, {
      itemTotal: item.price * item.quantity
    });
  });
};
var calculateTotal = function calculateTotal2(items) {
  return items.reduce(function(total, item) {
    return total + item.quantity * item.price;
  }, 0);
};
var calculateTotalItems = function calculateTotalItems2(items) {
  return items.reduce(function(sum, item) {
    return sum + item.quantity;
  }, 0);
};
var calculateUniqueItems = function calculateUniqueItems2(items) {
  return items.length;
};
var CartProvider = function CartProvider2(_ref) {
  var children = _ref.children, cartId = _ref.id, _ref$defaultItems = _ref.defaultItems, defaultItems = _ref$defaultItems === void 0 ? [] : _ref$defaultItems, onSetItems = _ref.onSetItems, onItemAdd = _ref.onItemAdd, onItemUpdate = _ref.onItemUpdate, onItemRemove = _ref.onItemRemove, _ref$storage = _ref.storage, storage = _ref$storage === void 0 ? useLocalStorage : _ref$storage, metadata = _ref.metadata;
  var id = cartId ? cartId : createCartIdentifier();
  var _storage = storage(cartId ? "react-use-cart-" + id : "react-use-cart", JSON.stringify(_extends({
    id
  }, initialState, {
    items: defaultItems,
    metadata
  }))), savedCart = _storage[0], saveCart = _storage[1];
  var _React$useReducer = (0, import_react.useReducer)(reducer, JSON.parse(savedCart)), state = _React$useReducer[0], dispatch = _React$useReducer[1];
  (0, import_react.useEffect)(function() {
    saveCart(JSON.stringify(state));
  }, [state, saveCart]);
  var setItems = function setItems2(items) {
    dispatch({
      type: "SET_ITEMS",
      payload: items.map(function(item) {
        return _extends({}, item, {
          quantity: item.quantity || 1
        });
      })
    });
    onSetItems && onSetItems(items);
  };
  var addItem = function addItem2(item, quantity) {
    if (quantity === void 0) {
      quantity = 1;
    }
    if (!item.id)
      throw new Error("You must provide an `id` for items");
    if (quantity <= 0)
      return;
    var currentItem = state.items.find(function(i) {
      return i.id === item.id;
    });
    if (!currentItem && !item.hasOwnProperty("price"))
      throw new Error("You must pass a `price` for new items");
    if (!currentItem) {
      var _payload = _extends({}, item, {
        quantity
      });
      dispatch({
        type: "ADD_ITEM",
        payload: _payload
      });
      onItemAdd && onItemAdd(_payload);
      return;
    }
    var payload = _extends({}, item, {
      quantity: currentItem.quantity + quantity
    });
    dispatch({
      type: "UPDATE_ITEM",
      id: item.id,
      payload
    });
    onItemUpdate && onItemUpdate(payload);
  };
  var updateItem = function updateItem2(id2, payload) {
    if (!id2 || !payload) {
      return;
    }
    dispatch({
      type: "UPDATE_ITEM",
      id: id2,
      payload
    });
    onItemUpdate && onItemUpdate(payload);
  };
  var updateItemQuantity = function updateItemQuantity2(id2, quantity) {
    if (quantity <= 0) {
      onItemRemove && onItemRemove(id2);
      dispatch({
        type: "REMOVE_ITEM",
        id: id2
      });
      return;
    }
    var currentItem = state.items.find(function(item) {
      return item.id === id2;
    });
    if (!currentItem)
      throw new Error("No such item to update");
    var payload = _extends({}, currentItem, {
      quantity
    });
    dispatch({
      type: "UPDATE_ITEM",
      id: id2,
      payload
    });
    onItemUpdate && onItemUpdate(payload);
  };
  var removeItem = function removeItem2(id2) {
    if (!id2)
      return;
    dispatch({
      type: "REMOVE_ITEM",
      id: id2
    });
    onItemRemove && onItemRemove(id2);
  };
  var emptyCart = function emptyCart2() {
    return dispatch({
      type: "EMPTY_CART"
    });
  };
  var getItem = function getItem2(id2) {
    return state.items.find(function(i) {
      return i.id === id2;
    });
  };
  var inCart = function inCart2(id2) {
    return state.items.some(function(i) {
      return i.id === id2;
    });
  };
  var clearCartMetadata = function clearCartMetadata2() {
    dispatch({
      type: "CLEAR_CART_META"
    });
  };
  var setCartMetadata = function setCartMetadata2(metadata2) {
    if (!metadata2)
      return;
    dispatch({
      type: "SET_CART_META",
      payload: metadata2
    });
  };
  var updateCartMetadata = function updateCartMetadata2(metadata2) {
    if (!metadata2)
      return;
    dispatch({
      type: "UPDATE_CART_META",
      payload: metadata2
    });
  };
  return (0, import_react.createElement)(CartContext.Provider, {
    value: _extends({}, state, {
      getItem,
      inCart,
      setItems,
      addItem,
      updateItem,
      updateItemQuantity,
      removeItem,
      emptyCart,
      clearCartMetadata,
      setCartMetadata,
      updateCartMetadata
    })
  }, children);
};
export {
  CartProvider,
  createCartIdentifier,
  initialState,
  useCart
};
//# sourceMappingURL=react-use-cart.js.map

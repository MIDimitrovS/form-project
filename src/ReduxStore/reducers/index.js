const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: " ",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default rootReducer;

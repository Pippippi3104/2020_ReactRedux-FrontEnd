const title = (state = "test title", action) => {
    switch (action.type) {
      case "CHANGE_TITlE":
        return action.payload.title;
      default:
        return state;
    }
  };

  export default title;





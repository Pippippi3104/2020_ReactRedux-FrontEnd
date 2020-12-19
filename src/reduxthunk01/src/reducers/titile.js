const title = (state = "test title", action) => {
    switch (action.type) {
      case "CHANGE_TITlE":
        return action.payload.title;
      
      case "WAIT":
        return "Wait";

      default:
        return state;
    }
  };

  export default title;





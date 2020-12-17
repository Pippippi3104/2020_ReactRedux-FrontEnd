const reducer = (state = 0, action) => {
    switch (action.type) {
      case "PLUS_ONE":
        return state + 1;
      
      case "PLUS":
        return state + action.payload.num;
  
      case "MINUS_ONE":
        return state - 1;
        
      case "MINUS":
        return state - action.payload.num;
    
      default:
        return state;
    }
  };

  export default reducer;





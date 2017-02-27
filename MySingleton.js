let globalState = {};

function getGlobalState(key) {
    
  return globalState.key; 
}


function setGlobalState(key, value){

     globalState.key = value;
}


export {getGlobalState, setGlobalState};

const setResult = (state = null, action) => {
  switch (action.type) {
    case "setValue":
      return action.payload.data;
    default:
      return state;
  }
};

const getResult = (state = null, action) => {
  switch (action.type) {
    case "getValue":
      return action.payload.data;
    default:
      return state;
  }
};

const expResult = (state = null, action) => {
  switch (action.type) {
    case "setExp":
      return action.payload.data;
    default:
      return state;
  }
};

const checkResult = (state = null, action) => {
  switch (action.type) {
    case "checkKey":
      return action.payload.data;
    default:
      return state;
  }
};

const delResult = (state = null, action) => {
  switch (action.type) {
    case "delKey":
      return action.payload.data;
    default:
      return state;
  }
};

const remResult = (state = null, action) => {
  switch (action.type) {
    case "rem":
      return action.payload.data;
    default:
      return state;
  }
};

const zaddResult = (state = null, action) => {
  switch (action.type) {
    case "zadd":
      return action.payload.data;
    default:
      return state;
  }
};

const zrangeResult = (state = null, action) => {
  switch (action.type) {
    case "zrange":
      return action.payload.data;
    default:
      return state;
  }
};

const zrankResult = (state = null, action) => {
  switch (action.type) {
    case "zrank":
      return action.payload.data;
    default:
      return state;
  }
};

export {
  setResult,
  getResult,
  expResult,
  delResult,
  remResult,
  zaddResult,
  zrangeResult,
  checkResult,
  zrankResult,
};

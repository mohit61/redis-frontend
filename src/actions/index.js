import axios from "axios";

const url = `https://redis-unacademy.herokuapp.com/`;

const setValue = (key, value) => {
  let url1 = url + "setValue";
  let data = {
    key: key,
    value: value,
  };
  const request = axios.post(url1, data);
  return {
    type: "setValue",
    payload: request,
  };
};

const getValue = (key) => {
  let url1 = url + "getValue/" + key;
  const request = axios.get(url1);
  return {
    type: "getValue",
    payload: request,
  };
};

const checkKey = (key) => {
  let key1 = key;
  let url1 = `${url}checkKey/${key1}`;
  const request = axios.get(url1);
  return {
    type: "checkKey",
    payload: request,
  };
};

const delKey = (key) => {
  let url1 = url + "delKey/" + key;
  const request = axios.get(url1);
  return {
    type: "delKey",
    payload: request,
  };
};

const setExp = (key, time) => {
  let url1 = url + "exp/" + key + "/" + time;
  const request = axios.get(url1);
  return {
    type: "setExp",
    payload: request,
  };
};

const rem = (key) => {
  let url1 = url + "rem/" + key;
  const request = axios.get(url1);
  return {
    type: "rem",
    payload: request,
  };
};

const zadd = (name, score, value) => {
  let url1 = url + "zadd/" + name + "/" + value + "/" + score;
  const request = axios.get(url1);
  return {
    type: "zadd",
    payload: request,
  };
};

const zrank = (name, value) => {
  let url1 = url + "rank/" + name + "/" + value;
  const request = axios.get(url1);
  return {
    type: "zrank",
    payload: request,
  };
};

const zrange = (name, start, stop, withscores) => {
  let url1 =
    url + "zrange/" + name + "/" + start + "/" + stop + "/" + withscores;
  const request = axios.get(url1);
  return {
    type: "zrange",
    payload: request,
  };
};

export {
  getValue,
  setValue,
  checkKey,
  delKey,
  setExp,
  rem,
  zadd,
  zrange,
  zrank,
};

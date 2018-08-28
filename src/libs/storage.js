const LV = 'bitrock-last-visited';
const data = {};

export const lastVisited = {
  key: '',
  init: function(company) { this.key = `${company}-last-visited` } ,
  get: () => JSON.parse(localStorage.getItem(LV)),
  set: (data) => localStorage.setItem(LV, JSON.stringify(data)),
  clear: () => localStorage.setItem(LV, undefined)
}

export const store = {
  get: (key) => data[key],
  set: (key, value) => data[key] = value
}

if (process.env.NODE_ENV === 'development') {
  window.store = store;
  window.lastVisited = lastVisited;
}
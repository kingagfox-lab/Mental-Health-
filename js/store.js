
const store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem('ms_' + key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem('ms_' + key, JSON.stringify(value));
    } catch (e) {
    }
  }
};

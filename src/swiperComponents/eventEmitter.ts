/**
 * Function created for update components that's not especified in component tree
 */
export const eventEmmitter = {
  events: {},
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  },
  emit(event?, data?) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(data));
    }
  },
  removeListener(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((cb) => cb !== callback);
    }
  },
};

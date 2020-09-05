import {instancePromise} from 'asc:./as/add.as';

class _Service {
  constructor() {
    instancePromise.then((instance) => {
      this.addFn = instance.exports.add;
    });
  }

  doAdd(a, b) {
    return this.addFn(a, b);
  }
}

export const Service = new _Service();

// Singleton is a design pattern
// Used to get the benefit of lazy initialization of a class and to initialize it only once

// Two types of initialization
// *Eager and *Lazy
// *Lazy initialization
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this._data = [];
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}
// *Lazy initialization
// class Singleton{
//     const INSTANCE  = null;
//     let getInstance = () => {
//         if(!INSTANCE){
//             let instance = new Singleton();
//         }
//         return INSTANCE;
//      };

// }

const singleton = new Singleton();
Object.freeze(singleton);

// export default instance;
console.log(singleton);
const singleton_02 = new Singleton();
Object.freeze(singleton_02);
console.log(singleton_02);

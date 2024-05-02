// BEGIN
const each = (collection, callback) => {
    for (const item of collection) {
      callback.bind(item)();
    }
  };
  
  export default each;
  
// END

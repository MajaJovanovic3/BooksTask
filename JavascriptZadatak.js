const arr = ["x:1", "y:2", "x:3", "a:15"];
function createNewArray(arr){
const map = new Map();
arr.forEach(item => {
  const [key, value] = item.split(':');
  if (map.has(key)) {
    map.set(key, map.get(key) + parseInt(value));
  } else {
    map.set(key, parseInt(value));
  }
});
const sortedArr = Array.from(map.keys()).sort();
const formattedArr = sortedArr.map(key => `${key}=${map.get(key)}`);
const result = formattedArr.join(', ');
console.log(result);
}

let todoList = [];

// add to the end
const remember = task => {
  todoList.push(task);
};

// take the first one
const getTask = () => todoList.shift();

// take the last one
const rememberUrgently = task => todoList.unshift(task);

remember('get milk');
remember('get cat food');
remember('pick up boys');

console.log(todoList); // milk, cat food, boys
console.log(getTask()); // milk
remember('do laundry');
console.log(todoList); // cat food, boys, laundry
rememberUrgently('make dinner');
console.log(todoList); // make dinner cat food, boys, laundry

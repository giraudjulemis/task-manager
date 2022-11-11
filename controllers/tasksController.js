const getAllTasks = (req, res) => {
  res.send('get all tasks');
};

const createTask = (re, res) => {
  res.send('create task');
};

const getTask = (re, res) => {
  res.send('get single task');
};

const updateTask = (re, res) => {
  res.send('update task');
};

const deleteTask = (re, res) => {
  res.send('delete task');
};



module.exports = { 
  getAllTasks, 
  createTask, 
  getTask, 
  updateTask, 
  deleteTask 
}
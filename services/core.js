const users = [];
const getUser = (id) => users.find((user) => user.id === id);
const createUser = (name) => {
  const user = { id: Math.random().toString(36).substr(2, 9), name };
  users.push(user);
  return user;
};
module.exports = { getUser, createUser };
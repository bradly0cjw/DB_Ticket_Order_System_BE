const createUser = (req, res) => {
  const newUser = req.body;
  newUser.id = Date.now(); // Simple ID generation
  res.status(201).json(newUser);
};

const getUsers = (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];
  res.json(users);
};

module.exports = {
  createUser,
  getUsers
};
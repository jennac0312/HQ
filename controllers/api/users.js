const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const create = async (req, res) => {
  try {
    // Add user to database
    const user = await User.create(req.body);

    // Helper funtion to create JWT
    const token = createJWT(user);

    // Responding with our jwt
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
};

const login = async (req, res) => {
  try {
    // Find the user by their username
    const user = await User.findOne({ username: req.body.username });

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) throw new Error();

    res.status(200).json(createJWT(user));
  } catch (err) {
    res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
  }
};

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

const getAllUsers = async( req, res ) => {
  try {
    const allUSers = await User.find({})
    res.send( allUSers )
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateUser = async ( req, res ) => {
  try {
    const { previousUser, user } = req.body  
    const updatedUser = await User.findByIdAndUpdate(previousUser._id, user) 
    
    console.log(updatedUser)
    res.send(updatedUser)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  create,
  login,
  checkToken,
  getAllUsers,
  updateUser
};

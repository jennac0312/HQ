const User = require('../../models/User');
const Post = require('../../models/Post')
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
    res.status(100).json(err);
  }
};

const login = async (req, res) => {
  try {
    // Find the user by their username
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      // throw new Error();
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

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
    const { previousUser, newUser } = req.body  
    // console.log('NEW USER', newUser)
    const updatedUser = await User.findByIdAndUpdate(previousUser._id, newUser, { new: true }) 
    
    // console.log(updatedUser)

    // find and update user posts
    updatePostUser( previousUser, newUser )
    res.send(updatedUser)
  } catch (error) {
    res.status(500).send(error)
  }
}

const updatePostUser = async ( oldUser, newUser ) => {
  const oldUserPosts = await Post.find({ 'user.username': oldUser.username })
  const updatedPosts = await Post.updateMany({ 'user.username': oldUser.username }, { $set : { user: newUser }} )
  console.log('OLD POSTSSSSSSSSSSSSSSSSSSS')
  console.log(oldUserPosts)
}

module.exports = {
  create,
  login,
  checkToken,
  getAllUsers,
  updateUser
};

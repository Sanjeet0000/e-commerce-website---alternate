const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const URI = "mongodb+srv://user:sanjeet123@cluster0.hpg7xhg.mongodb.net/UserDetails?retryWrites=true&w=majority";
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express();

dotenv.config();
app.use(cors());

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        const userData = {
          username: username,
          email: email,
          password: hash
        };
        User.create(userData)
        .then(result => {
            res.status(200).send('User signed up successfully');
        })
        .catch(err => {
            res.status(500).send('Error signing up user');
        });
      });
    });
  });

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) throw new Error('Invalid email or password');
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) throw new Error('Invalid email or password');
        res.status(200).json({ message: 'User logged in successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

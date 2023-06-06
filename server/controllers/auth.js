import User from "../models/UserModel.js";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, userName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(404).json({ error });
  }
};

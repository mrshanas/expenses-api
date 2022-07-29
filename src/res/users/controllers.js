import { User } from "./models.js";

export const getToken = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && user.matchPassword(password)) {
      let token = user.generateToken();

      return res.status(200).json({ token });
    }

    return res.status(404).json({ error: "User not found" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const allUsers = async (req, res) => {
  const users = await User.find({}).select("-password");
  return res.status(200).json({
    users,
  });
};

export const createUser = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    const user = await User.create({ email, name, password });

    if (user) {
      return res.status(201).json({
        email,
        name,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

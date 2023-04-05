import userDetails from "../Models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const allUsers = await userDetails.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new userDetails(user);
    try {
        await newUser.save();
        res.status(200).json(newUser)
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

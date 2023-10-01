import { User } from "../model/User.js";

export const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const doc = await user.save();
        res.status(201).json(doc);

    } catch (error) {
        res.status(400).json(error);
    }
}

export const fetchAllUsers = async (req, res) => {
    try {
        let query = User.find({});

        const docs = await query.exec();
        res.status(200).json(docs);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export const fetchUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndRemove(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const updateAndReplaceUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndReplace({ _id: id }, req.body, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
}

import userModel from '../models/user.model.js'

export default {
    getAll: async (req, res) => {
        try {
            let data = await userModel.findAll()
            console.log("data", data);
            return res.status(200).send(data)
        } catch (err) {
            console.log(err);
        }

    }
}
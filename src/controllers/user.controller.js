import userModel from '../models/user.model.js'

export default {
    getAll: async (req, res) => {
        try {
            let data = await userModel.findAll()
            console.log("data", data);
            return res.status(200).send({
                message: "User get successfully",
                data: data
            })
        } catch (err) {
            console.log(err);
        }

    },
    create: async (req, res) => {
        try {
            let data = req.body;
            let result = await userModel.create(data);
            return res.status(200).send({
                message: "User created successfully",
                data: { ...data, id: result.insertId }
            })
        } catch (err) {
            console.log(err);
        }
    },
    update:  async (req, res) => {
        try{
            let dataUpdate = req.body;
            let id = req.params.id;
            let result = await userModel.update(id, dataUpdate);
            console.log(result);
            return res.status(200).send({
                message: "User updated successfully",
                data: dataUpdate
            })
        }catch(err){
            console.log(err);
        }
    },
    delete: async (req, res) => {
        try{
            let id = req.params.id;
            let result  = await userModel.delete(id);
            console.log(result);
            return res.status(200).send({
                message: "User deleted successfully",
                data: result
            })
        }catch(err){
            console.log(err);
        }
    }
}
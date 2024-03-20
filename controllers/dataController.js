import dataModel from "../models/dataModel.js"

export const getDataController = async (req, res) => {
    try {
        const data = dataModel.find()
        if (data) {
            console.log(data)
            return res.status(201).send({
                message:"hello",
                success:true
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"how r u"
        })
    }
}
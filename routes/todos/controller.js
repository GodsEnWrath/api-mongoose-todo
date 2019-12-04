const { Todos } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Todos.find({
                email: req.params.email
            
            }).populate("user");

            res.status(200).json({
                message: "Show data todos",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    addOne: async (req, res) => {
        console.log(req.params);
        
        try {
            const result = await Todos.create(req.body);
            

            res.status(200).json({ message: "Add new Todo", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    deleteOne: async (req, res) => {
        const id = req.params
        console.log(id);
        
        try {
            const result = await Todos.deleteOne({ _id: id.id }, function (err) {
                if (err) return handleError(err);
                // deleted at most one tank document
              });
            

              res.json({ message: "Add new Todo", data: result });
        } catch (error) {
            console.log(error + "ada yg error");
        }
    },
    updateOne: async (req, res) => {
        const id = req.params
        console.log(id);
        
        try {
            const result = await Todos.updateOne({ _id: id.id }, (req.body), function(err, res) {
                // Updated at most one doc, `res.modifiedCount` contains the number
                // of docs that MongoDB updated
              });
              
            

              res.json({ message: "Add new Todo", data: result });
        } catch (error) {
            console.log(error + "ada yg error");
        }
    }

}





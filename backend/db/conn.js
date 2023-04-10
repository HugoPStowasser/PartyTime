const mongoose = require("mongoose");

const main = async () => {
    try{
        mongoose.set("strictQuery", true)

        await mongoose.connect("mongodb+srv://hstowasser:<senha>@cluster0.sosxh7p.mongodb.net/?retryWrites=true&w=majority")
        console.log("Conectado ao banco!")
    }
    catch(error) {
        console.log(`Erro:  ${error}`)
    }
};

module.exports = main;


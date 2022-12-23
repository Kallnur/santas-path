import express from "express";

const PORT = process.env.PORT || 5050;

const app = express();

app.use(express.json())

const startApp = () => {
    try{
        app.listen(PORT, () => {console.log("server work");})
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
}

startApp()
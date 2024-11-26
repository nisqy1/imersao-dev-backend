import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
await conectarAoBanco(process.env.STRING_CONEXAO)

const posts = [
{id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150"},
{id: 2, descricao: "Gato panqueca", imagem: "https://placecats.com/millie/300/150"},
{id: 3, descricao: "Gato fazendo Yoga", imagem: "https://placecats.com/millie/300/150"},
]
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.json())

routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

function getTodosPosts() {

}

app.get("/posts", async (req,res) => {
    const posts = await getTodosPosts()
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return  posts.findIndex((post) => {
        post.id === Number(id)
    })

}

app.get("/posts/:id", (req,res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts);
});
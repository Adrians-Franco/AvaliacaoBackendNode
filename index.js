
import express from"express"

const app = express();  



app.get("/api/exercicio", (req, res) => {
 
    const nome = req.query.nome
    console.log(req.params)
    

});


app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
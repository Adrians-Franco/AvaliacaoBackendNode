
import ServiceExercicio from "../service/exercicio.js"

class ControllerExercicio{

Exercicio(req, res){

    try {

        const num1 = req.body.num1
        const num2 = req.body.num2
        const result = ServiceExercicio.Soma(num1,num2)
        res.status(200).send({num1,num2,result})

    } catch (error) {
        res.status(400).send({ 
            msg: error.message,
            data: null,
            error: true
         })
    }
    
}
}

export default new ControllerExercicio()
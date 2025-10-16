import express from "express"
import ControllerExercicio from "../controller/exercicio.js"

const router = express.Router()

router.post('/somar', ControllerExercicio.somar)

router.post('/subtrair', ControllerExercicio.subtrair)

router.post('/multiplicar', ControllerExercicio.multiplicar)

router.post('/dividir', ControllerExercicio.dividir)

router.post('/raiz', ControllerExercicio.raiz)

router.post('/potencia', ControllerExercicio.potencia)

export default router
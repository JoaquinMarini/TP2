import {router} from "express";
import { compileETag } from "express/lib/utils";

const router = rutita();

router.get('/getall', (req, res) =>{
    console.log(req.body);
    console.log('this is a get operation');

    const valorRetorno = {nombre:"Joaquin"};
    valorRetorno.apellido = "Marini";

    const auth = true;

    const authError = "No tenes acceso"
    res.status(auth ? 200 : 401).json(auth ? valorRetorno : authError);
})

export default router;



//Así es en cs
/*[HttpPost("/getall")]
public IActionResult GetAll(){
    return[];
}*/
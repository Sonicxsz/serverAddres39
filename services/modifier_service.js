import { Modifier } from "../entities/modifier.js"
import { modifierRepo } from "../repository/modifiers_repo.js"

const {Create,Delete} = modifierRepo

export const AddModifier = async (req, res) => {
    const {item_id, option_name} = req.body
    const modifier = new Modifier(item_id, option_name)


    const [hasError, errors] = modifier.isValid()

    if(hasError) {
        res.status = 400
        res.send(`Data is not valid. ${errors.join(" ")}`)
        return
    }

    const result = await Create(modifier)

     if(result.ok) {
        res.send("Modifier successfully created id: " + result.data)
        return
     }

    
     res.status = 500
     res.send(result.data)
}


export const DeleteModifier = async(req, res) => {
    const id = parseInt(req.params.id)

    if(!id) {
        res.status = 400
        return res.send("Modifier id is not provided")
    }
    
    const result = await Delete(id)
    

    if(!result.ok) {
       res.status = 500
       res.send(result.data)
       return
    }


    res.status = 200
    res.send(result.data)
}

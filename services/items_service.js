import { Item } from "../entities/item.js"
import { itemsRepo } from "../repository/items_repo.js"
import { modifierRepo } from "../repository/modifiers_repo.js"


const {
    Create,
    Delete,
    GetAll
} = itemsRepo




export const AddItem = async (req, res) => {
    const {image_url, name, description, count, grams, price, category_id} = req.body
    const category = new Item(image_url, name, description, count, grams, price, category_id)


    const [hasError, errors] = category.isValid()

    if(hasError) {
        res.status = 400
        res.json({success: false, message: `Data is not valid. ${errors.join(" ")}`})
        return
    }

    const result = await Create(category)

     if(!result.ok) {
          res.status = 500
          res.json({success: false, data: result.data})
          return
     }

     res.status = 200
     res.json({success: true, data: "Item successfully created id: " + result.data})
}


export const GetAllItems = async(req, res) => {
    const result = await GetAll()
    if(!result.ok) {
        res.status = 500
        res.json({success: false, data: result.data})  
        return
    }

    const modifiers = await modifierRepo.GetAll()
    if(!modifiers.ok) {
        res.status = 500
        res.json({success: false, data: modifiers.data})   
        return
    }



    const itemsWithModifiers = result.data.map(item => {
        const itemModifiers = modifiers.data.filter(modifier => modifier.item_id == item.id)
        return {...item, modifiers: itemModifiers}
    })

    res.status = 200
    res.json({success: true, data: itemsWithModifiers})
}



export const DeleteItem = async(req, res) => {
    const id = parseInt(req.params.id)

    if(!id) {
        res.status = 400
        return res.json({success: false, message: "category id is not provided"})
    }
    
    const result = await Delete(id)

    if(!result.ok) {
       res.status = 500
       res.json({success: false, data: result.data})
       return
    }


    res.status = 200
    res.json({success: true, data: result.data})
}


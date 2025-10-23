export class Item {
    constructor(image_url, name, description, count, grams, price, category_id) {
        this.image_url = image_url || ""
        this.name = name || ""
        this.description = description || ""
        this.count = 1
        this.grams = grams || 0
        this.price = price || 0
        this.category_id = category_id || null
    }

    
    isValid(){
        const errors = []       

        if(this.name.length < 5 || this.name.length > 255) {
            errors.push({
                message:"FIELD: name - must be greater than 5 and less than 255, got: " + this.name.length,
                field: "name"
            })
        }

        if(this.grams < 20) {
            errors.push({
                message:"FIELD: grams - must be greater than 20, got: " + this.grams,
                field: "grams"
            })
        }

        if(this.price < 50) {
            errors.push({
                message:"FIELD: price - must be greater than 50, got: " + this.price,
                field: "price"
            })
        }

        if(!this.category_id) {
            errors.push({
                message:"FIELD: category_id - must be provided and greater than 0, got: " + this.category_id,
                field: "category_id"
            })
        }

        // TODO ВАЛИДАЦИЯ ССЫЛКИ НА ИЗОБРАЖЕНИЕ

        return [errors.length > 0, errors]
    }
}



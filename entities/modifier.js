export class Modifier {
    constructor(item_id, option_name) {
        this.option_name = option_name || ""
        this.item_id = item_id || null
    }

    isValid(){
        const errors = []

        if(this.option_name.length < 3 || this.option_name.length > 255) {
            errors.push("FIELD: option_name - must be greater than 3 and less than 255, got: ", this.option_name.length)
        }   
        if(!this.item_id) {
            errors.push("FIELD: item_id - must be provided, got: ", this.item_id)
        }

        return [errors.length > 0, errors]
    }

}

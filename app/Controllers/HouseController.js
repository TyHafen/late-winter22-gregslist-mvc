
import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Components/Houseform.js"
import { houseService } from "../Services/HouseService.js"


function _draw() {
    let template = ''
    ProxyState.houses.forEach(h => template += h.Template)
    document.getElementById('listing').innerHTML = template
}


export class HouseController {
    constructor() {
        ProxyState.on('houses', _draw)
    }

    viewHouse() {
        _draw()
        document.getElementById('modal-body-slot').innerHTML = getHouseForm()
    }
    createHouse(event) {
        event.preventDefault()
        let form = event.target
        let newHouse = {
            beds: form.beds.value,
            baths: form.baths.value,
            sqFeet: form.sqfeet.value,
            price: form.price.value,
            imgUrl: form.imgUrl.value
        }
        console.log(newHouse)
        houseService.createHouse(newHouse)
        let modal = document.getElementById('new-listing')
        form.reset()
        bootstrap.Modal.getOrCreateInstance(modal).hide()
    }
    deleteHouse(houseId) {
        houseService.deleteHouse(houseId)
    }

}

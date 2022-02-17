import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js"

class HouseService {
    constructor() {
    }
    createHouse(newHouse) {
        let realHouse = new House(newHouse)
        ProxyState.houses = [realHouse, ...ProxyState.houses]
    }
    deleteHouse(houseId) {
        let indexToDelete = ProxyState.houses.findIndex(h => h.id == houseId)
        ProxyState.houses.splice(indexToDelete, 1)
        ProxyState.houses = ProxyState.houses
    }


}


export const houseService = new HouseService()
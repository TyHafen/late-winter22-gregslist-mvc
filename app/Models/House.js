import { generateId } from "../Utils/generateId.js";


export class House {
  constructor({ beds, baths, sqFeet, price, imgUrl }) {
    this.Id = generateId(),
      this.beds = beds,
      this.baths = baths,
      this.sqFeet = sqFeet,
      this.price = price,
      this.imgUrl = imgUrl

  }
  get Template() {
    return `
            <div class="col-md-4">
              <div class="bg-white rounded shadow">
                <img class="img-fluid rounded-top"
                  src="${this.imgUrl}" alt="">
                <div class="p-3">
                  <p>beds: ${this.beds}</p>
                  <p>baths: ${this.baths}</p>
                  <p>sqFeet: ${this.sqFeet}</p>
                  <p>price: ${this.price}</p>
                </div>
                <button class="btn btn-outline-danger" onclick="app.houseController.deleteHouse('${this.id}')"> delete </button>
              </div>
            </div>
        `
  }







}
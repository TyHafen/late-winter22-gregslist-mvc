export function getHouseForm() {
    return `
            <form class="row p-3 " onsubmit="app.houseController.createHouse(event)" action="">
          <h3 class="col-12">Create a house</h3>
          <div class="mb-3 col-6">
            <label for="" class="form-label">Beds</label>
            <input required type="text" class="form-control" name="beds" id="beds" aria-describedby="helpId" placeholder="">
          </div>
          <div class="mb-3 col-6">
            <label for="" class="form-label">Baths</label>
            <input  required type="text" class="form-control" name="baths" id="baths" aria-describedby="helpId" placeholder="">
          </div>
          <div class="mb-3 col-6">
            <label for="" class="form-label">sqFeet</label>
            <input  required type="text" class="form-control" name="sqfeet" id="sqfeet" aria-describedby="helpId" placeholder="">
          </div>
          <div class="mb-3 col-6">
            <label for="" class="form-label">price</label>
            <input  required type="text" class="form-control" name="price" id="price" aria-describedby="helpId" placeholder="">
          </div>
                    <div class="mb-3 col-6">
            <label for="" class="form-label">image</label>
            <input  required type="text" class="form-control img-fluid" name="imgUrl" id="imgUrl" aria-describedby="helpId" placeholder="">
          </div>
               <button class="col-4" >Create</button>
        </form>
    `
}
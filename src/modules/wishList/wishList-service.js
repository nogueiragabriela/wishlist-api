import WishListRepository  from "./wishList-repository.js"

class WishListService {
    constructor(){
        const repository = new WishListRepository()
    }

    async create(data) {
        const {name, products} = data;
        const nameExists = await this.repository.getByName(name)
        if (nameExists) {
            throw new Error("You already have a wishlist with this name!")
        }
        if (products.length === 0){
            throw new Error("You can't create a wishlist without at least one product!")
        }
        for(let i=0; i < products.length; i++) {
            for(let j=i+1; j < products.length; j++){
                if(products[i].id === products[j].id) {
                    throw new Error("You have repeated products in your wishlist!")
                }
            }       
        }
        //Regra para o cliente para verificar se o cliente informado já é cadastrado?
        //Regra para o produto para verificar se o(s) produto(s) informado(s) já é/sao cadastrado(s)?
        
        return await this.repository.create(data)
    }
    async update(id, data) {
        return await this.wishListModel.update(id, data)
    }

    async delete(id) {
        return await this.wishListModel.delete(id)
    }
    async get(id) {
        return await this.wishListModel.get(id)
    }
}


export default WishListService
   

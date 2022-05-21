import ProductService from './product-service'


class ProductController {

    create(data) {
        try {
            const productService = new ProductService()
            return productService.create(data)
        }
        catch (err) { }
    }

    update(id, data) {
        try {
            const productService = new ProductService()
            return productService.update(id, client)
        } catch (err) { }
    }

    delete(id) {
        try {
            const productService = new ProductService()
            return productService.delete(id)
        } catch (err) { }
    }

    listAll(page, limit, params) {
        try {
            const productService = new ProductService()
            return productService.listAll(page, limit, params)
        } catch (err) { }
    }

    listById(id) {
        try{
            const productService = new ProductService()
            return productService.listById(id)
        } catch {}
    }

    listByEmail(email) {
        try {
            const productService = new ProductService()
            return productService.getByEmail(email)
        } catch (err) { }
    }
        
}


export default ProductController
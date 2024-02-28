import Route from '@ember/routing/route';
//import { service } from '@ember/service';

export default class IndexRoute extends Route {
    //@service store;
    
    async model() {
        const response = await fetch('https://dummyjson.com/products');
        const photos = await response.json();
        const productsWithMainImage = photos.products.map(product => {
            return {
              ...product,
              image: product.images[0] 
            };
          });
        return productsWithMainImage;
    }
}
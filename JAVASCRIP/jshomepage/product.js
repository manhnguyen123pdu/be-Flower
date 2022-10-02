class product{
    nameProduct;
    image;
    price;
    constructor(nameProduct,image,price){
        this.nameProduct=nameProduct;
        this.image=image;
        this.price=price;
    }
}

let listProduct=[
    new product("Quisque eu mauris","https://themes.muffingroup.com/be/flower2/wp-content/uploads/2021/04/flower2-products-pic12-300x300.jpg",'1-6'),
    new product("Bibendum turpis porttitor",'https://themes.muffingroup.com/be/flower2/wp-content/uploads/2021/04/flower2-products-pic11-300x300.jpg','2-5'),
    new product("Praesent lacinia","https://themes.muffingroup.com/be/flower2/wp-content/uploads/2021/04/flower2-products-pic10-300x300.jpg","3-4"),
    new product("Donec faucibus scelerisque","https://themes.muffingroup.com/be/flower2/wp-content/uploads/2021/04/flower2-products-pic9-300x300.jpg","2-3"),
    new product("Mattis ipsum lorem","https://themes.muffingroup.com/be/flower2/wp-content/uploads/2021/04/flower2-products-pic8-300x300.jpg","1-6"),
    new product("Primis in purus","https://themes.muffingroup.com/be/flower2/wp-content/uploads/2021/04/flower2-products-pic7-300x300.jpg","1-6"),
    new product("Accumsan sit amet","https://themes.muffingroup.com/be/flower2/wp-content/uploads/2021/04/flower2-products-pic6-300x300.jpg","1-6"),
    new product("Amet purus non","https://themes.muffingroup.com/be/flower2/wp-content/uploads/2021/04/flower2-products-pic5-300x300.jpg","1-6"),
    new product("Accumsan sit amet","https://themes.muffingroup.com/be/flower2/wp-content/uploads/2021/04/flower2-products-pic6-300x300.jpg","1-6"),
    new product("Amet purus non","https://themes.muffingroup.com/be/flower2/wp-content/uploads/2021/04/flower2-products-pic5-300x300.jpg","1-6"),
    new product("Laculis suscipit blandit","https://themes.muffingroup.com/be/flower2/wp-content/uploads/2021/04/flower2-products-pic4-300x300.jpg","1-6"),
    new product("Suspendisse bibendum","https://themes.muffingroup.com/be/flower2/wp-content/uploads/2021/04/flower2-products-pic4-300x300.jpg","1-6"),
]

// đẩy lên local storage
localStorage.setItem('localListProduct', JSON.stringify(listProduct))
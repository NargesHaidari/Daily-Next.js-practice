let products = [
    {id: 1, name: 'product a', price: '100'},
    {id: 2, name: 'product b', price: '200'},
]


export async function GET(){
    try{

        return Response.json(products,
            {status: 200}
        )

    }catch(error){

        return Response.json(
            {"error": error.message},
            {status: 500}
        )

    }
}

export async function POST(request){
    try{

        let newProduct = await request.json();
        products.push(newProduct);
        return Response.json(
            {products},
            {status: 201}
        )

    }catch(error){
        return Response.json(
            {"error": error.message},
            {status: 500}
        )
    }
}

export async function PUT(request){
    try{

        let updatedProduct = await request.json();
        let index = products.findIndex(
            (product)=> product.id == updatedProduct.id
        )

        if(index == -1){
            return Response.json(
                {"alert": "not found"},
                {status: 404}
            )
        }

        products[index] = updatedProduct;
        return Response.json(products,
            {status: 200}
        )

    }catch(error){
        return Response.json(
            {"error": error.message},
            {status: 500}
        )
    }
}

export async function DELETE(request){
    try{

        let deletedProduct = new URL(request.url).searchParams.get('id');
        products = products.filter(
            (product)=> product.id != Number(deletedProduct)
        )
        return Response.json(products,
            {status: 200}
        )

    }catch(error){

        return Response.json(
            {"error": error.message},
            {status: 500}
        )

    }
}
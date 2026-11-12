export async function GET(){
    try{
        throw new error()
        return Response.json(
            {message: 'success'},
            {status: 200}
        );
    }catch(e){
        console.error(e)
        return Response.json(
            {message: 'failed'},
            {status: 500}
        )
    }
}
const ApiResponse = {
    _200: (message,status)=>{
        return{
            statusCode:200,
            body:JSON.stringify(
                {
                    message,
                    status
                }
            )

        }
    },
    _500:(message,status)=>{
        return{
            statusCode:500,
            body:JSON.stringify(
                {
                    message,
                    status
                }
            )

        }
    }
    
}
module.exports.ApiResponse=ApiResponse;
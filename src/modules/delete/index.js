const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const {ApiResponse}=require("../../common/apiresponse");
const {_200,_500}=ApiResponse;

const deleteData = async(id) =>
{
    const params = {
        TableName:"users",
        Key:{
            id:id,
            }
            
        
        
    }
    try {
        const res = await docClient.delete(params).promise();
        console.log(res);
        return _200("Success",true)
    } catch (e) {console.log("Error",e)
    return _500("Failure",false)
}
}
exports.handler = async (event) => {
    console.log(event);
    const {id}= JSON.parse(event.body);
    return await deleteData(id)
};
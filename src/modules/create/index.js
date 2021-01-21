const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const {ApiResponse}=require("../../common/apiresponse");
const {_200,_500}=ApiResponse;

const insertData = async(id,firstname,lastname) =>
{
    const params = {
        TableName:"users",
        Item:{
            id:id,
            firstname:firstname,
            lastname:lastname
        }
        
        
    }
    try {
        const res = await docClient.put(params).promise();
        console.log(res);
        return _200("Success",true)
    } catch (e) {console.log("Error",e)
return _500("Failure",false)
}
}
exports.handler = async (event) => {
    console.log(event);
    const {id,firstname,lastname}= JSON.parse(event.body);
    return await insertData(id,firstname,lastname)
    
};
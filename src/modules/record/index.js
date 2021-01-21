const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const {ApiResponse}=require("../../common/apiresponse");
const {_200,_500}=ApiResponse;

const queryData = async(id) =>
{
    const params = {
        TableName:"users",
        KeyConditionExpression:"id = :id",
        ExpressionAttributeValues:{
            ":id":id
        }
        
        
    }
    try {
        const res = await docClient.query(params).promise();
        console.log(res);
        return _200("Success",true)
    } catch (e) {console.log("Error",e)
    return _500("Failure",false)
}
}
exports.handler = async (event) => {
    
    const {id}= JSON.parse(event.body);
    return await queryData(id)
};
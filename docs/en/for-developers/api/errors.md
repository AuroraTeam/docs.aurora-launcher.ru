# List of error codes

`100` - **Request parsing error**  
Most likely, you sent an invalid request to the Launcher Server

`101` - **Request UUID not defined / Request type not defined**  
Most likely, you did not provide a UUID or request type

`102` - **Unknown request type**  
The request type you are trying to send does not exist

`103` - **primaryProvider not defined**  
primaryProvider is not specified or is invalid

`200` - **Authorization denied**  
Authorization was denied by the Launcher Server (when using RejectAuthProvider)

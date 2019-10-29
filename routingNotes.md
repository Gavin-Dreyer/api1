## Routing Notes

[ client ] == makes a request to an == [ api ] == sends a response back to the == [ client ]

what is interface for web api? ==> 

- URI (Uniform Resource Identifier),
- URL (Universal Resource Locator), 
- Endpoint, 
- HTTP === network protocol, a set of rules for communication 

REST(ish)

- everything is a `Resource`
    - Resources for slack
        - avatar
        - messages
        - channels
        - users 
- single URI per resourse ex: http://web23.com/channels, http://web23.com/users
- use HTTP METHODS to perform operations on resources
- hypermedia (at this level we are fully RESTful)

|Non REST|REST|
|:--|:--|
|/listAllChannels| GET /channels|
|/createChannel| POST /channels|
|/updateChannel| PUT /channels|
|/deleteChannel| DELETE /channels|
|/findChannel?id=123| GET /channels/123|


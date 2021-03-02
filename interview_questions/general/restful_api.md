What is an API?

Application Program Interface
Client Side/Server Side
- API is a waiter that takes requests and get's information from the database, and returns a response


Representational State Transfer
standardized architectural
- relies on a stateless, client-server protocol
- treats server objects as resources that can be created or destroyed
- can be used by virtually any programming language because it uses HTTP
- high performance, caching

HTTP Methods:
EACH request is STATELESS - doesnt transfer from previous request 



GET - retrieves data from a specified source
    - webbrowsing
POST - submit data to be processed to a specified
    - filling out a form
PUT - update a specified resource
Delete - delete a specified resource

Endpoints
GET and POST have similar endpoints
some times you need authentication to get to the endpoint, i.e. OAUTH

SERVER SIDE - CLIENT SIDE
----------------
CREATE - POST
READ - GET
UPDATE - PUT
DELETE - DELETE
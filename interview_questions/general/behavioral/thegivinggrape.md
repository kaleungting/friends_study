Projects That I've Worked On AT TGG

Helped build the organization from the ground up

- In-house verification process
  - sendgrid email validation was too expensive
    - would have costed extra $90 per month
  - so we decided to build an inhouse process
    - creating an two extra columns to the users as they built an account that randomizes a string
    - sends an email with that string to the user
    - the user then has to go on our website and type the string they see in order to activate their accounts

  

- Categories Filter
  - a lot of donors were donating to our community fund (which is a pool of money that we use to donate to requests instead of donating directly to donees)
  - I sat down with the founder to discuss what we can do to combat it
  - Designed a system where we add tags/categories to the requests 
  - and using Active Record Querying on the rails backend so that donors can filter categories
  - implemented this change and saw more direct donor to donee interaction

We are in the middle of restructuring our code
- our user accounts were all donees 
- but we are in the process of adding a DONOR TYPE account
  - things that we have to reconsider
    - does it make sense to create a new MODEL for DONORs?
    - or does it make sense to add a column to our current USER MODE, to differentiate user types
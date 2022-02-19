## Recipe App -- MERN Project

#Session storage
This will be done through a UUID saved locally to the client and whenever they connect to the site it will check localStorage and send a session request to our backend, then it will save that ID as active in the login database and when the person leaves the frontend will send a cancel session request

#Routes

| Endpoint | Type | Action |
| / | GET | Grabs top recipes |
| / | POST | Adds new recipes |
| /:recipe | GET | Gets specific recipe with shown ingredients list |
| /:recipe | PUT | Updates specific recipe (admin use only) |
| /session/:uuid | PUT | Updates when a user is active (toggles based on DB value of activity) |
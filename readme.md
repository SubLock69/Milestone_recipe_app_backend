## Recipe App Backend (Failure)

# Session storage
This will be done through a UUID saved locally to the client and whenever they connect to the site it will check localStorage and send a session request to our backend, then it will save that ID as active in the login database and when the person leaves the frontend will send a cancel session request

# Routes

| Endpoint | Type | Action |
| / | GET | Grabs top recipes |
| / | POST | Creates new user profile in DB for saving of favorites |
| /:uuid | GET | Grabs a users profile data for the front end to use |
| /:uuid | PUT | Updates when a user is active (toggles based on DB value of activity) |
| /:uuid/favorites | GET | Grabs favorite recipes for user |
| /:uuid/favorites | POST | Create new favorite for specific user |
| /:uuid/favorites/:id | GET | Gets specific recipe info for favorite recipe |
| /:uuid/favorites/:id |  | |

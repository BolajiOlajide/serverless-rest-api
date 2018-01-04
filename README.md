# Serverless REST API

## DESCRIPTION

I recently got curious about the possibility of having an API without an actual server. I got intrigued by a post I found on medium.
I decided to check out a tutorial on Serverless and here is the result. A RESTful API build with Serverless technology.

### GETTING STARTED

The application start process has been automated and the only thing you to worry about is ensuring you have a mongo DB database named `serverless` or better still update the `DATABASE_URL` in the `.env.example` file to the one you'd like to make use of.

Once this is done, run the application from your terminal with the shell script `run.sh`. Simply enter the command `./run.sh` in your terminal and follow the prompts.

The following routes are available in the application and can be accessed with any client of your choice. You can check out `POSTMAN`, `RESTMAN`.

| EndPoint                                 | Functionality                 | Public Access|
| -----------------------------------------|:-----------------------------:|-------------:|
| **GET** /hello                           | Register a user               |    TRUE      |
| **GET** /notes                           | GET all notes                 |    TRUE      |
| **POST** /notes                          | Create a new note             |    TRUE      |
| **GET** /notes/:id                       | GET a note by ID              |    TRUE      |
| **PUT** /notes/:id                       | UPDATE an existing note       |    TRUE      |
| **DELETE** /notes/:id                    | DELETE an existing note       |    TRUE      |

### LICENSE

MIT

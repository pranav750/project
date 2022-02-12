# project

### Prerequisite
- To run this application on any PC, all you need is <b> Docker </b> and <b> Git </b> installed on your PC and then follow the steps.
- There are total three docker images in this application and one docker compose file.

### Documentation
I have put all the APIs into a Postman collection including all the details about the collection and the APIs present in the application. 
https://www.getpostman.com/collections/4e1dc706574c17613730

### Setup
1. Clone this repository using
`git clone https://github.com/pranav750/project.git`

2. Go into the repository stored locally and open the terminal there.

3. Build the <b> React </b> app's container by the docker image using
`docker build -t react-app ./client`

4. Build the <b> Content </b> microservice by the docker image using 
`docker build -t content-service ./server/content`

5. Build the <b> User </b> microservice by the docker image using 
`docker build -t user-service ./server/user`

6. Build the docker compose file using 
`docker-compose up`

7. Go to the browser and open
`http://localhost:3000`

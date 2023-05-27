# Weatherapp

Web application url: https://weatherapp-frontend.victoriousocean-00c88e26.northeurope.azurecontainerapps.io/


## How to run the the containerised app locally 
### Prerequisites
* Docker deamon
* An environment variable containing your [openweathermap](http://openweathermap.org/) API key:   
`APPID=<API key>`

### Run containers manually
In the project root directory run  
* `docker build -t weatherapp_backend ./backend && docker run --rm -i -p 9000:9000 --name weatherapp_backend -t weatherapp_backend` to start the backend api
* `docker build -t weatherapp_frontend ./frontend && docker run --rm -i -p 8000:8000 --name weatherapp_frontend -t weatherapp_frontend` to start the frontend app

### Run containers using docker-compose
In the project root directory run `docker-compose up`

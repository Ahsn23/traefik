# traefik
To Do Steps for Running the ForwardAuTh using Traefik 

First run 
docker compose up --build

It will build a container which contains Traefik,Auth,api1x

Now for Traefik 
localhost:8080

 ![image](https://github.com/Ahsn23/traefik/assets/144908275/b2debeac-7f2a-49d8-8426-ec861276bd40)

We have already set our entrypoint :9980

So we have to hit using localhost:9980

Right now we have services running if you click the Service Explore tab ,you can see our auth and api1x services


As we defined in the api1x pathprefix we have to give PathPrefix(`/auth/username/{username:[a-z0-9A-Z-_]+}`) && Method(`GET`)

which means we have to give 

http://localhost:9980/auth/username/ahsan
It will redirect to fauth which we defind in docker-compose.yml

the auth service requires a token in header (bearer)

the token is  "Badami"

 ![image](https://github.com/Ahsn23/traefik/assets/144908275/0104ebf7-2d42-413d-bd8a-3df640411e9a)


If we dont give token then it will fail 
And we also have to define in the auth in docker compose .that what are we expecting in the headers from the main request which is 
http://localhost:9980/auth/username/ahsan

Only auth/username/{name] is defined so you have to give this type of request cause its defind in the pathprefix


You can see your terminal for the logs to see what is happining 





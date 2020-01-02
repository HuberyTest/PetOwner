## Setup development environment: 
    yarn or yarn install
    
## Run in development environment:
    yarn start



## Build for production:
    yarn run build:prod
    
    After the above command, we need a http server to consume the files in directory pet-owner/build.
    For instance, a config for nginx as below:
        location / {
            root /workspace/petOwner;  
            index index.html;
        }

    build:prod will set the environment variable REACT_APP_ENV = prod. The variable is check in /src/mock/config.js. When REACT_APP_ENV is equal to prod, all calls fall through to the network, effectively disabling fetch-mock.

## Config variables
    specify url for the list source in src/config.js.




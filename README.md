# MeteALOlogia-frontend
Frontend service of the "MeteALOlogia" project. 
The project's goal is to sustain a web of weather stations. 
Measurements will be accessible through this website.
For now, it's hosted on http://mini0nki.duckdns.org:10200/

## Run locally
1. Installation
   1. First ensure you have node npm installed.
   2. `npm install` will install the dependencies.
2. Configuration
   1. A sample development configuration is provided in `.env.development`. You can override it with your own `.env.development.local`. Any env file can be used, but corresponding vite `--mode` flag has to be passed.
3. `npm run dev` runs a development server.

## Deployment
1. Build the image with docker.
2. Run the image. Remember to apply following options:
   - Bind desired port to 80 in the container.
   - Bind `.env` file (production build runs `.env` **without** any mode suffix).
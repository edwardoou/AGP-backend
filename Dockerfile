#Every Dockerfile must begin with a FROM directive. The Docker node image comes with a non-root node user by default 
#that you can use to run your application container as root.
FROM node:16

#We will create the node_modules subdirectory inside the /home/node along with the app directory to help streamline 
#the permissions for the application code. Creating these directories ensures that they have the right permissions 
#when we run the npm install command locally inside the containers. Once you have created the directories, 
#you must set ownership on them to the node user. 
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

#set the working directory by adding the following line
#It’s a good idea to always set the WORKDIR so that Docker does not have to create one by default.
WORKDIR /home/node/app

#It’s recommended to add the COPY instruction before running npm install or copying application source code. 
#It allows you to take advantage of Docker’s caching mechanism. During the build process, 
#Docker checks whether it has a layer cached for every instruction. This means that if you have not changed the package.json file,
#then Docker will use the existing imager layer and avoid reinstalling node modules, hence faster build processes.
COPY package*.json ./

COPY --chown=node:node package.json .

#Our container is now ready to run the npm install command. Add the following line to the Dockerfile:
RUN npm install

#Once node_modules have been installed, add the following line that will tell Docker to copy the application 
#code into the application directory on the container with the right permissions and ownership, i.e. the non-root node user:
COPY --chown=node:node . .

USER node
#The last step is to expose the port on the container, as we had defined in our entry index.js file:
EXPOSE 4000

#CMD runs the command to start the application, in this case, node src/index.js.
CMD [ "node", "run","dev" ]

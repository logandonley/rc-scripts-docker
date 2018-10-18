# Rocket.Chat Docker + Built-in hubot scripts

Throw any hubot scripts into the scripts directory and then build out the Dockerfile with:

`docker build -t DESIRED_NAME .`

Due to the nature of Rocket.Chat, the internal hubot configuration isn't set automatically, so the configuration needs to be manually added.

To do this, set the directory path to /opt/scripts and list which scripts you want added.

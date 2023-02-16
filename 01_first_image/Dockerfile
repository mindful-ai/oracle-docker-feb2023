# Objective: Creating a custom redis based image
# Specify an existing base image: alpine
FROM alpine

# Download the dependencies
RUN apk add --update gcc
RUN apk add --update redis

# Tell the image what to do
CMD ["redis-server"]
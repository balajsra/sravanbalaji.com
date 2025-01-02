set shell := ["bash", "-c"]

HOST_PORT := "1280"

# List just commands by default
default:
    @just --list

# Build the docker image
docker-build:
    docker buildx build \
        -f ./docker/Dockerfile \
        --tag 11ty:latest \
        .

# Run development server
dev: docker-build
    docker run \
        -it \
        -p {{HOST_PORT}}:8080 \
        -v ./src:/opt/app/src \
        -v ./.eleventy.js:/opt/app/.eleventy.js \
        11ty:latest \
        npx @11ty/eleventy --serve

# Build static site files
build-site: docker-build
    docker run \
        -it \
        -v ./src:/opt/app/src \
        -v ./dist:/opt/app/dist \
        -v ./.eleventy.js:/opt/app/.eleventy.js \
        11ty:latest \
        npx @11ty/eleventy

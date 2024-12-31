set shell := ["bash", "-c"]

# List just commands by default
default:
    @just --list

# Build image
build:
    docker buildx build -f ./docker/Dockerfile --tag 11ty:latest .

# Run development server
dev: build
    docker run -it -p 1280:8080 11ty:latest npx @11ty/eleventy --serve

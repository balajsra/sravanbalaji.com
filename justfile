set shell := ["bash", "-c"]

PORT := "1280"

# List just commands by default
default:
    @just --list

# Update development environment
update:
    devenv update
    npm update

# Run development server
dev:
    npx @11ty/eleventy --serve --port={{ PORT }};

# Build static site files
build-site:
    npx @11ty/eleventy

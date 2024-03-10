set shell := ["bash", "-c"]

default:
    @just -l

# Build website in public folder
hugo-build:
    hugo

# Delete public folder and build
hugo-clean-build: && hugo-build
    rm -rf public

# Start hugo development server with full rebuilds
hugo-server:
    hugo server --disableFastRender

# Add a new page to site where filename is PATH/TO/file.md for example
hugo-add-content filename:
    hugo new content {{filename}}

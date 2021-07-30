# Mitch Fenner's Personal Website

[![Publish container](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishContainer.yaml/badge.svg)](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishContainer.yaml)
[![Publish site](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishSite.yaml/badge.svg)](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishSite.yaml)

I'm more interested in DevOps than front-end development, so I'm using this site as an opportunity to play with CI/CD pipelines, Docker, and cloud hosting platforms.

## Links
GitHub pages: [mitchfen.xyz](https://mitchfen.xyz)  
Azure: [mitchfen-xyz-container.azurewebsites.net](https://mitchfen-xyz-container.azurewebsites.net)

## How I automate it

- When code is pushed to the main branch, the [publish workflow](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishSite.yaml) creates a production build, and publishes to gh-pages.
- Upon success of the publish workflow, a [second workflow](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishContainer.yaml) builds and pushes my Docker image to the GitHub container registry.

## How to serve the site locally

```bash
# Using Docker
sudo docker run --rm -p 80:80 ghcr.io/mitchfen/mitchfen.github.io:latest
```

```bash
# Using npm
git clone https://github.com/mitchfen/mitchfen.github.io.git
cd mitchfen.github.io
npm ci
npm start
```


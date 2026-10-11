---
title: Documentation
layout: layouts/content-only.html
---

# Introduction

My idea for this website started simply as a way for me to present my professional portfolio. As I started learning HTML and looking at other websites for inspiration, I decided to make it my own and add in the personal page with some of my recommendations and favorite things. Additionally, I noticed that very few people had any documentation on how/where they learned web design. While git repos were generally made public, it was hard for someone to understand what was going on if they weren't already familiar with the framework or language being used. Thus, I decided to create a documentation page which will hopefully help others who are interested in making their own website do so using what I have learned from friends I have talked to. It also helps me save some useful links in a way that others can see and understand the use case for.

This website was originally designed in HTML with some CSS for styling. However, I ran into issues with scalability and mobile browser support. See [Web Design](#web-design) below for my current implementation method and some other cool things that I have discovered through my learning process that you may find interesting.

# Website Hosting

## Purchasing a Domain Name

There are plenty of sites where you can purchase a domain. I have used [Google Domains](https://domains.google.com/) and [namecheap](https://www.namecheap.com/) in the past. I'm currently using [Cloudflare Registrar](https://www.cloudflare.com/domains/) because it's widely used and comes with [Cloudflare DNS](https://www.cloudflare.com/products/dns/), which offers a ton of great features.

## Hosting Website

There are plenty of ways to host a website. As a University of Michigan student, you have the option to create a personal site hosted by Google or hosted on U of M servers as documented [here](https://websites.umich.edu/~umweb/how-to/homepage.html). Otherwise, there's [GitHub Pages](https://pages.github.com/) to host my website directly from a GitHub repository. This comes with the added benefit that changes are live as soon as you push them to the `main` branch of your `<username>.github.io` repository. I found [Trent Yang's post](https://trentyang.com/how-to-setup-google-domain-for-github-pages/) about setting up Google Domains for GitHub pages very useful.

After watching [Chris Titus](https://christitus.com/)'s [video](https://www.youtube.com/watch?v=Nz0c4d1lbMk) on website hosting, I decided to give [netlify](https://www.netlify.com/) a chance. You get the same benefit as GitHub pages with automated deployment of the website upon pushes to the git repo. A summary of the differences can be found [here](https://www.netlify.com/github-pages-vs-netlify/). The free tier was more than good enough for my use, but I eventually decided to self host the website.

This basically involves running a [web server](https://nginx.org/) on my own computer, using [Dynamic DNS](https://www.cloudflare.com/learning/dns/glossary/dynamic-dns/) to keep my DNS record updated, allowing public https traffic through my firewall, and making my website publicly accessible in my [reverse proxy](https://nginxproxymanager.com/).

# Web Design

## Bootstrap Framework

When I first made this website, it was implemented in HTML and CSS without the use of a framework. This gave me a lot of custom control over every aspect, but it made some things unnecessarily tedious and difficult. One example of this is the navigation bar. Trying to implement that without a framework is more difficult than it needs to be. Another issue I ran into was compatibility with mobile browsers. Per [Tianhong (Sam) Wen](https://www.linkedin.com/in/tianhongwen/)'s recommendation, I looked into [Bootstrap](https://getbootstrap.com/). This has built-in *responsive* classes that can auto adjust the size and placement of elements based on the screen size. It also provides an easy way to implement some cool features like the navbar, accordion-like cards, and a grid layout to easily place images and text around your website's viewport.

## 11ty

I soon realized that I didn't want to spend so much time writing HTML when the main thing I care about is the content of the website. Thus, I discovered [11ty](https://www.11ty.dev/). It's a very simple static site generate that allows you to write content in Markdown and setup HTML templates you can reuse that define where the content goes and how it is formatted.

# Aesthetics

## Color Scheme

<div class="row align-items-center">
  <div class="col-md-4">
    <img
      class="img-fluid mx-auto d-block"
      src="/assets/branding/color_palette.png"
    />
  </div>
  <div class="col-md-8">

Light mode uses the primary palette colors from [University of Michigan Design Resources](https://brand.umich.edu/design-resources/colors/) and some generated colors from [coolors](https://coolors.co/00274c-ffcb05-007bff-e8eef2-343434) (shown in the image).

Dark mode uses the [color palette](https://spec.draculatheme.com/#sec-Standard) specified by [Dracula theme](https://draculatheme.com/).

  </div>
</div>

## Logo

<div class="row align-items-center">
  <div class="col-md-2">
    <img
      class="img-fluid mx-auto d-block"
      src="/assets/branding/logo_with_name.png"
    />
  </div>
  <div class="col-md-2">
    <img
      class="img-fluid mx-auto d-block"
      src="/assets/branding/logo.png"
    />
  </div>
  <div class="col-md-8">

I designed my logo for free on [hatchful](https://hatchful.shopify.com/). The main purpose for this was to have a nice looking favicon for my website on browsers as well as for the home page icon in the navbar.

  </div>
</div>

## Inspiration

Content, design, and implementation were inspired by the following sources:

- [Prakash Kumar's Website](https://prakashk.com/)
- [Yash Vesikar's Website](https://vesikar.com/)
- [University of Michigan's Website](https://umich.edu/)
- [Dracula Theme](https://draculatheme.com/)

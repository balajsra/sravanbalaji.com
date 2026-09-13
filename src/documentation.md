---
title: Documentation
layout: layouts/content-only.html
---

# Introduction

My idea for this website started simply as a way for me to present my professional portfolio. As I started learning HTML and looking at other websites for inspiration, I decided to make it my own and add in the personal page with some of my recommendations and favorite things. Additionally, I noticed that very few people had any documentation on how/where they learned web design. While git repos were generally made public, it was hard for someone to understand what was going on if they weren't already familiar with the framework or language being used. Thus, I decided to create a documentation page which will hopefully help others who are interested in making their own website do so using what I have learned from friends I have talked to. It also helps me save some useful links in a way that others can see and understand the use case for.

This website was originally designed in HTML with some CSS for styling. However, I ran into issues with scalability and mobile browser support. See [Web Design](#web-design) below for my current implementation method and some other cool things that I have discovered through my learning process that you may find interesting.

# Website Hosting

## Purchasing a Domain Name

Per [Yash Vesikar](https://vesikar.com/)'s recommendation, I used [Google Domains](https://domains.google.com/) to purchase the [sravanbalaji.com](https://sravanbalaji.com/) domain for $12 per year.

More recently, I found that [namecheap](https://www.namecheap.com/), as the name implies, is cheaper. I was able to transfer the domain to their service for about $8 per year.

## Hosting Website

There are a couple of options I have found for hosting my website (for free). As a U of M student, I am able to create my own UM Web Page hosted on U of M Servers or create a personal site hosted by Google through the [U-M Google collaboration](http://google.umich.edu/). I have not looked into the Google Sites option, but there is [documentation](https://support.google.com/sites/) available if you are interested. I originally opted to create my own site and host it on U of M Servers. Information on how to do this can be found on the [UMICH Information and Technology Services website](http://www.umich.edu/~umweb/how-to/homepage.html). Some limitations I found with this were that I would have to manually upload my website files to the afs directory as the SFTP process described did not work for me. Additionally, the domain name for U of M hosted websites take the form `http://www-personal.umich.edu/~youruniqname/` which is clearly not ideal. You can sort of get around this by enabling [web forwarding](https://support.google.com/domains/answer/4522141?hl=en) on Google Domains. All this does is redirect traffic from your custom domain to the U of M domain. This might be ok for you, but I would prefer to have my website show up at the domain I purchased.

Per [Yash Vesikar](https://vesikar.com/)'s recommendation, I looked into [GitHub Pages](https://pages.github.com/) to host my website directly from a GitHub repository. This comes with the added benefit that changes are live as soon as you push them to the `master` branch of your `<username>.github.io` repository. I found [Trent Yang's post](https://trentyang.com/how-to-setup-google-domain-for-github-pages/) about setting up Google Domains for GitHub pages very useful.

After watching [Chris Titus](https://christitus.com/)'s [video](https://www.youtube.com/watch?v=Nz0c4d1lbMk) on website hosting, I decided to give [netlify](https://www.netlify.com/) a chance. You get the same benefit as GitHub pages with automated deployment of the website upon pushes to the git repo. A summary of the differences can be found [here](https://www.netlify.com/github-pages-vs-netlify/). For me, having the ability to preview deployments on development branches and rollback the site if I ever need to made this the obvious choice. Especially when considering that netlify also offers a generous free tier.

# Web Design

## Bootstrap Framework

When I first made this website, it was implemented in HTML and CSS without the use of a framework. This gave me a lot of custom control over every aspect, but it made some things unnecessarily tedious and difficult. One example of this is the navigation bar. Trying to implement that without a framework is more difficult than it needs to be. Another issue I ran into was compatibility with mobile browsers. Per [Tianhong (Sam) Wen](https://www.linkedin.com/in/tianhongwen/)'s recommendation, I looked into [Bootstrap](https://getbootstrap.com/). This has built-in *responsive* classes that can auto adjust the size and placement of elements based on the screen size. It also provides an easy way to implement some cool features like the navbar, accordion-like cards, and a grid layout to easily place images and text around your website's viewport.

## Reusing HTML

The easiest way I found to reuse HTML code is via JavaScript as described in [Page Headers and Footers](https://www.uvm.edu/~bnelson/computer/javascript/pageheadersandfooters.html). This is by no means the most elegant or automated, but it was the only method I could get to actually work. If you don't want to go through the hassle of manually removing line breaks, you can use this handy online text converter from [Text Fixer](https://www.textfixer.com/tools/remove-line-breaks.php).

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

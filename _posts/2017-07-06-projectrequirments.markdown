---
layout: post
title:  "Project requirements"
date:   2017-07-06 09:56:39 -0500
categories: jekyll project wildbookchase
---
Last time I talked about why I'm working on this project. In this post I will talk a little bit about the requirements and what I am trying to do.

As I mentioned last time, the reason, I've gone as far with this as I have is that I was able to overcome some of the barriers that have previously led me to not pursue setting up a Jekyll site as a way to have a cheap free site, and to up-skill.  I may not have explained them fully last time but I will mention them now in discussing the requirements of the project.

The purpose of the site I am building is to have a professional website. My experiences on the edges of some very fine UX firms, and communities has led me to realize that most websites have simple architectural requirements for their information. A long way of saying, professional "portfolio" sites as a general rule, need an extremely simple site structure. They need to look professional and get people where they need to go. Because I'm an academic, I want a place to post some half thoughts, and things that may not make it into my final work. So, I want a blog. I also want a publications/presentation page, which for an academic is basically our resume. Finally, I'd like it to have an about me section.  Jekyll is pretty perfect for this.

This is where things get complicated though. My hosting budget is $0. That means the only place I can host this site is Github Pages. Additionally, for both the "CV" page, and the individual posts it makes a lot of sense to automate citations (and their formatting) as much as possible. If I were hosting the site on my own web server, or paying for a host, I could use the well-developed Jekyll-Scholar plugin. This also saves me from having to convert my pre-existing BibTeX bibliography, to another format however, that plugin is not supported on Github pages. So I need a work around.

Which is where I am now. Developing my own work around. I was able to figure out how to export my bibliography from Zotero, as a JSON document. I also learned about the ability of Jekyll to allow developers to create a _data folder, and access data stored in CSV, JSON, and YAML formats.  

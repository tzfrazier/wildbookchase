---
layout: post
title:  "Making Progress in the Fight Against the Giant Knot!"
date:   2017-07-04 09:59:01 -0500
categories: jekyll wildbookchase project
---
Today was day 2.5, struggling against the same project. After Googling, and begging for help, and Googling some more I was able to figure out what the problem I was having was, and a partial solution.

So, the way that Zotero exports to JSON, authors metadata is treated as a single entity. This is expressed in the YAML file as something known as a map. Maps, are pains in the but to work with. Unfortunately, because the way the seed data in the JSON bib file is formatted it didn't make a different, which I used. In some ways this makes since, because the structures present preserves the semantic integrity of what is being described. However, it also makes it hard to work with hence the error.

What I learned today, is that you can use filters, in particular the map filter to pull data from maps as strings. Which still makes them hard to work with. Because now, you have a set of strings, rather then objects you can manipulate further.

The part of the knot I am on now, is figuring now that I can get the data in these fields to print. How do I get them to print in a way where I can format them, into a standardized citation format, in this case APA. There are 3 approaches as I see if from here.

First I can cheat, and break the semantic link, by changing the brackets and type of entities I'm dealing with in the JSON files. Rather than working with maps and JSON objects, by changing to mustache brackets, I can change this relationship to an array, which will be much easier to deal with. I'm not really sure what this does, so I don't want to do it. It's like cutting a tangle, when you might need to reuse the rope.

Second, the option that I have been exploring is to see if there is a way to create conditionals in the filter statements. I've just begun exploring this, but haven't been able to find anything yet, or perhaps more accurately grok anything yet. If I can figure this out, it will make writing the rest of the code into the template pretty easy, which means in a day or two I will have my workarounds, and can hype it. I will have mad forks.

Finally, I can rethink the entire thing, and just write a bunch of for and if loops, evaluating each entry in the bibliography, against a set of conditionals and rendering each code in a bespoke manner. This will be time consuming, and is likely to require a larger time commitment than I have. In all honestly, semantic integrity be damned, it will take me less time to edit an export format for Zotero, to make altering the relationships in the JSON bib a cinch. Working with arrays in liquid is pretty simple, so I don't think I will have a lot of problems accessing that data.  

So that's where I am. I will update this later, and this test run is a repo on Github, which as a side note, I became significantly more efficient with tonight

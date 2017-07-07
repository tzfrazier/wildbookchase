---
layout: post
title:  "Giant Knot Must Die!"
date:   2017-07-04 09:44:01 -0500
categories: jekyll wildbookchase project
---

I feel a bit like I've wandered down a narrow raveen and found the path blocked by a giant not of very tiny string. The only way out is to untangle the string, and every time I pull and untangle a bit, I realize how much more there still is to do. As I get frustrated I also discover more about the knot, and get better at untangling things. That is what keeps me from rage quitting via computer hurl.

So the first problem, was that the plugin wasn't supported. No problem I built a quick placeholder and forgot about the entire thing. Later I came back to Jekyll and realized with the data ability I might be able to work around the whole situation. Then I couldn't figure out how to convert BibTeX to the formats mentioned. So I spent some time poking at that. This was my mistake, because at this point I could have turned around and gone back my other side projects.

Instead, reading about parsers for BibTeX, I learned that Zotero, could probably do it. After some bad Google, I turned to Zotero itself and quickly discovered that you could export a bibliography as a JSON file. Now, I was locked in. After some initial trouble (the CSV exported by Zotero, wasn't formatted well for this) I was able to load in the JSON file, and I also used a simple online parser to convert that to YAML. So now I had it ready to go in two different formats. I found a good blog post on using data in Jekyll and set off to code. I was quickly able to achieve some measure of success, printing a list of titles. Other fields however, quickly proved more difficult.

Particularly difficult was the author: field. This field, stores two subfields, family: and given:. I couldn't call either field separately, but I could call, author:, which would dump a string like the following:

It was no good.

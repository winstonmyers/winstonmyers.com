Title: it's alive!
Author: Winston Myers
Date: 2023-09-06 22:01
Modified: 2023-09-06 22:01
Slug: first-post
Keyword: blog, python, AWS, S3, blogging
Category: webdev
Summary: A short summary of getting this blog up and running.


Recently I started mentoring a fledgling IT nerd and suggested that he try out the [Cloud Resume Challenge](https://cloudresumechallenge.dev/). So I figured I may as well do it too. Here we are.  This post is going to be a short summary of resources I used and my approach, though much of this is "canned".

## python for web development

I wanted to use `python` for this project, and [Pelican](https://getpelican.com/) seemed like a great library. I've been wanting to sharpen my `python` skills after spending a lot of time with `bash`.  While I am currently using Pelican to simply generate the website artifacts (HTML/CSS), eventually I'll want to try working with other more complicated technologies and so we'll see if Pelican sticks or if I end up needing an actual server.

## theme troubles

Initially I was having issues with finding a theme I liked.  So I tried to get this theme going, but was having trouble consistently changing the theme. Clearly I was doing something wrong. Yep, the default wasn't getting used by my Makefile and I didn't want to learn more about Jinja2 while simply getting the basic pages and menus setup.  But a little peeking around at how the `nav` tag was used by a template I did like pointed me towards a similar pelican variable used by the Flex theme. Eventually I'll comand brush back up on HTML/CSS, but for the time being this is sufficient.

## initial deployment

Using AWS Route53 and an S3 bucket for hosting, this is the easy part for me just a simple `aws s3 sync $PROJECT_DIR/output/ s3://winstonmyers.com`.  But I wanted a GitHub action to drive the build and deploy process.

## future plans

I'm hoping to make this a blog with some ideas on IT, music, anime, Star Trek, videogames, etc. But I'm terrible about posting so we'll see how this goes. Eventually I hope to add more projects to this site.

In the meantime, y'all be well!

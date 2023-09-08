# winstonmyers.com - documentation

This is a repository for my personal website.  This project uses `python3.10`, [Pelican](https://github.com/getpelican/pelican), and an ever more customized version of the [Flex](https://github.com/alexandrevicenzi/Flex) theme.

## development and testing

The following command has been useful for running the local pelican server as well as re-deploying changes after each save and cleaning up any files on exit.

``` shell
$ pwd
~/git/winstonmyers.com

nohup pelican --listen 2>&1 & pelican -r src/content -o output/ -t src/theme/ -D; make clean
```

## theme changes

I was having trouble with getthing the theme to include a paginated list of my blog posts on several pages. So minor changes were made to account for that as well as for showing social media more clearly.  

## configuration 

Most configuration changes are captured in the pelicanconf.py and publishconf.py. The goal is for page URIs to be automatically determined by location of the markdown file and it's slug.  

## deployment

The Makefile is designed to run a series of GitHub Actions to install dependencies, build the static HTML, and deploy it to AWS S3. Later on, this could get more complicated as server-side projects are added.


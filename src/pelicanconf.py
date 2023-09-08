SITEURL = 'http://localhost:8000'
RELATIVE_URLS = True
AUTHOR = 'winston myers'
SITENAME = 'winston myers'
SITETITLE = 'winston myers'
SITESUBTITLE = 'nerd. dog lover. musician. technologist'

THEME_COLOR = 'dark'
PATH = 'content'
TIMEZONE = 'America/Chicago'
DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DEFAULT_PAGINATION = 10
PAGINATED_TEMPLATES = {'index': 3, 'archives': None, 'category': None}
# DEFAULT_PAGINATION = False
YEAR_ARCHIVE_SAVE_AS = 'blog/{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = 'blog/{date:%Y}/{date:%b}/index.html'

ARTICLE_URL = 'blog/{date:%Y}/{date:%b}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = 'blog/{date:%Y}/{date:%b}/{date:%d}/{slug}/index.html'

PAGE_URL = 'pages/{slug}/'
PAGE_SAVE_AS = 'pages/{slug}/index.html'

CATEGORY_URL = 'category/{slug}/'
CATEGORY_SAVE_AS = 'category/{slug}/index.html'

PAGE_PATHS = ['pages']
DISPLAY_PAGES_ON_MENU = False
# PAGE_ORDER_BY = 'sortorder'

ARTICLES_PATHS = ['blog']

LINKS = (
    ("home", "/"),
    ("about", "/pages/about/#about"),
    ("archives", "/pages/archives/#archives"),
    ("projects", "/pages/projects/#projects"),
#    ("categories", "/categories.html"),
#    ("tags", "/tags.html"),
)

# Social widget
SOCIAL = (('github', 'https://github.com/winstonmyers'),
          ('linkedin', 'https://www.linkedin.com/in/winston-myers-327a0558'),
          ('soundcloud', 'https://soundcloud.com/whimsounds'),)

STATIC_PATHS = [
    'images',
    'extra',  # this
]
EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'},
    'extra/favicon.ico': {'path': 'favicon.ico'},  # and this
    'extra/LICENSE': {'path': 'LICENSE'},
    'extra/README': {'path': 'README'},
}

+++
title = "{{ replace .Name "-" " " | title }}"
subtitle = ""

event = ""
event_url = ""
location = ""

summary = ""
description = ""
abstract = ""

# event start and end times.
# end time can optionally be hidden by prefixing the line with `#`.
date = {{ .Date }}
date_end = {{ .Date }}
all_day = false

# Schedule page publish date (NOT talk date).
publishDate = {{ .Date }}

authors = []
tags = []
categories = []
publication_types = ["событие"]
# Is this a featured event? (true/false)
featured = false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
[image]
  caption = ""
  focal_point = "BottomRight"
  preview_only = false
  placement = "2"

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
[[links]]
   name = ""
   url = ""
   icon_pack = "fab"
   icon = ""

# Optional filename of your slides within your event's folder or a URL.
# url_slides:

# url_code:
# url_pdf:
# url_video:

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides = ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects = []
+++

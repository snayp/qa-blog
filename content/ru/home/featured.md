+++
widget = "featured"
headless = true
active = true
weight = 85

title = "Лучшее"
subtitle = "в блоге"


[content]
  page_type = "блог"
  count = 5
  order = "desc"
  link_to_archive = false
  [content.filters]
    tag = ""
    category = ""
    author = ""
  
[design]
  # Toggle between the various page layout types.
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   4 = Citation (publication only)
  view = 3
  
[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.
  
  # Background color.
  # color = "navy"
  
  # Background gradient.
  # gradient_start = "#776660"
  # gradient_end = "#4a413f"
  
  # Background image.
  image = "background_talk.jpg" 
  # image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.

  # Text color (true=light or false=dark).
  text_color_light = false
  
[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""
+++

---

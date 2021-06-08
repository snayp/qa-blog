+++
# Tag Cloud widget.
widget = "tag_cloud"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 120  # Order that this section will appear.

title = "топ"
subtitle = "10 тем"

[content]
  # Choose the taxonomy from `config.toml` to display (e.g. tags, categories)
  taxonomy = "tags"
  
  # Choose how many tags you would like to display (0 = all tags)
  count = 10

[design]
  # Minimum and maximum font sizes (1.0 = 100%).
  font_size_min = 0.7
  font_size_max = 2.0
      
[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  # color = "#282a06;"
  
  # Background gradient.
  # gradient_start = "#f6f6f6c2"
  # gradient_end = "#65636ab8"

  image = "background_talk.jpg"
  # image_darken = 0.4
  # text_color_light = false  
+++

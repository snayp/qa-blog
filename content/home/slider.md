+++
# Slider widget.
widget = "slider"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 1  # Order that this section will appear.

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval = "3500"

# Slide height (optional).
# E.g. `500px` for 500 pixels or `calc(100vh - 70px)` for full screen.
height = "calc(100vh - 70px)"


 
# Slides.
# Duplicate an `[[item]]` block to add more slides.
[[item]]
  title = "Приветствую! :v:"
  content = '''
  это блог QA инженера о web технологиях
  \
  организации процесса разработки и тестирования
  \
  решении повседневных задач тестирования 
  \
  модных трендах - SDED и Continuous Testing'''
  align = "center"  

  # Overlay a color or image (optional).
  #   Deactivate an option by commenting out the line, prefixing it with `#`.
  overlay_color = "#000"  # An HTML color value.
  overlay_img = "qa.png"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.7  # Darken the image. Value in range 0-1.

  # Call to action button (optional).
  #   Activate the button by specifying a URL and button label below.
  #   Deactivate by commenting out parameters, prefixing lines with `#`.
  cta_label = "Вступление"
  cta_url = "#about"
  cta_icon_pack = "fa"
  cta_icon = "handshake"

[[item]]
  title = "Доступно и понятно ☑️"
  content = '''
  об актуальных подходах и инструментах
  \
  применяемых при разработке и тестировании
  \
  истории успешных команд и фатальных ошибок'''
  align = "left"

  overlay_color = "#000"  # An HTML color value.
  overlay_img = "event.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.7  # Darken the image. Value in range 0-1.
  cta_label = "Подходы и инструменты"
  cta_url = "#tech_tools"
  cta_icon_pack = "fa"
  cta_icon = "tools"

[[item]]
  title = "Знания и опыт ☑️"
  content = '''
  революционные технологии и продукты
  \
  опыт российских и зарубежных ИТ экспертов
  \
  новаторские товары и услуги online'''
  align = "left"

  overlay_color = "#000"  # An HTML color value.
  overlay_img = "development.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.7  # Darken the image. Value in range 0-1.
  cta_label = "Знания и опыт"
  cta_url = "#info"
  cta_icon_pack = "fa"
  cta_icon = "info-circle"

[[item]]
  title = "Примеры 🔥"
  content = '''
  фрагменты кода из реальных проектов
  \
  автоматизация на Java и JS
  \
  полезные секреты и хитрости интернета'''
  align = "right"

  overlay_color = "#000"  # An HTML color value.
  overlay_img = "qa_blog.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.6  # Darken the image. Value in range 0-1.
  cta_label = "Примеры кода"
  cta_url = "#snippets"
  cta_icon_pack = "fa"
  cta_icon = "code"

[[item]]
  title = "Развитие 👍"
  content = '''
  доступные образовательные курсы по разработке
  \
  советы по развитию карьеры
  \
  ресурсы развивающие soft навыки:smile:'''
  align = "left"

  overlay_color = "#000"  # An HTML color value.
  overlay_img = "career.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.6  # Darken the image. Value in range 0-1.
  cta_label = "Обучение и развитие"
  cta_url = "#career"
  cta_icon_pack = "fa"
  cta_icon = "user-graduate"
  

[[item]]
  title = "Досуг :smile:"
  content = '''
  мнение экспертов на спорные темы
  \
  забавные истории при разработке
  \
  занимательные случаи из жизни
  \
  расмышления о вечном'''
  align = "right"

  overlay_color = "#000"  # An HTML color value.
  overlay_img = "joks.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.6  # Darken the image. Value in range 0-1.
  cta_label = "Досуг"
  cta_url = "#relax"
  cta_icon_pack = "fa"
  cta_icon = "couch"
+++

- Deployed on EC2 instance by pm2:

  - `pm2 serve company-site/ 5500 --name marvelous`
  - Access link: See **About** description of this repository

> This address may not be available due to an unsual AWS EC2 instance failure during these days.


- Layout

  - Header and navigation: Use grid and flex layout

  - Home Page

    - use flex layout
    - use glide lib to switch slides
    - use anime lib to load elements with animation effection
    - use scrollReveal to generate animation of tiles

  - Other content sections

    - use grid layout for sections

    - About Section: use grid layout for business services
    - Products Section: use isotope to filter & sort magical images layouts
    - Services Section
    - Team Section
    - Data Section: use anime to generate animation of number increment
    - Events Section

  - Footer: use grid layout

* Animation libraries used

  - anime https://github.com/juliangarnier/anime
  - glide https://github.com/glidejs/glide
  - isotope https://github.com/metafizzy/isotope
  - scrollReveal https://github.com/jlmakes/scrollreveal
  - smooth-scroll https://github.com/cferdinandi/smooth-scroll

* Viewports break points (width) for different devices

  - 768px
  - 600px
  - 480px

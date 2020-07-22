- Deployed on EC2 instance by pm2:

  - `pm2 serve company-site/ 5500 --name marvelous`
<<<<<<< HEAD
  - Access link: [ec2-54-191-119-231.us-west-2.compute.amazonaws.com:5500/](ec2-54-191-119-231.us-west-2.compute.amazonaws.com:5500/)
=======
  - Access link: ec2-54-191-119-231.us-west-2.compute.amazonaws.com:5500/
>>>>>>> 74ba0c7588cfe3894d4b3d77828bf11c6a9629f1

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

**Pet Lover**
== A Pet Lifestyle & Education Blog || Hybrid Content Website "Pet Care & Education Platform" for pet lovers, that provides general and specific information about each pet, that would help pet lovers during their research if either they are willing to adopt an animal, or they already own one, and want to know more.

== examples: "https://www.petmd.com/" "https://www.thesprucepets.com/"

== technologies used (if done full stack): Full-stack development,Role-based access control, Database relationships, Authentication, CMS architecture, API design, State management, Dynamic routing.
=> which is internship-level skill ;)

1. layout:

- light/dark mode {
  dark: dark bg, light text
  ligh: light bg, dark text
  }
- little animations
- colorful
- responsive design
- png images and images with bg
- "hear song" sound option for the birds category
- searching option

2. Website sections

*maybe the user doesn't have a pet, researches first*

*maybe the user already has a pet, wants to know more*

- category navigation: **cats/dogs/birds/horses/sea life/rabbits/ snakes/ monkeys**
- sub category navigation for each category (in the footer)
- each category page (ex => cats page: cats types/ filtering option/ cat toys/ cats general foods)
- each animal (subcategory) page (birds sub category => Budgie: Name/ other names/ training & taming level/ socializing level/ noise level/ mess level/ good pairs with other types? or other animals/ warnings/ housing (can be an object containing different options like: indoors/outdoors, then show each option's housing recommendation)/ specific diet for a healthy life/ life span/ signs of illness/ FAQs/ injuries & safety: take the user to an article that explains these things/lots of images & sounds maybe videos)
- each pet accessory page (optional) => explaining what it is, who is it suitable for, why is/isn't it suitable for others + image/s.
- _data file_  (or in a database) for: all pets categories/ individual category pets/ all pet accessories/ individual category accessories/ blogs: IDs, categories or subcategories or general blogs.
- articles/posts => should have a nice title, a category animal, and/or a specific pet name. ex: "Bird signs of injury (how does the injury look like, what to do, how serious is it? what to avoid (warnings))"/ Interactive feedback, commenting on an existing title like "Do you agree?/ What do you think?/ Have you tried? Share your experience." or commenting on the whole article in general/ liking, saving a post/ writing a post (optional to me).
- about me page
- profile page for the users
- dashboard for me :)

3. Website structure

- Navbar
- Hero section
- different categories of animals
- Importance of training and taming animals (maybe in a blog | general blog)
- Invite to adopt a pet by showing different pets, playful/quite/etc ones
- Interactive quiz (to choose which pet is the perfect for the user depending on their situation)
- Generating monthly cost of each chosen pet (pet budget calculator)
- Login/Sign in option
- About me section
- Footer



4. DEVELOPMENT PLAN
_PHASE 1 — FOUNDATION_

# Setup Tech Stack
- Frontend
  React/vite
  React router
  context API
  SCSS

- Backend
  Node.js
  Express.js
  MongoDB
  JWT
  bcrypt

_Core Database Design_

# Users
id
username
email
password
role (user/admin)
savedPosts []
createdAt

# Categories
id
name
description
image

# Pets
id
name
otherNames []
categoryId
trainingLevel (1–5)
socialLevel (1–5)
noiseLevel
messLevel
housing (object: indoor/outdoor)
diet
lifespan
illnessSigns []
warnings []
images []
sounds []
faq []
monthlyCostEstimate
# Posts
id
title
content
type (educational / opinion)
categoryId (optional)
petId (optional)
likes []
commentsCount
createdAt

# Comments
postId
userId
text
createdAt

_Phase 2 - Features_
# Interactive Pet Quiz

# Monthly Cost Calculator
Food cost
Vet estimate
Toys
Housing

_Phase 3 - Admin Dashboard_
# features:
Total users
Total posts
Total comments
Most liked post
Recent users
Post analytics
# options:
Add new pets
Edit pet information
Upload images
Add blog posts
Moderate comments

_Extra Features_
# Achievement badge
- Users earn:
“Bird Expert”
“First Comment”
“Top Contributor”
# Admin Analytics Chart
- Using:
Chart.js
Recharts
- Show:
Posts per category
Most active users
Most searched pets

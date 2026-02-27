import lovebird from "../assets/birds/lovebird1.jpg";
import scottishFold from "../assets/cats/scottish fold1.jpg";
import germanShepherd from "../assets/dogs/german shepherd2.jpg";
import rabbit from "../assets/rabbits/rabbit.jpg";
import monkey from "../assets/monkeys/monkey.jpg";
import snake from "../assets/snakes/snake.jpg";
import axolotl from "../assets/fish/Axolotl.jpg";
import arabianHorse from "../assets/horses/arabianHorse8.jpg";
const allCategories = [
  {
    id: 1,
    name: "Birds",
    des: "Flying feathered friends",
    img: lovebird,
    img1: "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg",
    img2: "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg",
    longDes:
      "Pet birds are intelligent, social companions that can form strong bonds with their owners. Many species are capable of mimicking sounds, learning routines, and expressing emotions through body language and vocalization.",
    facts: {
      pros: [
        "Birds are highly intelligent animals that can recognize their owners, learn tricks, and even mimic sounds or words depending on the species. Their playful and curious personalities make them engaging pets for people who enjoy daily interaction.",
        "They do not require large living areas compared to bigger animals, making them suitable for smaller homes or apartments as long as their cage is properly sized and enriched with toys and perches.",
      ],
      cons: [
        "Birds are very sensitive to environmental changes such as temperature shifts, air quality, and loud noises. This means owners must be careful about fumes, smoke, and even certain cleaning products.",
        "Many species can be quite noisy, especially during mornings and evenings. Their vocal nature may not be ideal for people who prefer a very quiet home environment.",
      ],
      goodFitFor: [
        "Birds are a great fit for patient owners who enjoy spending daily time interacting with their pets and providing mental stimulation through toys and training.",
      ],
      badFitFor: [
        "They are not ideal for people who travel frequently or cannot commit to regular social interaction, as loneliness can negatively affect a bird’s health and behavior.",
      ],
    },
  },

  {
    id: 2,
    name: "Cats",
    des: "Cute tiny paws",
    img: scottishFold,
    img1: "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg",
    img2: "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg",
    longDes:
      "Cats are independent yet affectionate pets that adapt well to indoor living. They are known for their calming presence and playful curiosity.",
    facts: {
      pros: [
        "Cats are relatively low-maintenance compared to many other pets. They groom themselves, use a litter box, and are comfortable spending time alone while their owners are at work or school.",
        "They can be incredibly affectionate and form deep bonds with their owners, often showing love through purring, head bumps, and staying close by.",
      ],
      cons: [
        "Cats can sometimes scratch furniture or climb onto surfaces that owners may prefer to keep off-limits, requiring training and scratching alternatives.",
        "Litter boxes require consistent cleaning, and some cats may shed significantly depending on the breed.",
      ],
      goodFitFor: [
        "Cats are ideal for apartment dwellers, busy individuals, and first-time pet owners looking for a balanced companion.",
      ],
      badFitFor: [
        "They may not be suitable for people with severe allergies or those who expect constant attention and obedience like a dog.",
      ],
    },
  },

  {
    id: 3,
    name: "Dogs",
    des: "Strong loyal friends",
    img: germanShepherd,
    img1: "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg",
    img2: "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg",
    longDes:
      "Dogs are loyal, energetic companions that thrive on companionship and activity. They are known for their protective instincts and strong emotional bonds with humans.",
    facts: {
      pros: [
        "Dogs are extremely loyal animals that often develop deep emotional connections with their owners. They provide companionship, protection, and can even assist with specialized tasks through training.",
        "They encourage an active lifestyle, as most breeds require daily walks, playtime, and outdoor engagement.",
      ],
      cons: [
        "Dogs require consistent training, socialization, and daily exercise. Without proper structure, some breeds may develop behavioral problems.",
        "The financial commitment can be significant, including food, grooming, vaccinations, and potential medical expenses.",
      ],
      goodFitFor: [
        "Dogs are a great match for active individuals or families who have time and space to dedicate to training, exercise, and companionship.",
      ],
      badFitFor: [
        "They may not be suitable for people with extremely busy schedules or very limited living space, depending on the breed.",
      ],
    },
  },

  {
    id: 4,
    name: "Sea Life",
    des: "Quiet little swimmers",
    img: axolotl,
    img1: "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg",
    img2: "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg",
    longDes:
      "Aquatic pets such as fish and axolotls bring a peaceful atmosphere to a home. Their graceful movements and vibrant colors make them visually captivating.",
    facts: {
      pros: [
        "Aquatic pets are quiet and do not require physical affection, making them ideal for calm environments. Watching them swim can also reduce stress and create a relaxing ambiance.",
        "They are suitable for small spaces, as their habitat is contained within a properly maintained tank.",
      ],
      cons: [
        "Aquariums require careful monitoring of water quality, temperature, and filtration systems. Improper maintenance can quickly affect the health of the animals.",
        "Unlike mammals, aquatic pets offer limited physical interaction and bonding opportunities.",
      ],
      goodFitFor: [
        "They are well suited for individuals who enjoy observing animals and maintaining structured environments.",
      ],
      badFitFor: [
        "They are not ideal for people seeking cuddly, highly interactive pets.",
      ],
    },
  },

  {
    id: 5,
    name: "Horses",
    des: "Big and loud neighs!!",
    img: arabianHorse,
    img1: "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg",
    img2: "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg",
    longDes:
      "Horses are powerful, intelligent animals that require dedication, space, and financial investment. They are often kept for companionship, sport, or farm life.",
    facts: {
      pros: [
        "Horses can form strong emotional bonds with their caretakers and are highly trainable for riding and other activities.",
        "They promote outdoor living and physical activity, encouraging a healthy and active lifestyle.",
      ],
      cons: [
        "Caring for a horse requires significant land space, stable maintenance, and daily feeding and grooming routines.",
        "The financial costs for veterinary care, feed, equipment, and housing can be substantial.",
      ],
      goodFitFor: [
        "Horses are best suited for experienced animal owners living in rural areas with sufficient land and resources.",
      ],
      badFitFor: [
        "They are not appropriate for apartment living or for individuals unable to commit to daily hands-on care.",
      ],
    },
  },
  {
    id: 6,
    name: "Rabbits",
    des: "Tiny quick jumpers",
    img: rabbit,
    img1: "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg",
    img2: "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg",
    longDes:
      "Rabbits are gentle, intelligent animals that can form strong bonds with their owners. While they are often seen as low-maintenance pets, they actually require careful diet management, safe indoor space, and patient handling to thrive.",
    facts: {
      pros: [
        "Rabbits are quiet and generally calm animals, making them suitable for indoor living. They can be litter trained and often enjoy routines, which makes their care more structured and predictable.",
        "When properly socialized, rabbits can become affectionate companions that enjoy being near their owners and may even follow them around the house.",
      ],
      cons: [
        "Rabbits have very sensitive digestive systems and require a strict hay-based diet. Poor nutrition can quickly lead to serious health problems.",
        "They love to chew, which means electrical cables, furniture, and baseboards must be protected. Rabbit-proofing a home is essential.",
      ],
      goodFitFor: [
        "Rabbits are ideal for calm households where owners are patient and willing to create a safe indoor space for supervised exploration.",
      ],
      badFitFor: [
        "They are not well suited for very young children without supervision, as improper handling can easily injure them due to their fragile bones.",
      ],
    },
  },

  {
    id: 7,
    name: "Monkeys",
    des: "Chaotic but cute little babies",
    img: monkey,
    img1: "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg",
    img2: "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg",
    longDes:
      "Monkeys are extremely intelligent and complex wild animals. Although they may appear playful and human-like, they have specialized social, physical, and emotional needs that are difficult to meet in a domestic environment.",
    facts: {
      pros: [
        "Monkeys are highly intelligent and capable of learning advanced behaviors. They can form strong attachments and display complex emotional responses.",
        "Their curiosity and energy make them fascinating to observe, as they constantly explore and interact with their surroundings.",
      ],
      cons: [
        "Monkeys require constant mental stimulation, large enclosures, and social interaction with their own species. Without proper enrichment, they may develop aggressive or destructive behaviors.",
        "In many regions, owning a monkey is illegal or heavily regulated due to animal welfare concerns and safety risks.",
      ],
      goodFitFor: [
        "Monkeys are best suited for licensed wildlife professionals or sanctuaries that can provide species-appropriate care and social environments.",
      ],
      badFitFor: [
        "They are not suitable for typical households, first-time pet owners, or families with small children due to their strength, unpredictability, and complex needs.",
      ],
    },
  },

  {
    id: 8,
    name: "Snakes",
    des: "Hissing crawling reptiles!",
    img: snake,
    img1: "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg",
    img2: "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg",
    longDes:
      "Snakes are quiet, low-maintenance reptiles that appeal to owners who prefer observation over physical affection. Different species vary greatly in size, temperament, and care requirements, making research essential before ownership.",
    facts: {
      pros: [
        "Snakes are generally quiet and do not require daily attention or exercise outside their enclosure. This makes them suitable for people with busy schedules.",
        "They require minimal grooming and can live comfortably in properly maintained enclosures with controlled temperature and humidity.",
      ],
      cons: [
        "Snakes need carefully regulated heating systems and secure enclosures. Improper temperature or humidity can quickly lead to health issues.",
        "Feeding routines, which often involve pre-killed or frozen prey, may be uncomfortable for some owners.",
      ],
      goodFitFor: [
        "Snakes are a good match for reptile enthusiasts who are comfortable maintaining specialized enclosures and following structured feeding routines.",
      ],
      badFitFor: [
        "They are not suitable for individuals who are afraid of reptiles or who prefer highly interactive, affectionate pets.",
      ],
    },
  },
];

export default allCategories;

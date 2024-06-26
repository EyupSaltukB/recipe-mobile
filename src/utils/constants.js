export const categories = [
  {
    id: '01',
    category: 'Breakfast',
  },
  {
    id: '02',
    category: 'Lunch',
  },
  {
    id: '03',
    category: 'Dinner',
  },
  {
    id: '04',
    category: 'Turkish',
  },
  {
    id: '05',
    category: 'Mediterrenian',
  },
  {
    id: '06',
    category: 'Italian',
  },
  {
    id: '07',
    category: 'Dessert',
  },
  {
    id: '08',
    category: 'North',
  },
  {
    id: '09',
    category: 'Fast Food',
  },
  {
    id: '10',
    category: 'Vegeterian',
  },
  {
    id: '11',
    category: 'Drinks',
  },
];

export const recipeList = [
  {
    id: '01',
    name: 'Croissant',
    image: require("../assets/images/croissant.png"),
    rating: '4.4    ',
    ingredients: ['Chocolate', "Oil", "Dough"],
    time: '40 min.',
    color  : "#E72929",
    difficulty: 'Hard',
    calories: '406,1 cal',
    description : "You can easily prepare this delicious breakfast for your breakfast by kneading the croissant dough easily. If you wish, you can prepare a croissant with chocolate, strawberry or something else.",
    steps : ["Put sugar, warm water and yeast into the kneading bowl and wait for the yeast to become active.", 
    "Then add milk, oil, egg and salt and mix well.",
    "Start kneading by adding the flour little by little. After the dough reaches consistency, knead it for another 5-10 minutes. Let it rest for 15 minutes by covering it with a damp cloth.",
    "Divide the rested dough into 14 equal parts and shape them into balls. Take the first 7 and open them using a plate-sized amount of starch.."
    ]
  },
  {
    id: '02',
    name: 'Breakfast',
    image: require("../assets/images/breakfast.png"),
    rating: '4.3    ',
    ingredients: ['Bread', "Egg", "Sauce", "Cheese"],
    time: '20 min.',
    color : "#008DDA",
    difficulty: 'Easy',
    calories: '693 cal',
    description : "As it is known, toaster recipes are the biggest savior in creating the most practical foods in the kitchen. Moreover, the topic of “breakfast” includes many varieties. In addition to these varieties,",
    steps : ["Cut all the ingredients to the size you want.",
    "Cook the sausage and sliced ​​vegetables in the toaster for 1-2 minutes.",
    "Then set it aside on the cutting board.",
    "Put the ingredients for the sauce in a bowl and mix."
    ]
  },
  {
    id: '03',
    name: 'Pizza',
    image: require("../assets/images/pizza.png"),
    rating: '4.4    ',
    ingredients: ['Tomato', "Dough", "Pepper", "Sausage", "Sauce"],
    time: '40 min.',
    color  : "#007F73",
    difficulty: 'Normal',
    calories: '350 cal',
    description : "Pizza recipe :) Now you can make our pizzas, which we love to eat with mixed, sausage and cheddar cheese, at home. We believe it will be tastier than the ones outside.",
    steps : ["Let's put the flour in the kneading bowl and make a well in the middle.",
    "Let's start kneading our dough by slowly adding instant yeast, sugar, salt, olive oil and warm water to the middle of the flour. You can use half a pack of fresh yeast instead of instant yeast."
    ]
  },
  {
    id: '04',
    name: 'Fish',
    image: require("../assets/images/fish.png"),
    rating: '4.5',
    ingredients: ['Fish', "Oil", "Lemon", "Onion" , "Greens"],
    time: '30 min.',
    color : "#378CE7",
    difficulty: 'Hard',
    calories: '305 cal',
    description : "It is a practical and delicious fish recipe that will be frequently used by those who have limited time. You can vary the ingredients according to your taste.",
    steps : ["Drizzle 3-4 tablespoons of olive oil over the fish, sprinkle salt, and then coat the fish with olive oil by hand, covering every part of the fish.",
  "Our fish is then placed on wax paper.", "Chopped parsley, dill, lemon slice and bay leaf are placed on top and covered with baking paper."]
  },
  {
    id: '05',
    name: 'Salad',
    image: require("../assets/images/veg.png"),
    rating: '4.4    ',
    ingredients: ['Tomato', "Olive Oil", "Cucumber", "Onion", "Pepper" ],
    time: '15 min.',
    color : "#114232",
    difficulty: 'Easy',
    calories: '100 cal',
    description : "We chop our ingredients and chop the pickled corn and olives on top. We mix the salad, put salt, olive oil and lemon on it and mix again.",
    steps : ["All ingredients are washed thoroughly.", "Greens are chopped by hand.", "All ingredients are blended, placed in bowls and sauce is poured over them."]
  },{
    id: '06',
    name: 'Fast Food',
    image: require("../assets/images/fastf.png"),
    rating: '4.4    ',
    ingredients: ['Bread', "Pastry" , "Oil", "Meat", "Potato", "Onion" ,"Sauce"],
    time: '40 min.',
    color : "#B80000",
    difficulty: 'Hard',
    calories: '350 cal',
    description : "Calling gourmets 📢 get ready to be the star of the kitchen 🤩 With its special sauce, caramelized onions, homemade hamburger buns and wonderful patties that are never dry.",
    steps : ["For the bread: Place yeast, sugar, warm water and milk in a suitable bowl and mix until the yeast dissolves.",  
    "Add oil, egg white, yoghurt and salt.",
  "Add the flour little by little and get a nice soft dough.", 
  "Maya süresinden sonra hamurun fazla havasını yavaşça yoğurarak alın."
  ]
  },
  {
    id: '07',
    name: 'Mediterranean',
    image: require("../assets/images/mdttrn.png"),
    rating: '4.4    ',
    ingredients: ['Greens', "Olive Oil", "Tomato", "Corn"],
    time: '22 min.',
    color : "#52D3D8",
    difficulty: 'Medium',
    calories: '200 cal',
    description : "Mediterranean cuisine cannot be complete without appetizers, so hibeş, babagannuş, tahini blarney recipes were added to the list. These appetizers and salads, which will suit your tables with Mediterranean dishes, are not to be missed.",
    steps : ["It's time to head to the kitchen to make Mediterranean salad! This recipe, which goes great with toasted bread and is perfectly filling, is worthy of your table."]
  },
  {
    id: '08',
    name: 'Baklava',
    image: require("../assets/images/dessert.png"),
    rating: '4.8',
    ingredients: ['Sugar', "Milk", "Egg", "Oil" , "Flour"],
    time: '1h 33min.',
    color : "#fff",
    difficulty: 'Hard',
    calories: '347 cal',
    description  :"Whether it is a holiday, a special day or a celebration... Baklava has always been our traditional dessert that sweetens our mouth and brings us joy. It is an irresistible dessert, so to speak, with its sherbet, walnuts, pistachios and crackling top layer, that even those who say 'I don't like sherbet desserts' may suddenly crave it.",
    steps : ["First, let's prepare the sherbet for our dessert. For this, let's take sugar and water in a suitable pot.", 
    "After mixing, let's let our syrup boil.", 
  "At the end of the time, add lemon juice, boil for a few more minutes and remove from the stove."]
  },
  {
    id: '09',
    name: 'Ravioli',
    image: require("../assets/images/italiann.png"),
    rating: '4.6    ',
    ingredients: ['Flour', "Egg", "Sauce"],
    time: '35 min.',
    color : "#5D3587",
    difficulty: 'Hard',
    calories: '127 cal',
    description : "Ravioli, one of the popular pastry dishes of Italian cuisine, is a very enjoyable dish to make and eat.",
    steps : ["For the ravioli dough; Put flour, salt and semolina flour into a large mixing bowl. Then add the eggs.", 
  "Knead the dough until it reaches consistency.", 
"Prepare the filling before rolling out the ravioli dough. Puree the onion and garlic in a food processor or chop them into small cubes. Fry in a pan with oil."]
  },
  {
    id: '10',
    name: 'Serpme',
    image: require("../assets/images/serpme.png"),
    rating: '4.8    ',
    ingredients: ['Honey', "Egg", "Bread", "Greens", "Vegetables", "Milk"],
    time: '25 min.',
    color : "#00224D",
    difficulty: 'Medium',
    calories: '405 cal',
    description : "Spread breakfast is a type of breakfast with a very rich content in Turkish culture.",
    steps : ["Vegetables and dairy products are prepared",
  "Traditional products are available.", 
  "Honey, molasses, eggs and their varieties have an important place."]
  },
  {
    id: '11',
    name: 'Ayran',
    image: require("../assets/images/ayran.png"),
    rating: '4.8',
    ingredients: ['Yoghurt', "Water", "Salt"],
    time: '9 min.',
    color : "#092635",
    difficulty: 'Easy',
    calories: '57 cal',
    description : "The national drink of the Turks is ayran made from yoghurt. It is extremely healthy and can be consumed with many meals.",
    steps : ["Mix the yoghurt with water and salt until it reaches the appropriate consistency."]
  },
  {
    id: '12',
    name: 'Lemonade',
    image: require("../assets/images/lemonade.png"),
    rating: '4.6',
    ingredients: ['Water', "Lemon", "Sugar", "Mint"],
    time: '19 min.',
    color : "#FFC94A",
    difficulty: 'Easy',
    calories: '40,2 cal',
    description : "Lemonade is an indispensable drink, especially in the summer months. It is natural and delicious.",
    steps : ["First of all, we grate the peel of the lemon finely with a medium-mesh grater, without touching the white part.", 
  "We add the sugar on top and mix the sugar and shells together well by hand."]
  },
  {
    id: '13',
    name: 'Kebap',
    image: require("../assets/images/kebap.jpeg"),
    rating: '4.8',
    ingredients: ['Meat', "Onion", "Oil", "Tomato", "Greens", "Rice"],
    time: '23 min.',
    color : "#fff",
    difficulty: 'Hard',
    calories: '377,2 cal',
    description : "Kebab is made by turning the meat on a skewer over the fire and cooking it. It requires mastery. It is a local dish of Turkey and is native to the Mediterranean and Southeastern regions.",
    steps : ["First, grind the onion and capia pepper in a food processor or chop them finely.",
    "Squeeze the water thoroughly. Add it to the minced meat.",
    "Let's add salt and black pepper, knead it well and put it in the fridge to rest.",
    "Meanwhile, let's put all the ingredients for lavash, except flour, into a deep bowl.",
  "Let's add the flour in a controlled manner and knead a consistent dough and let it ferment for about half an hour."
  ]
  },
  {
    id: '14',
    name: 'Cheescake',
    image: require("../assets/images/cheseecake.png"),
    rating: '4.5',
    ingredients: ['Sugar', "Milk", "Egg", "Oil" , "Biscuit"],
    time: '33 min.',
    color : "#6C0345",
    difficulty: 'Hard',
    calories: '321 cal',
    description  :"We have a recipe that is appetizing with its red sauce and will fascinate everyone with its appearance! You will brighten up your tea time with this raspberry cheesecake recipe and make even those who don't like cheesecake love this taste.",
    steps : ["Cut the baking paper to cover the side walls of the springform pan. Coat the base and edges with margarine and cover with baking paper.", 
    "Mix the raspberries with half a glass of sugar and a glass of water and keep them in the refrigerator.", 
  "For the cake base, grind 2 packs of whole wheat flour biscuits."]
  },
]
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
// This file empties the Drinks collection and inserts the drinks below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/drinkDB",
  {
    useMongoClient: true
  }
);
const drinkSeed = [
  {
    name: "old-fashioned",
    title: "Old Fashioned",
    ingredients: ['angostura bitters', 'sugar', 'orange', 'cherry', 'bourbon', 'soda'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2012/09/18160012/bourbon-old-fashioned.jpg",
    instructions: "Comming soon..."
  },
  {
    name: "manhattan",
    title: "Manhattan",
    ingredients: ['whiskey', 'sweet vermouth'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2010/01/04120930/manhattan1.jpg",
    instructions: "Comming soon..."
  },
  {
    name: "moscow-mule",
    title: "Moscow Mule",
    ingredients: ['vodka', 'lime', 'ginger syrup'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2014/11/recipe-moscow-mule.jpg",
    instructions: "Comming soon..."
  },
  {
    name: "negroni",
    title: "Negroni",
    ingredients: ['campari', 'gin', 'sweet vermouth', 'orange'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2013/04/18110158/negroni-720x720-recipe.jpg",
    instructions: "Use 1 oz Campari, 1 oz Gin, 1 oz Sweet vermouth; Garnish: Orange half-wheel; Glass: Rocks. PREPARATION: Add all the ingredients to an Old Fashioned glass and fill with ice. Stir until cold and garnish with an orange half-wheel."
  },
  {
    name: "whiskey-sour-cocktail",
    Title: "Whiskey Sour Cocktail",
    ingredients: ['bourbon', 'lemon', 'sugar', 'cherry'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2011/07/05125158/fa-Whiskey-Sour.jpg",
    instructions: "Use 1 1⁄2 oz Bourbon, 3⁄4 oz Fresh lemon juic, 3⁄4 oz Simple syrup (1 part water, 1 part sugar), 1  Cherry  PREPARATION: Add all the ingredients to a shaker filled with ice and shake. Strain into a rocks glass filled with fresh ice. Garnish with a cherry and lemon wedge."
  },
  {
    name: "mint-julep-cocktail",
    title: "Mint Julep Cocktail",
    ingredients: ['sugar', 'mint', 'bourbon'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2017/09/01105647/mint-julep-720x720-recipe-Molly.jpg",
    instructions: "Use 1⁄4 oz Raw sugar syrup, 8 Mint Leaves, 2 oz Bourbon. PREPMINT JULEP COCKTAIL: In a Julep cup or rocks glass, lightly muddle the mint and syrup. Add the bourbon and pack tightly with crushed ice. Stir until the cup is frosted on the outside. Top with more crushed ice to form an ice dome and garnish with a few drops of bitters, if desired, and a mint sprig."
  },
  {
    name: "red-bull-vodka",
    title: "Red Bull Vodka",
    ingredients: ['vodka', 'red bull'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2016/12/22114511/vodka-red-bull-720x720-recipe.jpg",
    instructions: "In a Highball glass with ice, pour 1.5 oz of Vodka, then fill with Red Bull."
  },
  {
    name: "scooby-snack",
    title: "Scooby Snack",
    ingredients: ['malibu rum', 'creme de banana', 'midori', 'pineapple juice', 'whipped cream'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2015/10/21175947/images1.jpg",
    instructions: "In a strainer with ice, pour: .25 oz malibu rum, .25 oz creme de banana, .25 oz midori, .25 oz pineapple juice, .25 oz cream. Shake and strain into a chilled shooter glass. Garnish with a lemon twist"
  },
  {
    name: "jaeger-bomb",
    title: "Jaeger Bomb",
    ingredients: ['red bull', 'jagermeister'],
    picture: "",
    instructions: "In a pint glass, pour 1/2 can of red bull. Then, drop a shot of jagermeister into the glass."
  },
  {
    name: 'french-75',
    title: 'French 75',
    ingredients: ['gin', 'simple syrup', 'lemon juice', 'champagne'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2016/08/11115525/french-75-720x720-article.jpg",
    instructions: "In a shaker, pour 1 oz of gin, .5 oz of simple syrup, .5 oz of lemon juice. Shake and strain into a chilled champagne flute glass, fill the glass with champagne."
  },
  {
    name: 'kentucky-buck',
    title: 'Kentucky Buck',
    ingredients: ['whiskey', 'lime juice', 'ginger beer','lime'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2013/08/30223457/kentucky-buck-720x720-recipe.jpg",
    instructions: "In a copper mug or collins glass with ice, pour 2.5 oz of whiskey, .5 oz of lime juice. Fill with lemon juice, fill with ginger beer. Stir and garnish with lime."
  },
  {
    name: 'irish-coffee',
    title: 'Irish Coffee',
    ingredients: ['coffee', 'sugar', 'irish whiskey'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2017/02/22140200/irish-coffee-720x720-recipe1.jpg",
    instructions: "In a coffee mug, pour 1.5 oz of irish whiskey, a cube, tablespoon, or packet of sugar, fill with hot coffee and stir. Top with cream if desired."
  },
  {
    name: 'mexican-iced-coffee',
    title: 'Mexican Iced Coffee',
    ingredients: ['tequila', 'kahlua', 'coffee', 'cream'],
    picture: "https://d2zcsajde7b23y.cloudfront.net/m/ce89c66a5e24b8117cd2b4a162553fc9a16c833a.jpeg",
    instructions: "In a coffee mug, pour .5 50 .75 oz of tequila, and the same amount of kahlua. Fill with hot coffee and stir. Top with sweet cream or whipped cream"
  },
  {
    name: 'mimosa',
    title: 'Mimosa',
    ingredients: ['orange juice','champagne'],
    picture: "https://cdn.liquor.com/wp-content/uploads/2016/07/23122415/mimosa-recipe-720-square.jpg",
    instructions: "In a champagne flute glass, fill half with orange juice, and fill with champagne. tilt glass while serving champagne"
  }
  // {
  //   name: '',
  //   title: ,
  //   ingredients: [],
  //   picture: ,
  //   instructions: 
  // }
//   {
//     name: ,
//     title: ,
//     ingredients: [],
//     picture: ,
//     instructions: 
//   },
];
db.Drink
  .remove({})
  .then(() => db.Drink.collection.insertMany(drinkSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
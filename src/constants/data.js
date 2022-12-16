import images from './images';

const wines = [
  {
    title: 'Through the Broken Wall',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Devils of Paradis ',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Colossal La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Monkie milk Stormy',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Revenge for Liberio',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: "Braus' Family Dinner",
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | Full Meal |',
  },
  {
    title: "Niccolo's Cuisine",
    price: '$16',
    tags: 'Fancy | Ginger beer | Slice of lime',
  },
  {
    title: "Levi's Coffee",
    price: '$10',
    tags: 'Dark | Citrus juice | Sugar',
  },
  {
    title: 'Marleyan Snacks',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: "Sasha's Meat ",
    price: '$26',
    tags: 'Steak | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best Potatoes',
    subtitle: 'approved from the favourite potato girl herself - Sasha',
  },
  {
    imgUrl: images.award01,
    title: "Beast Recognition",
    subtitle: "Beast Titan's Favourite Snac point",
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Fucked-up people gave us 5th place for hospitality, atleast we dont treat them like they treated Yamir Fritz',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Tatakae! Tatakae!',
  },
];

export default { wines, cocktails, awards };

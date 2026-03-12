export interface Product {
  id: string;
  name: string;
  description: string;
  whyIUseIt: string;
  image: string;
  affiliateUrl: string;
}

export interface ProductSection {
  id: string;
  title: string;
  intro: string;
  icon: string;
  products: Product[];
}

export const toolSections: ProductSection[] = [
  {
    id: 'filming',
    title: 'Filming Gear',
    intro: 'Everything I use to capture life in Les Alpilles - the hunts, the markets, the garden in summer light. Small kit, no fuss, real results.',
    icon: '🎬',
    products: [
      {
        id: 'dji-osmo-action-4',
        name: 'DJI Osmo Action 4',
        description: 'Rugged action camera with excellent low-light performance and dual screens. Shoots in all weather - rain, dust, direct Provençal sun.',
        whyIUseIt: 'I carry this on every hunt and in the garden. It handles the heat of August and the mud of November equally well. The stabilisation makes handheld walking shots actually watchable.',
        image: '/images/tools/dji-osmo-action-4.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=DJI+Osmo+Action+4&tag=YOURTAG-21',
      },
      {
        id: 'dji-mic-mini',
        name: 'DJI Mic Mini',
        description: 'Compact wireless microphone system. Clips to your shirt and connects wirelessly. Wind noise suppression is excellent.',
        whyIUseIt: 'Outdoor audio is the hardest part of filming in Provence - the mistral is not forgiving. This mic handles it better than anything else I\'ve tried at this price point.',
        image: '/images/tools/dji-mic-mini.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=DJI+Mic+Mini&tag=YOURTAG-21',
      },
      {
        id: 'joby-gorillapod',
        name: 'JOBY GorillaPod 3K',
        description: 'Flexible, lightweight tripod that wraps around branches, fence posts, or sits on uneven ground. A third hand in the field.',
        whyIUseIt: 'A full-size tripod is useless in the garrigue. This goes in my pocket and sets up in thirty seconds anywhere. Essential for timelapse shots of the harvest.',
        image: '/images/tools/joby-gorillapod.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=JOBY+GorillaPod+3K&tag=YOURTAG-21',
      },
      {
        id: 'nd-filters',
        name: 'ND Filter Set (58mm)',
        description: 'Variable ND filters for shooting in bright sunlight without blowing the exposure. Essential for the intense southern light.',
        whyIUseIt: 'Summer in Provence means harsh midday light. These let me shoot at the right exposure without dialling the shutter to speeds that kill motion blur and make footage look clinical.',
        image: '/images/tools/nd-filters.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=ND+filter+set+58mm&tag=YOURTAG-21',
      },
      {
        id: 'power-bank',
        name: 'Anker 20000mAh Power Bank',
        description: 'High-capacity, dual-port power bank. Charges two cameras simultaneously and still has power to spare after a full day in the field.',
        whyIUseIt: 'Hunt days start before dawn and end after dark. There are no sockets in the garrigue. This power bank is in my kit bag every single time without question.',
        image: '/images/tools/anker-powerbank.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=Anker+20000mAh+power+bank&tag=YOURTAG-21',
      },
    ],
  },
  {
    id: 'cooking',
    title: 'Cooking Gear',
    intro: 'The tools I cook with every week. A Provençal kitchen does not need gadgets - it needs a few things that work perfectly and last a lifetime.',
    icon: '🍳',
    products: [
      {
        id: 'staub-cocotte',
        name: 'Staub Round Cocotte 28cm',
        description: 'Enamelled cast iron cocotte. Heavy, beautiful, and virtually indestructible. The standard vessel for a proper Provençal daube.',
        whyIUseIt: 'I have made every slow-cooked dish in this kitchen in a Staub. The lid seal is better than Le Creuset for long braises. It goes from hob to table and needs nothing more than a wipe.',
        image: '/images/tools/staub-cocotte.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=Staub+cocotte+ronde+28cm&tag=YOURTAG-21',
      },
      {
        id: 'thermapen',
        name: 'ThermoWorks Thermapen One',
        description: 'Instant-read thermometer with 1-second readings and ±0.5°C accuracy. Indispensable for game meat where food safety matters.',
        whyIUseIt: 'Wild boar must reach 71°C minimum. This thermometer tells you in one second without any doubt. Worth every cent for the peace of mind alone.',
        image: '/images/tools/thermapen.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=ThermoWorks+Thermapen&tag=YOURTAG-21',
      },
      {
        id: 'fire-tongs',
        name: 'Long-Handle Braai Tongs (40cm)',
        description: 'Heavy stainless steel tongs with a long handle. Designed for wood-fire cooking where the heat is serious.',
        whyIUseIt: 'Short tongs and a wood fire are a bad combination. These keep your hands out of the fire zone while still giving you full control. I have used the same pair for six years.',
        image: '/images/tools/braai-tongs.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=long+handle+barbecue+tongs+40cm&tag=YOURTAG-21',
      },
      {
        id: 'wusthof-chefs-knife',
        name: "Wüsthof Classic 20cm Chef's Knife",
        description: 'German forged chef\'s knife. Balanced, sharp, and built to last decades. The kind of knife that becomes part of the kitchen.',
        whyIUseIt: "A good knife makes everything faster and safer. I have used a Wüsthof for fifteen years. Sharpen it twice a year, store it on a magnetic strip, and it will outlast most appliances in your kitchen.",
        image: '/images/tools/wusthof-knife.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=Wusthof+Classic+20cm&tag=YOURTAG-21',
      },
      {
        id: 'olive-wood-board',
        name: 'Large Olive Wood Cutting Board',
        description: 'Thick olive wood board, naturally antibacterial and self-healing. Beautiful on the table, functional in use.',
        whyIUseIt: 'Olive wood is the material of Provence. It smells wonderful, handles rough work, and looks extraordinary at the table. I use mine for everything from bread to whole chickens.',
        image: '/images/tools/olive-wood-board.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=large+olive+wood+cutting+board&tag=YOURTAG-21',
      },
    ],
  },
  {
    id: 'hunting',
    title: 'Hunting Gear',
    intro: 'The practical kit I use during la chasse in Les Alpilles. Nothing decorative here - everything on this list earns its place in the field.',
    icon: '🎯',
    products: [
      {
        id: 'petzl-headlamp',
        name: 'Petzl Actik Core Headlamp',
        description: 'Rechargeable headlamp with 450 lumens and red light mode. Hunt days start before first light. This is non-negotiable kit.',
        whyIUseIt: 'I have tried cheaper headlamps. They fail in cold weather, the batteries go at the wrong moment, and the beam quality is poor. The Petzl has been with me for three seasons without a single issue.',
        image: '/images/tools/petzl-headlamp.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=Petzl+Actik+Core&tag=YOURTAG-21',
      },
      {
        id: 'hunting-knife',
        name: 'Opinel No. 9 Hunting Knife',
        description: 'Traditional French folding hunting knife with gut hook. Made in the Savoie since 1890. Sharp, reliable, properly French.',
        whyIUseIt: 'There is no more honest tool than a good Opinel. It fields dresses cleanly, keeps an edge, and fits in a pocket. A classic for a reason.',
        image: '/images/tools/opinel-knife.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=Opinel+No+9+hunting&tag=YOURTAG-21',
      },
      {
        id: 'vacuum-sealer',
        name: 'Caso VC10 Vacuum Sealer',
        description: 'Compact vacuum sealer for preserving wild game. Extends freezer life from months to over a year while preventing freezer burn.',
        whyIUseIt: 'After a good hunt you can end up with 30kg of sanglier. A vacuum sealer means none of it goes to waste. Sealed boar keeps beautifully for 14 months and still tastes of the forest when you open it in February.',
        image: '/images/tools/vacuum-sealer.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=Caso+VC10+vacuum+sealer&tag=YOURTAG-21',
      },
      {
        id: 'cooler-box',
        name: 'Coleman 54Qt Xtreme Cooler',
        description: 'Hard-sided cooler with 5-day ice retention. For transporting game meat safely from field to kitchen in warm weather.',
        whyIUseIt: 'In late October the temperature can still reach 20°C in Provence. Proper cold chain from the field is not optional for wild game. This cooler keeps ice for days and fits a useful amount of meat.',
        image: '/images/tools/coleman-cooler.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=Coleman+54Qt+Xtreme+cooler&tag=YOURTAG-21',
      },
      {
        id: 'hunt-gloves',
        name: 'Sealskinz Waterproof Hunting Gloves',
        description: 'Fully waterproof, windproof gloves with grip palm. For cold, wet mornings at the post when you are waiting and not moving.',
        whyIUseIt: 'Cold hands at the post affect everything - concentration, trigger feel, and simply your willingness to stay in position. These gloves are waterproof in genuine rain and still give enough dexterity to handle a firearm safely.',
        image: '/images/tools/sealskinz-gloves.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=Sealskinz+waterproof+hunting+gloves&tag=YOURTAG-21',
      },
    ],
  },
  {
    id: 'garden',
    title: 'Garden Tools',
    intro: 'What I use in the potager at Die Plaas. Six hundred square metres of kitchen garden teaches you quickly which tools hold up and which ones do not.',
    icon: '🌿',
    products: [
      {
        id: 'felco-2',
        name: 'Felco No. 2 Pruning Shears',
        description: 'The gold standard of secateurs. Swiss-made, rebuildable, and with a grip that does not destroy your hand over a long session.',
        whyIUseIt: 'I have owned three pairs of cheap secateurs and one pair of Felcos. The Felcos are still on their original blades after four years. Buy once, buy right.',
        image: '/images/tools/felco-2.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=Felco+2+secateurs&tag=YOURTAG-21',
      },
      {
        id: 'garden-gloves',
        name: 'Showa 370 Nitrile Garden Gloves',
        description: 'Thin nitrile gloves that offer real protection while keeping full dexterity. For transplanting, weeding, and handling rough soil.',
        whyIUseIt: 'Thick gloves mean you feel nothing. These are thin enough to handle seedlings but tough enough for thorns and wire. I go through several pairs a season and would not swap them for anything heavier.',
        image: '/images/tools/showa-gloves.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=Showa+370+garden+gloves&tag=YOURTAG-21',
      },
      {
        id: 'hose-reel',
        name: 'Gardena 30m Hose Reel Set',
        description: 'Wall-mounted retractable hose reel with adjustable nozzle. Reliable German engineering for the daily watering routine.',
        whyIUseIt: 'In a large potager, watering twice a week means covering a lot of ground. A tangle-free, wall-mounted system saves fifteen minutes of frustration every single session. Gardena fittings are the standard in France and spare parts are everywhere.',
        image: '/images/tools/gardena-hose.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=Gardena+enrolleur+tuyau+30m&tag=YOURTAG-21',
      },
      {
        id: 'spade',
        name: 'Burgon & Ball Stainless Steel Border Spade',
        description: 'Narrow-bladed stainless spade for precise work in beds. Lighter than a full spade, sharper, and better for working between established plants.',
        whyIUseIt: 'A border spade is the tool I reach for more than any other in the kitchen garden. Turning soil between rows, planting out, dividing plants - it does everything without disturbing what is already growing alongside.',
        image: '/images/tools/border-spade.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=stainless+steel+border+spade&tag=YOURTAG-21',
      },
      {
        id: 'harvest-basket',
        name: 'Traditional French Trugg Harvest Basket',
        description: 'Deep, flexible polypropylene garden trug. Holds a serious amount of tomatoes, courgettes, or herbs and rinses clean in seconds.',
        whyIUseIt: 'In peak tomato season we are picking 5kg at a time. A shallow basket means bruised fruit at the bottom. This deep trug holds everything gently and has survived four summers of heavy use without cracking.',
        image: '/images/tools/harvest-basket.jpg',
        affiliateUrl: 'https://www.amazon.fr/s?k=garden+trug+harvest+basket&tag=YOURTAG-21',
      },
    ],
  },
];

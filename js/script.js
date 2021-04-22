const PopularDrinks = [
	{
		name: `Coffee`,
		data: `Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried.`
	},
	{
		name: `Juice`,
		data: `Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice.`
	},
	{
		name: `Long Island`,
		data: `A Long Island iced tea is a type of alcoholic mixed drink typically made with vodka, tequila, light rum, triple sec, gin, and a splash of cola, which gives the drink the same amber hue as iced tea. A popular version mixes equal parts vodka, tequila, gin, rum, triple sec, with ​1 1⁄2 parts sour mix and a splash of cola.`
	},
	{
		name: `Mojito`,
		data: `Mojito is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar (traditionally sugar cane juice), lime juice, soda water, and mint. Its combination of sweetness, citrus, and herbaceous mint flavours is intended to complement the rum, and has made the mojito a popular summer drink.`
	},
	{
		name: `Soda`,
		data: `A soft drink is a drink that usually contains water (often carbonated), a sweetener, and a natural and/or artificial flavoring. The sweetener may be a sugar, high-fructose corn syrup, fruit juice, a sugar substitute (in the case of diet drinks), or some combination of these. Soft drinks may also contain caffeine, colorings, preservatives, and/or other ingredients.`
	},
	{
		name: `Tea`,
		data: `Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China and East Asia.[3] After water, it is the most widely consumed drink in the world.`
	},
	{
		name: `Water`,
		data: `The human body contains from 55% to 78% water, depending on body size. To function properly, the body requires between one and seven liters (0.22 and 1.54 imp gal; 0.26 and 1.85 U.S. gal) of water per day to avoid dehydration; the precise amount depends on the level of activity, temperature, humidity, and other factors.`
	},
	{
		name: `Whisky`,
		data: `Whisky or whiskey is a type of distilled alcoholic beverage made from fermented grain mash. Various grains (which may be malted) are used for different varieties, including barley, corn, rye, and wheat. Whisky is typically aged in wooden casks, which are often old sherry casks or may also be made of charred white oak.`
	},
	{
		name: `Wine`,
		data: `Wine is an alcoholic drink typically made from fermented grape juice. Yeast consumes the sugar in the grapes and converts it to ethanol, carbon dioxide, and heat. Different varieties of grapes and strains of yeasts produce different styles of wine.Wine has been produced for thousands of years.`
	}
]

const accordionDrinks = document.querySelector(`#accordionDrinks`);

class Drinks{
    static createDrinks(arr){
        console.log(arr);
        let drinks = arr
            .map(drink => new Drink(drink))
            .map((drink, index) => drink.renderDrink(index))
            .join(``);

            accordionDrinks.innerHTML += drinks;
        console.log(drinks);
    }
}

class Drink{
    constructor(drink){
        this.createDrink(drink);
    }

    createDrink(drink){
        for(let key in drink){
            this[key] = drink[key];
        }
    }

    renderDrink(index){
        return `<div class="accordion-item">
                    <h2 class="accordion-header" id="heading${this.name.replace(' ','')}">
                    <button class="accordion-button ${index !=0 ? `collapsed` : ``}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.name.replace(' ','')}" aria-expanded="${index !=0 ? `false` : `true`}" aria-controls="collapse${this.name.replace(' ','')}">
                        <img class="accordion-button__img" src="images/color/${this.name.replace(' ','_').toLowerCase()}.png" width="25" height="25">
						${this.name}
                    </button>
                    </h2>
                    <div id="collapse${this.name.replace(' ','')}" class="accordion-collapse collapse ${index !=0 ? `` : `show`}" aria-labelledby="heading${this.name.replace(' ','')}" data-bs-parent="#accordionDrinks">
                        <div class="accordion-body">${this.data}</div>
                    </div>
                </div>`
    }
}

Drinks.createDrinks(PopularDrinks);
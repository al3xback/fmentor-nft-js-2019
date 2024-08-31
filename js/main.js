const cardEl = document.querySelector('.card');

/* Array flat() */
const dummyImageProps = [
	['width', 302],
	['height', 302],
];

const imageProps = dummyImageProps.flat();

const cardImageEl = cardEl.querySelector('.card__image img');
cardImageEl.setAttribute('width', imageProps[1]);
cardImageEl.setAttribute('height', imageProps[3]);

/* Optional catch binding */
function getTitle() {
	return 'Equilibrium';
}

let title;
try {
	title = getTitle();
} catch {
	console.log(title);
}

/* String trimStart() and trimEnd() */
const dummyDescription =
	'  Our Equilibrium collection promotes balance and calm.  ';
const description = dummyDescription.trimStart().trimEnd();

const cardDescriptionEl = cardEl.querySelector('.card__desc');
cardDescriptionEl.textContent = description;

/* Object fromEntries() */
const dummyStatusItems = [
	['ethereumAmount', '0.041 ETH'],
	['remainingTime', '3 days left'],
];
const statusItems = Object.fromEntries(dummyStatusItems);

const cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');

let i = 0;
for (const key in statusItems) {
	cardStatusItemEls[i].querySelector('span').textContent = statusItems[key];
	i++;
}

for(let god in gods){
	godData = gods[god]
	image = document.createElement('img');
	image.setAttribute('id', god)
	image.src = 'images/' + godData['portrait'];
	image.addEventListener('click', handleGodSelection)
	document.getElementById('god-pool').appendChild(image);
}

pickBanOrder = [
	'order-ban-1',
	'chaos-ban-1',
	'order-ban-2',
	'chaos-ban-2',
	'order-ban-3',
	'chaos-ban-3',
	'order-pick-1',
	'chaos-pick-1',
	'chaos-pick-2',
	'order-pick-2',
	'order-pick-3',
	'chaos-pick-3',
	'chaos-ban-4',
	'order-ban-4',
	'chaos-ban-5',
	'order-ban-5',
	'chaos-pick-4',
	'order-pick-4',
	'order-pick-5',
	'chaos-pick-5',
]

pickBanIndex = 0;
let searchBar = document.getElementById('search-bar')

function handleGodSelection(event){
	if(!event.target.classList.contains('locked')){
		target = document.getElementById(pickBanOrder[pickBanIndex]);
		console.log(target.childNodes)
		console.log(target.tagName)
		if(target.tagName == 'DIV'){
			target.children[0].src = event.target.src;
			target.children[1].textContent = event.target.id;
		}else{
			target.src = event.target.src;
		}
		event.target.classList.add('locked');
		++pickBanIndex;
	}
}

testing = [
	'order-pick-1',
	'order-pick-2',
	'order-pick-3',
	'order-pick-4',
	'order-pick-5',
	'chaos-pick-1',
	'chaos-pick-2',
	'chaos-pick-3',
	'chaos-pick-4',
	'chaos-pick-5',
]

function filterGods(event){
	let godPool = document.getElementById('god-pool').children;
	for(let i = 0; i < godPool.length; ++i){
		if(godPool[i].id.startsWith(searchBar.value)){
			godPool[i].style.display = '';
		}else{
			godPool[i].style.display = 'none';
		}
	}
}

searchBar.addEventListener('input', filterGods)

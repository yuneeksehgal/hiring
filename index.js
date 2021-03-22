function grabImages(){
	const imageContainer = document.querySelector('#images');
	imageContainer.classList.toggle('loading', true);
	return ["img/lazy/punch.jpg", "img/lazy/texas.jpg"];
}
function createImages(srcs){
	srcs.forEach(src => {
		createImage(src);
	});
}
function createImage(src){
	const container = document.createElement("div");
	container.className = "col-4";
	const imgTag = document.createElement("img");
	imgTag.src = src;

	container.appendChild(imgTag);

	const imageContainer = document.querySelector('#images');
	imageContainer.appendChild(container);
}
var output;

var list = [
	"your straight",
	"your gay", 
	"your super gay", 
	"your very gay", 
	"your very super gay",
	"your so gay that the universe cant hold how much gay you have to you create a black hole that sucks up everything that ever existed just because of how much gay you have",
	]



var randomCookie = Math.floor(Math.random() * 6);

function rng(){ 
	Math.floor(Math.random() * 6);
};



function cookies(){
	if (randomCookie == 0){
		return output = list[0]
	}

	else if(randomCookie == 1){

		return output = list[1]
	}

	else if(randomCookie == 2){

		return output = list[2]
	}

	else if(randomCookie == 3){

		return output = list[3]
	}

	else if(randomCookie == 4){

		return output = list[4]
	}

	else if(randomCookie == 5){

		return output = list[5]
	}
	
};

cookies();
console.log(cookies(output))

document.getElementById("gay").innerHTML = output
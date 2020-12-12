var inputTxt, translateBtn, outputBox

window.onload=function() {
    inputTxt = document.querySelector("#input-txt");
    translateBtn = document.querySelector("#translate-it");
    translateBtn.addEventListener("click", translateApi);
    outputBox = document.querySelector("#output-text");


	function errorOcc(){
		alert("server is down, please come after an hour");
	}
	function translateApi(inputHere){
		let selectIt = document.querySelector('#selector');
		let selectVal = selectIt.value;
		let url = "";
		switch(selectVal){
			case "pf" : url = "https://api.funtranslations.com/translate/ferb-latin.json?text=";
			break;
			case "yoda" : url = "https://api.funtranslations.com/translate/yoda.json?text=";
			break;
			case "oe" : url = "https://api.funtranslations.com/translate/oldenglish.json?text=";
			break;
			case "sp" : url = "https://api.funtranslations.com/translate/shakespeare.json?text=";
			break;
			case "vulcan" : url = "https://api.funtranslations.com/translate/vulcan.json?text=";
			break;
			case "kling" : url = "https://api.funtranslations.com/translate/klingon.json?text=";
			break;
			case "groot" : url = "https://api.funtranslations.com/translate/groot.json?text=";
			break;
			case "smurf" : url = "https://api.funtranslations.com/translate/yoda.json?text=";
			break;
			case "wow" : url = "https://api.funtranslations.com/translate/wow.json?text=";
			break;
			case "mc" : url = "https://api.funtranslations.com/translate/morse.json?text=";
			break;
			case "braille" : url = "https://api.funtranslations.com/translate/braille.json?text=";
			break;
			
		}
		inputHere = inputTxt.value;
		var urlName = url + inputHere;
		fetch(url)
			.then(response => response.json())
			.then(json => {
				outputBox.innerText = json.contents.translated;
			})
			.catch(errorOcc);
	}
}
 
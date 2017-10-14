const {Button, TextView, TextInput, RadioButton, Page, NavigationView, ScrollView, ui} = require('tabris');

let navigationView = new NavigationView({
  left: 0, top: 0, right: 0, bottom: 0
}).appendTo(ui.contentView);

let page = new Page({
  title: 'Tietovisa - Avaruus'
}).appendTo(navigationView);

let Scroll = new ScrollView({
  id: 'Scroll',
  left: 0, top: 55, right: 0, bottom: 0
}).appendTo(ui.contentView);

let parent1 = new ScrollView({
  id: 'parent1',
}).appendTo(Scroll);

let parent2 = new ScrollView({
  id: 'parent2',
}).appendTo(Scroll);

let parent3 = new ScrollView({
  id: 'parent3',
}).appendTo(Scroll);

let parent4 = new ScrollView({
  id: 'parent4',
}).appendTo(Scroll);

let parent5 = new ScrollView({
  id: 'parent5',
}).appendTo(Scroll);

let parent6 = new ScrollView({
  id: 'parent6',
}).appendTo(Scroll);

let parent7 = new ScrollView({
  id: 'parent7',
}).appendTo(Scroll);

let parent8 = new ScrollView({
  id: 'parent8',
}).appendTo(Scroll);

let parent9 = new ScrollView({
  id: 'parent9',
}).appendTo(Scroll);

let parent10 = new ScrollView({
  id: 'parent10',
}).appendTo(Scroll);

let usertext2 = new TextView({
});

let usertext3 = new TextView({
});

let usertext4 = new TextView({
});

let usertext5 = new TextView({
});

let usertext7 = new TextView({
});

let usertext8 = new TextView({
});

let usertext9 = new TextView({
});

let score = new TextView({
  id: 'scoreLabel',
  font: "20px",
  background: '#FAAC58'
}).appendTo(parent10);

let tulos = new TextView({
  id: 'tulosLabel',
  font: "16px",
}).appendTo(parent10);

let virhe = new TextView({
  id: 'virheLabel',
  font: "16px",
  textColor: '#FE0000',
}).appendTo(parent10);

//pisteet
var i = 0;

//määritetään oikeat vastaukset tekstikentällisille kysymyksille
var A1 = 'tellus', A1_2 = 'Tellus';
var A6 = 'andromeda', A6_2 = 'Andromeda';
var A10 = 'laika', A10_2 = 'Laika';

//QUESTION 1 --------------------------------------------
new TextView({
  id: 'Q1Label',
  alignment: 'left',
  font: "16px",
  text: '1. Mikä on planeetta Maan latinankielinen nimitys?'
}).appendTo(parent1);

new TextView({
  id: 'Q1Ans',
  alignment: 'left',
  font: "16px",
  text: 'Vastaus:'
}).appendTo(parent1);

new TextInput({
  id: 'usertext1',
  font: "16px",
  message: '(yksi sana)'
}).appendTo(parent1);

//QUESTION 2 --------------------------------------------
new TextView({
  id: 'Q2Label',
  font: "16px",
  text: '2. Mikä seuraavista ei ole planeetta?'
}).appendTo(parent2);

['Maa', 'Aurinko', 'Mars'].forEach((title) => {
  new RadioButton({
    id: 'Q2options',
    font: "16px",
    left: 30, top: 'prev() 18',
    text: title,
  }).on('checkedChanged', ({target, value: checked}) => {
    if (checked) {
      usertext2.set("text",target.text);
    }
  }).appendTo(parent2);
});

//QUESTION 3 --------------------------------------------
new TextView({
  id: 'Q3Label',
  font: "16px",
  text: '3. Minkä niminen oli ensimmäinen Kuun kamaralle laskeutunut miehitetty avaruuslento?'
}).appendTo(parent3);

['Apollo 7', 'Apollo 11', 'Apollo 13'].forEach((title) => {
  new RadioButton({
    id: 'Q3options',
    font: "16px",
    left: 30, top: 'prev() 18',
    text: title,
  }).on('checkedChanged', ({target, value: checked}) => {
    if (checked) {
      usertext3.set("text",target.text);
    }
  }).appendTo(parent3);
});

//QUESTION 4 --------------------------------------------
new TextView({
  id: 'Q4Label',
  font: "16px",
  text: '4. Kuinka monta planeettaa Aurinkokunnassa on?'
}).appendTo(parent4);

['10', '6', '8'].forEach((title) => {
  new RadioButton({
    id: 'Q4options',
    font: "16px",
    left: 30, top: 'prev() 18',
    text: title,
  }).on('checkedChanged', ({target, value: checked}) => {
    if (checked) {
      usertext4.set("text",target.text);
    }
  }).appendTo(parent4);
});

//QUESTION 5 --------------------------------------------
new TextView({
  id: 'Q5Label',
  font: "16px",
  text: '5. Mikä seuraavista ei ole Saturnuksen kuu?'
}).appendTo(parent5);

['Zeus', 'Phoebe', 'Titan'].forEach((title) => {
  new RadioButton({
    id: 'Q5options',
    font: "16px",
    left: 30, top: 'prev() 18',
    text: title,
  }).on('checkedChanged', ({target, value: checked}) => {
    if (checked) {
      usertext5.set("text",target.text);
    }
  }).appendTo(parent5);
});

//QUESTION 6 --------------------------------------------
new TextView({
  id: 'Q6Label',
  alignment: 'left',
  font: "16px",
  text: '6. Minkä niminen on Linnunrataa lähin suuri galaksi?'
}).appendTo(parent6);

new TextView({
  id: 'Q6Ans',
  alignment: 'left',
  font: "16px",
  text: 'Vastaus:'
}).appendTo(parent6);

new TextInput({
  id: 'usertext6',
  font: "16px",
  message: '(yksi sana)'
}).appendTo(parent6);

//QUESTION 7 --------------------------------------------
new TextView({
  id: 'Q7Label',
  font: "16px",
  text: '7. Kuinka kauan kestää Maan kierros Auringon ympäri?'
}).appendTo(parent7);

['Päivän', 'Kuukauden', 'Vuoden'].forEach((title) => {
  new RadioButton({
    id: 'Q7options',
    font: "16px",
    left: 30, top: 'prev() 18',
    text: title,
  }).on('checkedChanged', ({target, value: checked}) => {
    if (checked) {
      usertext7.set("text",target.text);
    }
  }).appendTo(parent7);
});

//QUESTION 8 --------------------------------------------
new TextView({
  id: 'Q8Label',
  font: "16px",
  text: '8. Mikä on supernova?'
}).appendTo(parent8);

['Meteoriittisade', 'Tähden räjähdys', 'Valon aallonpituus'].forEach((title) => {
  new RadioButton({
    id: 'Q8options',
    font: "16px",
    left: 30, top: 'prev() 18',
    text: title,
  }).on('checkedChanged', ({target, value: checked}) => {
    if (checked) {
      usertext8.set("text",target.text);
    }
  }).appendTo(parent8);
});

//QUESTION 9 --------------------------------------------
new TextView({
  id: 'Q9Label',
  font: "16px",
  text: '9. Mikä seuraavista ei ole taivaankappale?'
}).appendTo(parent9);

['Meteoroidi', 'Meteoriitti', 'Meteorologi'].forEach((title) => {
  new RadioButton({
    id: 'Q9options',
    font: "16px",
    left: 30, top: 'prev() 18',
    text: title,
  }).on('checkedChanged', ({target, value: checked}) => {
    if (checked) {
      usertext9.set("text",target.text);
    }
  }).appendTo(parent9);
});

//QUESTION 10 --------------------------------------------
new TextView({
  id: 'Q10Label',
  alignment: 'left',
  font: "16px",
  text: '10. Minkä niminen oli ensimmäinen elävä olento Maan kiertoradalla? (Vihje: koira)'
}).appendTo(parent10);

new TextView({
  id: 'Q10Ans',
  alignment: 'left',
  font: "16px",
  text: 'Vastaus:'
}).appendTo(parent10);

new TextInput({
  id: 'usertext10',
  font: "16px",
  message: 'Kirjoita vastaus'
}).appendTo(parent10);

// --------------------------------------------

//SUBMIT BUTTON
let button1 = new Button({
  id: 'submitButton',
  text: 'Lähetä!',
  font: "20px",
  background: '#8b0000',
  textColor: 'white'
}).on('dispose', () => {
	console.log("Button disposed!");
}).on('select', () => {
  
  //jos yksi tai useampi radiobutton-vastaus on tyhjä -> virhe
  if (usertext2.text == "" || usertext3.text == "" || usertext4.text == "" || usertext5.text == "" || usertext7.text == "" || usertext8.text == "" || usertext9.text == "") {
    	virhe.set("text","Virhe! Yksi tai useampi vastaus puuttuu.");
  } else {
    
    //tyhjää virheilmoitus
    (virhe.text = "")
    
    // poimitaan usertext-muuttujiin käyttäjän syöttämät tekstikenttä-vastaukset
 	var usertext1 = parent1.children("#usertext1").get("text");
  	var usertext6 = parent6.children("#usertext6").get("text");
  	var usertext10 = parent10.children("#usertext10").get("text");
    
    // vastaus 1 oikein -> piste
     if (usertext1 == A1 || usertext1 == A1_2) {
     	i++;
     }
     // vastaus 2 oikein -> piste
     if (usertext2.text == "Aurinko") {
        i++;
     }
     // vastaus 3 oikein -> piste
     if (usertext3.text == "Apollo 11") {
        i++;
     }
     // vastaus 4 oikein -> piste
     if (usertext4.text == "8") {
        i++;
     }
     // vastaus 5 oikein -> piste
     if (usertext5.text == "Zeus") {
        i++;
     }
     // vastaus 6 oikein -> piste
     if (usertext6 == A6 || usertext6 == A6_2) {
        i++;
     }
     // vastaus 7 oikein -> piste
     if (usertext7.text == "Vuoden") {
        i++;
     }
     // vastaus 8 oikein -> piste
     if (usertext8.text == "Tähden räjähdys") {
        i++;
     }
     // vastaus 9 oikein -> piste
     if (usertext9.text == "Meteorologi") {
        i++;
     }
     // vastaus 10 oikein -> piste
     if (usertext10 == A10 || usertext10 == A10_2) {
     	i++;
     }
    
   	 //näytetään score-label
      score.set("text","Pisteesi: " + i + "/10");

     //näytetään tulos-label
      //0-3 pistettä
      if (i < 4) {
      	tulos.set("text","Voi rähmä, metsään meni! Sinulla on parantamisen varaa, mutta ethän silti luovuta vielä.");
      //4-7 pistettä
      } else if (i > 3 && i < 8) {
          tulos.set("text","Ei paha! Sinulla on selvästi tietämystä aiheesta.");
      //8-10 pistettä
      } else {
          tulos.set("text","Vau! Sinä taidatkin olla melkoinen ydinfyysikko!");
      }
    
      //dispose button
      button1.dispose();
    
 }
}).appendTo(parent10);


Scroll.apply({
  '#parent1': {left: 0, right: 0, top: 0},
  '#parent2': {left: 0, right: 0, top: '#parent1 18'},
  '#parent3': {left: 0, right: 0, top: '#parent2 18'},
  '#parent4': {left: 0, right: 0, top: '#parent3 18'},
  '#parent5': {left: 0, right: 0, top: '#parent4 18'},
  '#parent6': {left: 0, right: 0, top: '#parent5 18'},
  '#parent7': {left: 0, right: 0, top: '#parent6 18'},
  '#parent8': {left: 0, right: 0, top: '#parent7 18'},
  '#parent9': {left: 0, right: 0, top: '#parent8 18'},
  '#parent10': {left: 0, right: 0, top: '#parent9 18'}
});

parent1.apply({
  '#Q1Label': {left: 10, right: 10, top: 25},
  '#Q1Ans': {left: 10, top: '#Q1Label 18'},
  '#usertext1': {left: '#Q1Ans 20', right: 10, baseline: '#Q1Ans'},
});

parent2.apply({
  '#Q2Label': {left: 10, right: 10, top: 0},
});

parent3.apply({
  '#Q3Label': {left: 10, right: 10, top: 0},
});

parent4.apply({
  '#Q4Label': {left: 10, right: 10, top: 0},
});

parent5.apply({
  '#Q5Label': {left: 10, right: 10, top: 0},
});

parent6.apply({
  '#Q6Label': {left: 10, right: 10, top: 0},
  '#Q6Ans': {left: 10, top: '#Q6Label 18'},
  '#usertext6': {left: '#Q6Ans 20', right: 10, baseline: '#Q6Ans'},
});

parent7.apply({
  '#Q7Label': {left: 10, right: 10, top: 0},
});

parent8.apply({
  '#Q8Label': {left: 10, right: 10, top: 0},
});

parent9.apply({
  '#Q9Label': {left: 10, right: 10, top: 0},
});

parent10.apply({
  '#Q10Label': {left: 10, right: 10, top: 0},
  '#Q10Ans': {left: 10, top: '#Q10Label 18'},
  '#usertext10': {left: '#Q10Ans 20', right: 10, baseline: '#Q10Ans'},
  '#submitButton': {left: 10, right: 10, top: '#Q10Ans 40'},
  '#virheLabel': {left: 10, right: 10, top: '#submitButton 30'},
  '#scoreLabel': {centerX: 0, top: '#Q10Label 80'},
  '#tulosLabel': {left: 10, right: 10, top: '#scoreLabel 10'}
});
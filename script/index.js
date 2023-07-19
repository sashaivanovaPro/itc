//-------Header--------//
console.log("hi");

const header = document.createElement("header");
const header_top_block = document.createElement("div");
header_top_block.classList.add("header_top_block");

// pass throu html order

const sloganImg = document.createElement("img");
sloganImg.src = "./img/logo.png";

const slogan = document.createElement("h1");
slogan.textContent = "SLOGAN SLOGAN SLOGAN";

// navigation //

const nav = document.createElement("nav");
const navList = document.createElement("ul");
navList.classList.add("menu");

menuItems = ["Главная", "О приложении", "О проекте", "Скачать", "Контакты"];

for (let i = 0; i < menuItems.length; i++) {
  const menuItem = document.createElement("li");
  const menuLink = document.createElement("a");
  menuLink.classList.add("menu_item");
  menuLink.href = "#";
  menuLink.textContent = menuItems[i];
  menuItem.append(menuLink);
  navList.append(menuItem);
}

// Burger //

const burger = document.createElement("nav");
burger.classList.add("burger_menu");

const burgerCheckbox = document.createElement("input");
burgerCheckbox.type = "checkbox";
burgerCheckbox.id = "toggle";

const burgerLabel = document.createElement("label");
burgerLabel.for = "toggle";
burgerLabel.classList.add("btn");

const burgerSpan = document.createElement("span");

const burgerMenu = document.createElement("ul");
burgerMenu.classList.add("menu1");

burgerItems = ["Главная", "Проекты", "Команда", "Блог", "Контакты"];
for (let i = 0; i < burgerItems.length; i++) {
  const burgerItem = document.createElement("li");
  const burgerLink = document.createElement("a");
  burgerLink.classList.add("menu_item");
  burgerLink.href = "#";
  burgerLink.textContent = burgerItems[i];
  burgerItem.append(burgerLink);
  burgerMenu.append(burgerItem);
}

// ------ MAIN --------- //

const main = document.createElement("main");

// ----- section QUEST in MAIN ----- //

const quest = document.createElement("section");
quest.classList.add("quest_section");

const questions = [
  "Часто ли Вы опаздываете на работу (учёбу)?",
  "Часто ли Вы опаздываете на работу (учёбу)?",
  "Часто ли Вы опаздываете на работу (учёбу)?",
];

for (let i = 0; i < questions.length; i++) {
  const questionBlock = document.createElement("div");
  questionBlock.classList.add("quest_block");
  const questionImg = document.createElement("img");
  questionImg.src = "./img/human.png";
  questionImg.alt = "question";
  const questionParagraph = document.createElement("p");
  questionParagraph.textContent = questions[i];
  questionBlock.append(questionImg, questionParagraph);
  quest.append(questionBlock);
}

// ----- section CONTENT in MAIN ----- //

const content = document.createElement("section");
content.classList.add("content");

const contentHeader = document.createElement("h2");
contentHeader.textContent = "О приложении";

const photo = document.createElement("div");
photo.classList.add("photo");

const videoImg = document.createElement("img");
videoImg.id = "video";
videoImg.src = "./img/44.png";
videoImg.alt = "app";

const buttonImg = document.createElement("img");
buttonImg.id = "button";
buttonImg.src = "./img/play-button.png";
buttonImg.alt = "button";

// ----- section MOBILE in MAIN ----- //

const mobile = document.createElement("section");
mobile.classList.add("mob_phone_question");

const mobileQuestions = [
  "./img/question.png",
  "./img/question.png",
  "./img/question.png",
  "./img/question.png",
  "./img/question.png",
];

for (let i = 0; i < mobileQuestions.length; i++) {
  const mobileImg = document.createElement("img");
  mobileImg.classList.add("card");
  mobileImg.src = mobileQuestions[i];
  mobileImg.alt = "queshion_table";
  mobile.append(mobileImg);
}

// ----- section ABOUT in MAIN ----- //

const about = document.createElement("section");
about.classList.add("about");

const aboutHeading = document.createElement("div");
aboutHeading.classList.add("about_heading");

const aboutH2 = document.createElement("h2");
aboutH2.textContent = "О проекте";

const aboutLesson = document.createElement("div");
aboutLesson.classList.add("about_lesson");

const lessonText =
  "Курс для начинающих предпринимателей, направленный на качественный\n" +
  "результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы\n" +
  "в своем деле помогают участникам на всех этапах развития их бизнеса:\n" +
  "от разработки идеи до ее реализации.\n";

const lessonParagraph = document.createElement("p");
lessonParagraph.textContent = lessonText;
lessonParagraph.classList.add("about_lesson");

// ----- section APP in MAIN ----- //

const app = document.createElement("section");
app.classList.add("app");

const appH2 = document.createElement("h2");
appH2.textContent = "Скачать";

const appPhoto = document.createElement("div");
appPhoto.classList.add("block_photo");

const appImg = document.createElement("img");
appImg.id = "android";
appImg.src = "./img/android.png";
appImg.alt = "android";

const qrImg = document.createElement("img");
qrImg.id = "icon";
qrImg.src = "./img/icon.png";
qrImg.alt = "qr code";

const appText = document.createElement("div");
appText.classList.add("text");

const appParagraph = document.createElement("p");
appParagraph.textContent =
  "Курс для начинающих предпринимателей, направленный на качественный\n" +
  "результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы\n" +
  "в своем деле помогают участникам на всех этапах развития их бизнеса:\n" +
  "от разработки идеи до ее реализации.\n";

// ------ FOOTER --------- //

const footer = document.createElement("footer");
footer.classList.add("footer");

const footerHeading = document.createElement("h2");
footerHeading.textContent = "Some";

const socialNet = document.createElement("div");
socialNet.classList.add("social_network");

const vkImg = document.createElement("img");
vkImg.src = "./img/vk.png";
vkImg.alt = "vkontakte";

const igImg = document.createElement("img");
igImg.src = "./img/instagram.png";
igImg.alt = "instagram";

const fbImg = document.createElement("img");
fbImg.src = "./img/facebook.png";
fbImg.alt = "facebook";

const contacts = document.createElement("div");
contacts.classList.add("contacts");

const phone = document.createElement("div");
phone.classList.add("phone");

const phoneHeading = document.createElement("h3");
phoneHeading.textContent = "Контакты";

const phoneParagraph = document.createElement("p");
phoneParagraph.textContent =
  "Tel.: +996 (312) 915000 + Еxt. Fax: +996 (312) 915 028";

const adress = document.createElement("div");
adress.classList.add("adress");

const adressHeading = document.createElement("h3");
adressHeading.textContent = "Адреса";

const adressParagraph = document.createElement("p");
adressParagraph.textContent =
  "American University of Central Asia 7/6 Aaly Tokombaev Street\n";
("Bishkek, Kyrgyz Republic 720060\n");

const help = document.createElement("div");
help.classList.add("help");

const helpHeading = document.createElement("h3");
helpHeading.textContent = "Помощь";

help.append(helpHeading);

for (let i = 0; i < 3; i++) {
  const helpParagraph = document.createElement("p");
  helpParagraph.textContent = "Помощь";
  help.append(helpParagraph);
}

// add in body //

const body = document.body;

// append Header //
body.append(header, main, footer);
header.append(header_top_block, nav, burger, burgerMenu);
header_top_block.append(sloganImg, slogan);

// header.append(nav);
nav.append(navList);

// navList.append(menuItem);
// menuItem.append(menuLink);

header.append(burger);
burger.append(burgerCheckbox, burgerLabel, burgerMenu);
burgerLabel.append(burgerSpan);

//append Main //
main.append(quest, content, mobile, about, app);

content.append(contentHeader, photo);

photo.append(videoImg, buttonImg);

about.append(aboutHeading, aboutLesson);

aboutHeading.append(aboutH2);

aboutLesson.append(lessonParagraph);

app.append(appH2, appPhoto, appText);

appPhoto.append(appImg, qrImg);

appText.append(appParagraph);

footer.append(footerHeading, socialNet, contacts);

socialNet.append(vkImg, igImg, fbImg);

contacts.append(phone, adress, help);

phone.append(phoneHeading, phoneParagraph);

adress.append(adressHeading, adressParagraph);

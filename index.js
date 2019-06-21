var msg = $('.message');
var redButton = $('.red');
redButton.on("click", redQuote);
function redQuote () {
  msg.text("Red is such an interesting color to correlate with emotion, because it's on both ends of the spectrum. On one end you have happiness, falling in love, infatuation with someone, passion, all that. On the other end, you've got obsession, jealousy, danger, fear, anger and frustration.  -Taylor Swift");
}
var orangeButton = $('.orange');
orangeButton.on("click", orangeQuote)
function orangeQuote () {
  msg.text("Orange is the color of the sun. It is vital and a good color generally, indicating thoughtfulness and consideration of others. -Edgar Cayce")
}
var yellowButton = $('.yellow');
yellowButton.on("click", yellowQuote)
function yellowQuote () {
  msg.text("We find from experience that yellow excites a warm and agreeable impression.... The eye is gladdened, the heart expanded and cheered, a glow seems at once to breathe toward us.-Johann Wolfgang Von Goethe")
}
var greenButton = $('.green');
greenButton.on("click", greenQuote)
function greenQuote () {
  msg.text("Green in nature is one thing, green in literature another. Nature and letters seem to have a natural antipathy; bring them together and they tear each other to pieces.-Virginia Woolf")
}
var blueButton = $('.blue');
blueButton.on("click", blueQuote)
function blueQuote () {
  msg.text("Blue is the only color which maintains its own character in all its tones it will always stay blue…-Raoul Dufy")
}
var purpleButton = $('.purple');
purpleButton.on("click", purpleQuote)
function purpleQuote () {
  msg.text("Purple is the color of royalties.It stands for luxury, wealth and sophistication. It is also the colour of passion, romance and sensitivity. -Amira")
}

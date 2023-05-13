
var qouteArray = [
   {
    quote:`“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`,

    author:'--William W. Purkey'
   },
   {
    quote:`“So many books, so little time.”`,

    author:'--Frank Zappa'
   },
   {
    quote:`“A room without books is like a body without a soul.”`,

    author:'--Marcus Tullius Cicero'
   },
   {
    quote:`“You only live once, but if you do it right, once is enough.”`,

    author:'--Mae West'
   }
]

var quotepara = document.getElementById('quote-para');
var quoteauthor = document.getElementById('quote-author');

function createQoute(){

  var quotelement = Math.floor(Math.random()*qouteArray.length );

  quotepara.innerHTML = qouteArray[quotelement].quote
  quoteauthor.innerHTML = qouteArray[quotelement].author
  
}

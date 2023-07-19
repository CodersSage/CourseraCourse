(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


    var helloSpeaker = {};

    (function speak (helloSpeaker) {
      var   speakWord = "Hello";
      
      helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
      };
    })(helloSpeaker);


    var byeSpeaker = {};

    (function speak (byeSpeaker) {
      var speakWord = "Good Bye";
      
      byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
      };
    })(byeSpeaker);





    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {

  byeSpeaker.speak(names[i]);
          } else {
            helloSpeaker.speak(names[i]);
          }
        }
        
        })();
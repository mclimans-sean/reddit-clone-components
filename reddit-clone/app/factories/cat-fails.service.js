(function() {
  'use strict';

  angular
    .module('catApp')
    .factory('catFailsService', catFailsService)

    function catFailsService() {
      let cats = [
        {
          "title": "I Believe I Can Fly... FAIL",
          "description": "Sometimes cats do stupid things",
          "contributor": "Waylon Smithers",
          "image_url": "https://media.giphy.com/media/NqZn5kPN8VVrW/giphy.gif",
          "votes": 6,
          "submitted": "2017-07-20 09:23:46",
          "user_comments": [
            {"comment": "I hope he landed on some kids head"},
            {"comment": "Which one of us HASN'T tried to be Superman after a few drinks?"}
          ]
        },
        {
          "title": "MOVE TOWARDS THE LIGHT BRO!!!",
          "description": "Kids are grown & moved out. Life just seems to drag on. Garfield sees the light & is ready to move on. Joke's on him!!",
          "contributor": "Martin Prince",
          "image_url": "https://media.giphy.com/media/bU6GKBpWaJ4tO/giphy.gif",
          "votes": 5,
          "submitted": "2017-04-13 11:17:26",
          "user_comments": [
            {"comment": "There is no god"},
            {"comment": "That's what happened to grandpa"}
          ]
        },
        {
          "title": "Do You Even Leap, Bru??",
          "description": "Dumb cat tries to take a shortcut, but his leaping skills are way lame",
          "contributor": "Moe Szyslak",
          "image_url": "https://media.giphy.com/media/mKnfVhZfmFjMs/giphy.gif",
          "votes": 6,
          "submitted": "2016-09-27",
          "user_comments": [
            {"comment": "What the hell?"},
            {"comment": "I can do that"}
          ]
        },
        {
          "title": "Is This a Fail or is it COMPLETELY BRILLIANT???",
          "description": "I would pay money to do this...",
          "contributor": "Kent Brockman",
          "image_url": "https://media.giphy.com/media/WHchuw7pNfGcU/giphy.gif",
          "votes": 8,
          "submitted": "2015-11-10",
          "user_comments": [
            {
              "comment": "I WANT THE CAT I WANT THE PAPASAN I WANT EVERYTHING!!!!",
              "user": "catLady 74",
              "posted": "2015-11-11"
            },
            {
              "comment": "I do that to celebrate going to bed",
              "user": "homebound574",
              "posted": "2015-11-12"
            },
            {
              "comment": "pfft... my grandma does that",
              "user": "doubleWide5000",
              "posted": "2016-07-23"
            }
          ]
        }
      ]

      return cats
      
    }
}());

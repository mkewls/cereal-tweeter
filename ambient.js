var tessel = require('tessel');
var ambientlib = require('ambient-attx4');
var ambient = ambientlib.use(tessel.port['A']);
var twitter = require('twitter');
var util = require('util');


//github code
ambient.on('ready', function () {
  var counter = 0;
  // Set a light level trigger
  // The trigger is a float between 0 and 1
  ambient.setLightTrigger(0.5);

  // Set a sound level trigger
  // The trigger is a float between 0 and 1
  ambient.setSoundTrigger(0.1);

  console.log('Waiting for or a sound...'); //a bright light

  ambient.on('sound-trigger', function(data) {
    counter++;
    if(counter === 1) {
      console.log("Something happened with sound: ", data);
      var led1 = tessel.led[0];
      var led2 = tessel.led[1];
      led1.on();
      led2.toggle();
      led1.toggle();
    }

    if(counter === 2) {
      var twitterHandle = '@fullstackcereal';
      // The status to tweet
      var status = 'Dear @Fullstack and @HopperAcademy, we are out of cereal. We need more cereal :)\n #tesselhackathon';

      // Enter the oauth key and secret information
      var twit = new twitter({
        consumer_key: 'fF6W03D1aE9DxWUa4jVgDogAF',
        consumer_secret: 'CjoOYsb8QgsAOoTY9kUp5Gy4ZSlF65dsDtxLT9iBxqdGtICd2c',
        access_token_key: '783033988411748353-HS4EM7yHyXTnJ8Y0fvnfa9luwztAtnJ',
        access_token_secret: 'Xt2zL3kDLSJlE3xo2prM2zJzWQhw6PA2SJ4kqBhRQb9GH'
      });

      // Make a tweet!
    twit.post('statuses/update', {
      status: 'Dear @Fullstack and @HopperAcademy, we are out of cereal. We need more cereal :)\n #tesselhackathon'}, 
      function(error, tweet, response) {
       if(error) throw error;
        console.log(tweet);  // Tweet body.
        console.log(response);  // Raw response object.
    });
} 

    if(counter > 2) {
      counter = 0;
      setTimeout(function () {
      },1000);
    }

    // Clear it
    // ambient.clearSoundTrigger();

    // //After 1.5 seconds reset sound trigger
    // setTimeout(function () {

    //     ambient.setSoundTrigger(0.07);

    // },1000); //maybe just exit
    //one for coffee and two for cerael

  });
});

ambient.on('error', function (err) {
  console.log(err);
});



//STARTER CODE from tessel

// ambient.on('ready', function () {
//  // Get points of light and sound data.
//   setInterval( function () {
//     ambient.getLightLevel( function(err, lightdata) {
//       if (err) throw err;
//       ambient.getSoundLevel( function(err, sounddata) {
//         if (err) throw err;
//         console.log("Light level:", lightdata.toFixed(8), " ", "Sound Level:", sounddata.toFixed(8));
//           if(sounddata.toFixed(8)>0.06){
//             //triggers tweet
//           }
//       });
//     });
//   }, 500); // The readings will happen every .5 seconds
// });

// ambient.on('error', function (err) {
//   console.log(err);
// });
//***************************

// var tessel = require('tessel');
// var ambientlib = require('../'); // Replace '../' with 'ambient-attx4' in your own code

// var ambient = ambientlib.use(tessel.port['A']);

//LIGHT
  // ambient.on('light-trigger', function(data) {
  //   console.log("Our light trigger was hit:", data);

  //   // Clear the trigger so it stops firing
  //   ambient.clearLightTrigger();
  //   //After 1.5 seconds reset light trigger
  //   setTimeout(function () {

  //       ambient.setLightTrigger(0.5);

  //   },200);
  // });



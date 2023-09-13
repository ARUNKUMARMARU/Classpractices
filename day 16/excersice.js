function greetings(name, callback){
    setTimeout(function () {
          callback(`hello! ${name},..`)    }, 2000)
}

greetings('Arunkumar', function (callback) {
    console.log(callback);
});

var text="Explore Your Digital Identity and Physical Self";
var delay=20;
var currentChar=1;
var destination="indexQuestion";

startTyping(text, 50, "indexQuestion");

function type()
{
  if (document.getElementById)
  {
    var dest=document.getElementById(destination);
    if (dest)
    {
      dest.innerHTML=text.substr(0, currentChar);
      currentChar++
      if (currentChar>text.length)
      {
        currentChar=1;
        setTimeout("type()", 5000);
      }
      else
      {
        setTimeout("type()", delay);
      }
    }
  }
}

function startTyping(textParam, delayParam, destinationParam)
{
  text=textParam;
  delay=delayParam;
  currentChar=1;
  destination=destinationParam;
  type();
}



window.fbAsyncInit = function() {
    FB.init({
      appId      : '372355619822069',
      xfbml      : true,
      version    : 'v2.8',
      status     : true,
      cookie     : true,
    });



    FB.getLoginStatus(function(response) {
        // statusChangeCallback(response);


        if (response.status === 'connected') {
            console.log('connected');
            console.log(response);


        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'We are not logged in.'
        } else {
            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
        }
    });
};


(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


$('#test').click(function(){
    console.log("test");
    FB.login(function(response) {
        if (response.status === 'connected') {
            console.log("button");
            window.location= "explore.html";    //CHANGE THIS!!

            document.getElementById('status').innerHTML = 'We are connected.';
            document.getElementById('login').style.visibility = 'hidden';

        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'We are not logged in.'
        } else {
            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
        }
    }, {
        scope: 'email, user_birthday'
    });

});

function login() {
    FB.login(function(response) {
        if (response.status === 'connected') {
            console.log("button");
            // window.open= "explore.html";  //CHANGE THIS!!

            document.getElementById('status').innerHTML = 'We are connected.';
            document.getElementById('login').style.visibility = 'hidden';

        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'We are not logged in.'
        } else {
            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
        }
    }, {
        scope: 'email, user_birthday'
    });
}

$('#test2').click(function(){
    function fbLogout() {
        console.log("sign out");
        document.location.href="index.html";
        FB.getLoginStatus(function(response){
            if (response && response.status ==='connected'){
                FB.logout(function (response) {
                document.location.href="index.html";
                });
            }
        })
       
    };
});

function fbLogout() {
    console.log("sign out");

    document.location.href = "index.html";
    FB.logout(function (response) {
        console.log("sign out");
        window.location.reload("index.html");
    });
}


var modalButton = document.getElementById('signin');
if (modalButton!=null) {
    modalButton.addEventListener('click',openModal,false);


    function openModal () {
        transparentLayer.style.display = 'block';
        modalBox.style.display= 'block';
    }

    function exitModal () {
        transparentLayer.style.display = 'none';
        modalBox.style.display = 'none';
    }
    transparentLayer.addEventListener('click',exitModal,false);

 
    window.onkeydown = function(e){
        if (e.keyCode == 27){
            exitModal();
        }
    };


    var exitButton = document.getElementById('exitModal');
    exitButton.addEventListener('click',exitModal,false);
}





/*function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
    {
    c_end = c_value.length;
    }
  c_value = unescape(c_value.substring(c_start,c_end));
  }
return c_value;
}

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function checkCookie()
{
var username=getCookie("username");
if (username!=null && username!="")
  {
  $("#greeting").append("Hi " + username + " have fun playing crazy creatures").fadeIn(3000);
  }
else 
  {
  username=prompt("Please enter your name:","");
  if (username!=null && username!="")
    {
    setCookie("username",username,365);
    }
  }
}
*/

var user_name;
var expires = new Date();
function display() {
if ((document.cookie == "") == false){

var length = document.cookie.length -1;
var message = document.cookie.substr(5, length);
$("#greeting").append("Hi " + message + " " + "have fun playing crazy creatures").fadeOut(6000);
}
}



function check(){

user_name = document.getElementById("name").value;
expires.setFullYear(expires.getFullYear() + 1);

document.cookie = escape("name") + " " + escape(user_name) + "; expires =" + expires.toGMTString();
$("#bonus-intro").fadeIn(1000);

}
































/* cookie code borrowed from https://bobbyhadz.com/blog/javascript-check-if-cookie-exists */

function getCookie(name) {
  const nameEquals = name + "=";
  const cookieArray = document.cookie.split(";");

  for (cookie of cookieArray) {
    while (cookie.charAt(0) == " ") {
      cookie = cookie.slice(1, cookie.length);
    }

    if (cookie.indexOf(nameEquals) == 0)
      return decodeURIComponent(cookie.slice(nameEquals.length, cookie.length));
  }

  return null;
}

function setCookie(name, value, days = 7) {
  let expires = "";

  if (days) {
    const date = new Date();

    date.setDate(date.getDate() + days);

    expires = "; expires=" + date.toUTCString();
  }

  document.cookie =
    name + "=" + (encodeURIComponent(value) || "") + expires + "; path=/";
}

function checkR18() {
  if (document.getElementById("r18_check").checked) {
    setCookie("R18", "approved");
  }
  showR18();
}

function showR18() {
  document.getElementById("r18_wrapper").style.display = "none";
}

function whenLoaded() {
  if (getCookie("R18") == "approved") {
    showR18();
  }
  let to_show = document.getElementsByClassName("onlyjs");
  for (let i = 0; i < to_show.length; i++) {
    to_show[i].style.display = "initial";
  }
}

whenLoaded();


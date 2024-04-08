function GetBrowser(data) {
  //   var ua = global.navigator.userAgent;
  var ua = data;
  var browserName;

  if (/Chrome/.test(ua)) {
    browserName = "Chrome";
  } else if (/Firefox/.test(ua)) {
    browserName = "Firefox";
  } else if (/Safari/.test(ua)) {
    browserName = "Safari";
  } else if (/Edge/.test(ua)) {
    browserName = "Edge";
  } else if (/Opera/.test(ua)) {
    browserName = "Opera";
  } else {
    browserName = "Unknown"; // If the browser is not one of the commonly detected ones
  }

  return browserName;
}

function IsSecure(url) {
  return url.startsWith("https");
}

function GetConvertedDateTime() {
  const localDateString = new Date().toLocaleDateString();

  const localTimeString = new Date().toLocaleTimeString();

  return {
    date: localDateString,
    time: localTimeString,
  };
}

module.exports = {
  GetBrowser,
  IsSecure,
  GetConvertedDateTime,
};

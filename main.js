addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

  const printZones = new Map();

  // Returning Just UTC 
  if (request.url == "https://icanhaztime.com/" || 
      request.url == "http://icanhaztime.com/" || 
      request.url == "https://www.icanhaztime.com/" || 
      request.url == "http://www.icanhaztime.com/" || 
      request.url == "https://icanhaztime.sundquist.workers.dev/") {

    return new Response(Date().toString().substr(0,24) + " +00:00 \n", {
      headers: {
      "content-type": "text/html;charset=UTF-8",
    },})

  // Returning all Time Zones 
  } else if (request.url == "https://icanhaztime.com/all" || 
             request.url == "http://icanhaztime.com/all" || 
             request.url == "https://www.icanhaztime.com/all" || 
             request.url == "http://www.icanhaztime.com/all" || 
             request.url == "https://icanhaztime.sundquist.workers.dev/all") {

    // Is it Daylight Savings? 
    daylightsavings = false 

    //let locale = request.cf.timezone 
    let locale = "America/Los_Angeles"
    let html = ""
    let date = new Date();
    dateStr = date.toLocaleString('en-US', { timeZone: locale }).toString().split(" ")[1].split(":")[0]

    date.setHours(date.getHours()-12)
    for (let i = -12; i <= 12; i++){
        html += date.toString().substr(0,24) + " "
        if ( i <= -10) {
            html += i
        } else if (-9 <= i && i < 0) {
            html += "-0" + Math.abs(i)
        } else if ( i >= 0 && i <= 9) {
            html += "+0" + i
        } else if (i >= 10) {
            html += "+" + i
        }
        
        if (i == 0){
            html += ":00 <--- UTC"
        } else {
            html += ":00"
        }

        if (date.getHours() == dateStr){
            html += " <--- Your Timezone \n"
        } else {
            html += "\n"
        }

        date.setHours(date.getHours()+1)
    }

    return new Response(html, {
      headers: {
      "content-type": "text/html;charset=UTF-8",
    },}) 
  
  // Returing a Specific Timezone 
  } else {

    return new Response(
        "You requested: " + request.url + "\n" +  
        "Available Options: \n" +
        "\thttps://icanhaztime.com/\n" +
        "\thttps://icanhaztime.com/all\n" +
        "\thttps://icanhaztime.com/+060 <--- In progress\n" 
        )
  }





  return new Response("Error: Unexpected URL: " + request.url + "\n\tSee https://www.icanhaztime.com/help", {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },})

}


### A worker script located at https://www.icanhaztime.com

Time Zone data can be populated from, timezone_db.tsv or timezone_db_api_call

Source: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

```
Available options:
	https://icanhaztime.com/
		- Prints just the current time in UTC
	https://icanhaztime.com/local 	
		- Prints 24 timezones, highlight UTC and local
	https://icanhaztime.com/Chicago
		- Prints locale, see icanhaztime.com/getzones
	https://icanhaztime.com/getzones
		- List all available zones, only request the last part, ie. America/Chicago -> Chicago
```

Todo options:

How to anwser the question, "I have a meeting at 2:00UTC what is this in CST?"

 
```
	https://icahaztime.com/Chicago?setHour=01&setMin=59 <- set a zone's time and print others 
```

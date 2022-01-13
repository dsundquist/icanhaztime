
### A worker script located at https://www.icanhaztime.com

Time Zone data can be populated from, timezone_db.tsv or timezone_db_api_call

Source: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

### Working Examples: 
```
curl https://www.icanhaztime.com/
    -Returns:
    Mon Jan 10 2022 23:36:22 +00:00
```
```
curl https://www.icanhaztime.com/New_York
    -Returns:
    Mon Jan 10 2022 18:36:22 -05:00
```
```
curl https://www.icanhaztime.com/UTC/New_York
    -Returns:
    Mon Jan 10 2022 23:36:22 +00:00 <--- UTC
    Mon Jan 10 2022 18:36:22 -05:00 <--- America/New_York
```
```
curl https://www.icanhaztime.com/Non-Existent
    -Returns:
    Cannot find "Non-Existent", see https://www.icanhaztime.com/help
```
```
curl https://www.icanhaztime.com/getzones
    Africa/Abidjann
    ...
    Zulu
```

### TODO: 

```
curl https://www.icanhaztime.com/all
    -Returns:
    Mon Jan 10 2022 11:51:43 -12:00
    Mon Jan 10 2022 12:51:43 -11:00
    Mon Jan 10 2022 13:51:43 -10:00
    Mon Jan 10 2022 14:51:43 -09:00
    Mon Jan 10 2022 15:51:43 -08:00
    Mon Jan 10 2022 16:51:43 -07:00
    Mon Jan 10 2022 17:51:43 -06:00 <--- America/Chicago
    Mon Jan 10 2022 18:51:43 -05:00
    Mon Jan 10 2022 19:51:43 -04:00
    Mon Jan 10 2022 20:51:43 -03:00
    Mon Jan 10 2022 21:51:43 -02:00
    Mon Jan 10 2022 22:51:43 -01:00
    Mon Jan 10 2022 23:51:43 +00:00 <--- UTC
    Tue Jan 11 2022 00:51:43 +01:00
    Tue Jan 11 2022 01:51:43 +02:00
    Tue Jan 11 2022 02:51:43 +03:00
    Tue Jan 11 2022 03:51:43 +04:00
    Tue Jan 11 2022 04:51:43 +05:00
    Tue Jan 11 2022 05:51:43 +06:00
    Tue Jan 11 2022 06:51:43 +07:00
    Tue Jan 11 2022 07:51:43 +08:00
    Tue Jan 11 2022 08:51:43 +09:00
    Tue Jan 11 2022 09:51:43 +10:00
    Tue Jan 11 2022 10:51:43 +11:00
    Tue Jan 11 2022 11:51:43 +12:00
```
```
curl https://www.icanhaztime.com/all/local
    -Returns:
    Same as previous
```
```
curl https://www.icanhaztime.com/all/New_York
    -Returns:
    Mon Jan 10 2022 11:51:43 -12:00
    Mon Jan 10 2022 12:51:43 -11:00
    Mon Jan 10 2022 13:51:43 -10:00
    Mon Jan 10 2022 14:51:43 -09:00
    Mon Jan 10 2022 15:51:43 -08:00
    Mon Jan 10 2022 16:51:43 -07:00
    Mon Jan 10 2022 17:51:43 -06:00
    Mon Jan 10 2022 18:51:43 -05:00 <--- America/New_York
    Mon Jan 10 2022 19:51:43 -04:00
    Mon Jan 10 2022 20:51:43 -03:00
    Mon Jan 10 2022 21:51:43 -02:00
    Mon Jan 10 2022 22:51:43 -01:00
    Mon Jan 10 2022 23:51:43 +00:00 <--- UTC
    Tue Jan 11 2022 00:51:43 +01:00
    Tue Jan 11 2022 01:51:43 +02:00
    Tue Jan 11 2022 02:51:43 +03:00
    Tue Jan 11 2022 03:51:43 +04:00
    Tue Jan 11 2022 04:51:43 +05:00
    Tue Jan 11 2022 05:51:43 +06:00
    Tue Jan 11 2022 06:51:43 +07:00
    Tue Jan 11 2022 07:51:43 +08:00
    Tue Jan 11 2022 08:51:43 +09:00
    Tue Jan 11 2022 09:51:43 +10:00
    Tue Jan 11 2022 10:51:43 +11:00
    Tue Jan 11 2022 11:51:43 +12:00
```

How to anwser the question, "I have a meeting at 2:00UTC what is this in CST?"
 
```
	https://icahaztime.com/Chicago?setHour=01&setMin=59 <- set a zone's time and print others 
```

Version 2.0 Thoughts:
- Use https://tc39.es/proposal-temporal/docs/  <- Not implemented in Cloudflare workers, throws error 

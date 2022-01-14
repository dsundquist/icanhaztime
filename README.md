
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

Each additional addition to the path prints more output

```
curl https://www.icanhaztime.com/UTC/New_York
    -Returns:
    Mon Jan 10 2022 23:36:22 +00:00 <--- UTC
    Mon Jan 10 2022 18:36:22 -05:00 <--- America/New_York
```

Error if it was unable to locate your zone:  

```
curl https://www.icanhaztime.com/Non-Existent
    -Returns:
Error looking up: Non-Existent
```

You can list all zones, use only the last part if there is a '/', America/Chicago -> Chicago

```
curl https://www.icanhaztime.com/getzones
    Africa/Abidjann
    ...
    Zulu
```

Print all 24 Hours with UTC Centered 

```
curl https://www.icanhaztime.com/all
    -Returns:
    Mon Jan 10 2022 11:51:43 -12:00
    Mon Jan 10 2022 12:51:43 -11:00
    Mon Jan 10 2022 13:51:43 -10:00
    Mon Jan 10 2022 14:51:43 -09:00
    Mon Jan 10 2022 15:51:43 -08:00
    Mon Jan 10 2022 16:51:43 -07:00
    Mon Jan 10 2022 17:51:43 -06:00
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

Set the UTC time to something else, using the format similar to the UNIX date format: %m/%d/%y  %H:%M:%S

```
curl "https://www.icanhaztime.com/set?m=1&d=18&y=1986&H=12&M=30&S=30"
	-Returns: 
	Sat Jan 18 1986 12:30:30 +00:00 <-- SET CMD 
```

Set will apply to subsequent requests 

```
curl "http://www.icanhaztime.com/set?m=1&d=18&y=1986&H=12&M=30&S=30/all"
	-Returns: 
	Sat Jan 18 1986 12:30:30 +00:00 <-- SET CMD
	Sat Jan 18 1986 00:30:30 -12:00
	Sat Jan 18 1986 01:30:30 -11:00
	Sat Jan 18 1986 02:30:30 -10:00
	Sat Jan 18 1986 03:30:30 -09:00
	Sat Jan 18 1986 04:30:30 -08:00
	Sat Jan 18 1986 05:30:30 -07:00
	Sat Jan 18 1986 06:30:30 -06:00
	Sat Jan 18 1986 07:30:30 -05:00
	Sat Jan 18 1986 08:30:30 -04:00
	Sat Jan 18 1986 09:30:30 -03:00
	Sat Jan 18 1986 10:30:30 -02:00
	Sat Jan 18 1986 11:30:30 -01:00
	Sat Jan 18 1986 12:30:30 +00:00 <-- UTC
	Sat Jan 18 1986 13:30:30 +01:00
	Sat Jan 18 1986 14:30:30 +02:00
	Sat Jan 18 1986 15:30:30 +03:00
	Sat Jan 18 1986 16:30:30 +04:00
	Sat Jan 18 1986 17:30:30 +05:00
	Sat Jan 18 1986 18:30:30 +06:00
	Sat Jan 18 1986 19:30:30 +07:00
	Sat Jan 18 1986 20:30:30 +08:00
	Sat Jan 18 1986 21:30:30 +09:00
	Sat Jan 18 1986 22:30:30 +10:00
	Sat Jan 18 1986 23:30:30 +11:00
	Sun Jan 19 1986 00:30:30 +12:00
```

## TODO?: 

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
 
Version 2.0 Thoughts:
- Use https://tc39.es/proposal-temporal/docs/  <- Not implemented in Cloudflare workers, throws error 

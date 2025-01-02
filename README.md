# Air Quality Monitoring
- Monitor CO2 and LPG levels

![image](https://github.com/ramdanirfox/air-quality-monitoring/blob/main/src/public/images/splash.png)

# Building
- Use NodeJS v22.12.0 and `pnpm` package manager (install it by `npm i -g pnpm`)
- `pnpm i`
- `pnpm run prod`

(make sure the path to project is as short as possible, to avoid linking issues in Windows)

# Running
- `pnpm run dev` , open at `http://localhost:3011`

# Credits
- [@rizkialtino](https://github.com/rizkialtino) for UI/UX design
- M. Zaki for BackEnd and Infrastructure setup

# Notes
Search : https://nominatim.openstreetmap.org/search?q=Grand%20Indonesia&format=json

Geocode : https://nominatim.openstreetmap.org/search?q=Grand%20Indonesia&format=json&addressdetails=1

TileLayer : https://mt0.google.com/vt/lyrs=s&hl=id&x=409&y=266&z=9

Weather : http://goweather.herokuapp.com/weather/Jakarta or https://api.open-meteo.com/v1/forecast?latitude=-6.18605745941392&longitude=106.81439570783567&current=temperature_2m,apparent_temperature,soil_temperature_0cm,weather_code

WMO Code : https://gist.github.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c

Timing API : https://www.timeapi.io/api/time/current/zone?timeZone=Asia%2FJakarta
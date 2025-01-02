# Air Quality Monitoring
- Monitor CO2 and LPG levels

![image](https://private-user-images.githubusercontent.com/75406656/398270847-d25cb462-f8f7-4f74-b700-b2b7c19dbde1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQ5OTQ1NTQsIm5iZiI6MTczNDk5NDI1NCwicGF0aCI6Ii83NTQwNjY1Ni8zOTgyNzA4NDctZDI1Y2I0NjItZjhmNy00Zjc0LWI3MDAtYjJiN2MxOWRiZGUxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjIzVDIyNTA1NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdhOGZiYzRjMDMyN2FkZmRhMGJmYmNkYWYzN2QzNTQ0NWZhMmZlM2IyNDlhNDBkODIzOWFlMThjZjQ3YzJmMmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.olovz34SIzqlW9fwIrKqrWe7_Aa-9g-O_QzlUWikCQQ)

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
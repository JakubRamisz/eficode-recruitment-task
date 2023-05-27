const Koa = require('koa',);
const router = require('koa-router',)();
const fetch = require('node-fetch',);
const cors = require('kcors',);

const appId = process.env.APPID || '';
const mapURI = process.env.MAP_ENDPOINT || 'http://api.openweathermap.org/data/2.5';

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors(),);

const fetchWeather = async (lat, lon,) => {
  const endpoint = `${mapURI}/forecast?lat=${lat}&lon=${lon}&appid=${appId}&`;
  const response = await fetch(endpoint,);
  return response ? response.json() : {};
};

router.get('/api/weather', async (ctx,) => {
  // get weather forecast for the next 5 days in 3 hour intervals
  // query params:
  // lat, lon - geographical coordinates (latitude, longitude)

  const weatherData = await fetchWeather(ctx.query.lat, ctx.query.lon,);

  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData;
},);

app.use(router.routes(),);
app.use(router.allowedMethods(),);

app.listen(port,);

console.log(`App listening on port ${port}`,);

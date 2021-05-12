# jscalendar
Javascript Calendar Server

## Requirements
- express
- [dhtmlxscheduler](https://github.com/DHTMLX/scheduler
  )
  
I have copied the `dhtmlxscheduler` src into `public/` folder.

## Local Testing
Start the node.js application,
```bash
cd .  # project root
npm start  # start the app on port 3000
```
and post some dummy timeseries events:
```bash
curl localhost:3000/put  -H "Content-Type: application/json" \
-d '{"text":"Test event 1", "start_date": "2021-05-18 21:06:07.260973", "end_date": "2021-05-19 09:16:02.418641"}'

curl localhost:3000/put  -H "Content-Type: application/json" \
-d '{"text":"Test event 2", "start_date": "2021-05-03 09:06:07.260973", "end_date": "2021-05-19 09:16:02.412131"}'
```
Go to `http://localhost:3000/` or refresh the page to view newly inserted data and when they are available.

## Docker
```bash
docker build -t yeounoh/jscalendar .
docker run --rm -p 3000:3000 yeounoh/jscalendar
```
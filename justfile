seed:
    node seed.js

demo:
    node main.js

db:
    surreal start --log debug --allow-scripting --allow-net --auth --user root --password root --bind 0.0.0.0:8000

sql:
    surreal sql --pretty -u root -p root --ns db --db db --json --hide-welcome -e ws://localhost:8000

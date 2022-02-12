## SpaceFermi

A time paradox occurred ... the app is not ready yet  

## How to run

1. First install the dependencies `npm i`  
2. Then run with `npm run serve`  
3. Open <http://localhost:3000/> or wait for a second
4. All the changes to the main app logic are made through src/index.js file. Feel free to create separate .js files for additional logic and add them to index.js via `import`

---

## Change in importing asserts

 🚫

```javascript
  this.load.image('sky', './assets/sky.png');
```

<br>

 ☑️

```javascript
import sky from './assets/sky.png';

function preload() {
  this.load.image('sky', sky);
}
 ```

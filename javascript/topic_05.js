/**********************************************************
 * This file will pertain to Local Storage using JavaScript
 */

// this section is taken from developer.mozilla to check
//   if we can even use local storage
function storageAvailable(type) {
   var storage;
   try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
   } catch (e) {
      return (
         e instanceof DOMException &&
         // everything except Firefox
         (e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
         // acknowledge QuotaExceededError only if there's something already stored
         (storage && storage.length !== 0)
      );
   }
}

// We will first grab all of the important elements
// input elements
const inputKey = document.getElementById('inputKey');
const inputData = document.getElementById('inputData');
// output elements
const lsOutput = document.getElementById('lsOutput');
const ssOutput = document.getElementById('ssOutput');
// buttons
const btnInsert = document.getElementById('btnInsert');
const btnClearAllData = document.getElementById('btnClearAllData');

/**********************************************************
 * This function will add data to the local storage
 */
function saveToLocalStroage() {
   // check to see if we can use local storage
   if (storageAvailable('localStorage')) {
      // Yippee! We can use localStorage awesomeness
      // TODO: Save to local storage
      const key = inputKey.value;
      const data = inputData.value;

      console.log(key);
      console.log(data);

      if (key && data) {
         localStorage.setItem(key, data);
      }
   } else {
      // Too bad, no localStorage for us
   }
}

/**********************************************************
 * This function will add data to the session storage
 */
function saveToSessionStorage() {
   // check to see if we can use session storage
   if (storageAvailable('sessionStorage')) {
      // Yippee! We can use sessionStorage awesomeness
      // TODO: Save to session storage
      const key = inputKey.value;
      const data = inputData.value;

      console.log(key);
      console.log(data);

      if (key && data) {
         sessionStorage.setItem(key, data);
      }
   } else {
      // Too bad, no sessionStorage for us
   }
}

/**********************************************************
 * This function will clear data from the local storage
 */
function clearLocalStorage() {
   // TODO: clear to local storage
   localStorage.clear();
}

/**********************************************************
 * This function will clear data from the session storage
 */
function clearSessionStorage() {
   // TODO: clear session storage
   sessionStorage.clear();
}

function saveStorage() {
   saveToLocalStroage();
   saveToSessionStorage();
   location.reload();
}

function clearStorage() {
   clearLocalStorage();
   clearSessionStorage();
   location.reload();
}

window.onload = function() {
   for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const data = localStorage.getItem(key);

      lsOutput.innerHTML += `${key}: ${data}<br />`;
   }

   for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      const data = sessionStorage.getItem(key);

      ssOutput.innerHTML += `${key}: ${data}<br />`;
   }
};

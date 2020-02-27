// Main.js is responsible for the logic the splash can renders

import initializeDialogDetailButtonEvents from './dialog.js';
import initializeTipDetailButtonEvents from './tip.js';
import { useFish } from './FishDataProvider.js'




const arrayOfAllTheFishObjects = useFish()

for (const currentFishObj of arrayOfAllTheFishObjects) {
    console.log(currentFishObj)
}













useFish();
initializeDialogDetailButtonEvents();
initializeTipDetailButtonEvents();
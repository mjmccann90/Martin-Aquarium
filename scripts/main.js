// Main.js is responsible for the logic the splash can renders

import initializeDialogDetailButtonEvents from './dialog.js';
import initializeTipDetailButtonEvents from './tip.js';
import { useFish } from './FishDataProvider.js'
import FishList from './FishList.js';




const arrayOfAllTheFishObjects = useFish()

FishList()

for (const currentFishObj of arrayOfAllTheFishObjects) {
}













useFish();
initializeDialogDetailButtonEvents();
initializeTipDetailButtonEvents();
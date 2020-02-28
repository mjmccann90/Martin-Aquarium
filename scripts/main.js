import initializeDialogDetailButtonEvents from './fish/dialog.js';
import initializeTipDetailButtonEvents from './tips/tipDialog.js';
import { useFish } from './fish/FishDataProvider.js'
import FishList from './fish/FishList.js';

import { useTip } from './tips/TipDataProvider.js'
import TipList from './tips/TipList.js';




const arrayOfAllTheFishObjects = useFish()

FishList()

for (const currentFishObj of arrayOfAllTheFishObjects) {
}


const arrayOfAllTheTipObjects = useTip()

TipList()

for (const currentTipObj of arrayOfAllTheTipObjects) {
}










useFish();
useTip();
initializeDialogDetailButtonEvents();
initializeTipDetailButtonEvents();
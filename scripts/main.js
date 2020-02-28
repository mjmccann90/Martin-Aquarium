import initializeDialogDetailButtonEvents from './dialog.js';
import initializeTipDetailButtonEvents from './tipDialog.js';
import { useFish } from './FishDataProvider.js'
import FishList from './FishList.js';

import { useTip } from './TipDataProvider.js'
import TipList from './TipList.js';




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
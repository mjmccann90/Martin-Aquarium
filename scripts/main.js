import initializeDialogDetailButtonEvents from './fish/dialog.js';
import initializeTipDetailButtonEvents from './tips/tipDialog.js';
import initializeLocationDetailButtonEvents from './locations/LocationDialog.js';

import { useFish } from './fish/FishDataProvider.js'
import FishList from './fish/FishList.js';

import { useTip } from './tips/TipDataProvider.js'
import TipList from './tips/TipList.js';

import { useLocation } from './locations/LocationDataProvider.js'
import LocationList from './locations/LocationList.js';





const arrayOfAllTheFishObjects = useFish()

FishList()

for (const currentFishObj of arrayOfAllTheFishObjects) {
}


const arrayOfAllTheTipObjects = useTip()

TipList()

for (const currentTipObj of arrayOfAllTheTipObjects) {
}


const arrayOfAllTheLocationObjects = useLocation()

LocationList()

for (const currentLocationObj of arrayOfAllTheLocationObjects) {
}









useFish();
useTip();
useLocation();
initializeDialogDetailButtonEvents();
initializeTipDetailButtonEvents();
initializeLocationDetailButtonEvents();
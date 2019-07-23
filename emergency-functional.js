// fills the beds one at a time until all beds are full, logging bed status each time
const populateBeds = (traumaBeds, heartAttackBeds) => {

    // logs current number of trauma beds and heart attack beds available
    const bedStatus = () => {
        console.log(`There are ${traumaBeds} empty trauma beds and ${heartAttackBeds} empty heart attack beds available.`)
    }
    // logs a message that the emergency room is full when no beds are available
    const logNoBeds = () => {
        bedStatus()
        console.log("The emergency room is currently full.")
    }

    // while the emergency room has availability, accept a patient into a bed and log the bed status
    while(traumaBeds > 0){
        bedStatus()
        traumaBeds--
    }
    while(heartAttackBeds > 0){
        bedStatus()
        heartAttackBeds--
    }
    logNoBeds()
}

// When invoked without args, this function populates the patient beds until all 100 are occupied
const emergencyRoom100Beds = (traumaBeds = 50, heartAttackBeds = 50) => {
    populateBeds(traumaBeds, heartAttackBeds)
}

emergencyRoom100Beds()
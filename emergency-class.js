// EmergencyRoom class with default arguments of (50, 50)
class EmergencyRoom {
    constructor (traumaBeds = 50, heartAttackBeds = 50) {
        this.traumaBeds = traumaBeds
        this.heartAttackBeds = heartAttackBeds
    }

    // logs current number of trauma beds and heart attack beds available
    bedStatus () {
        console.log(`There are ${this.traumaBeds} empty trauma beds and ${this.heartAttackBeds} empty heart attack beds available.`)
    }

    // reduces number of currently available trauma beds by 1
    decrementTraumaBeds () {
        this.traumaBeds--
    }

    // reduces number of currently available heart attack beds by 1
    decrementHeartAttackBeds () {
        this.heartAttackBeds--
    }

    // fills the beds one at a time until all beds are full, logging bed status each time
    populateBeds () {
        while(this.traumaBeds > 0){
            this.bedStatus()
            this.decrementTraumaBeds()
        }
        while(this.heartAttackBeds > 0){
            this.bedStatus()
            this.decrementHeartAttackBeds()
        }
        this.bedStatus()
        console.log("The emergency room is currently full.")
    }
}

// When invoked, this function creates a new EmergencyRoom object
// with 50 trauma beds and 50 heart attack beds and calls populateBeds() on it.
const emergencyRoom100Beds = () => {
    let emergencyRoom = new EmergencyRoom
    emergencyRoom.populateBeds()
}

emergencyRoom100Beds()
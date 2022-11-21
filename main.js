const createChassis = () => {
	const newChassisObject = {	}

	return newChassisObject
}

const addWheels = (chassisObject) => {
	chassisObject.wheels = 4

	return chassisObject
}

const addEngine = (chassisObject) => {
	chassisObject.engine = "4.8L"

	return chassisObject
}

const addSteeringWheel = (chassisObject) => {
	chassisObject.steeringWheel = "Tilting"

	return chassisObject
}

const addDriveTrain = (chassisObject) => {
	chassisObject.driveTrain = "Two wheel drive"

	return chassisObject
}


let chassis = createChassis()

let chassisWheels = addWheels(chassis)
// console.log(chassisWheels)

let chassisEngine = addEngine(chassis)
// console.log(chassisEngine)

let chassisSteer = addSteeringWheel(chassis)
// console.log(chassisSteer)

let chassisTrain = addDriveTrain(chassis)
// console.log(chassisTrain)

console.log(chassis)
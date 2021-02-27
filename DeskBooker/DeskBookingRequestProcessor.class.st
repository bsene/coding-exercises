Class {
	#name : #DeskBookingRequestProcessor,
	#superclass : #Object,
	#category : #DeskBooker
}

{ #category : #processing }
DeskBookingRequestProcessor >> bookDesk: aDeskBookingRequest [
	^ DeskBookingResult new
		firstname: aDeskBookingRequest firstName;
		lastname: aDeskBookingRequest lastName;
		email: aDeskBookingRequest email;
		date: aDeskBookingRequest date
]

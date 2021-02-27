Class {
	#name : #DeskBookingRequest,
	#superclass : #Object,
	#instVars : [
		'firstName',
		'lastName',
		'email',
		'date'
	],
	#category : #DeskBooker
}

{ #category : #accessing }
DeskBookingRequest >> date [
	^ date
]

{ #category : #accessing }
DeskBookingRequest >> date: aDate [
	date := aDate 
]

{ #category : #accessing }
DeskBookingRequest >> email [ 
	^ email
]

{ #category : #accessing }
DeskBookingRequest >> email: aString [
	email := aString 
]

{ #category : #accessing }
DeskBookingRequest >> firstName [
	^ firstName
]

{ #category : #setting }
DeskBookingRequest >> firstname: aString [ 
	firstName := aString 
]

{ #category : #accessing }
DeskBookingRequest >> lastName [
	^ lastName
]

{ #category : #setting }
DeskBookingRequest >> lastname: aString [ 
	lastName := aString 
]

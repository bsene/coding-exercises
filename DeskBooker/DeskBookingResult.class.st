Class {
	#name : #DeskBookingResult,
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
DeskBookingResult >> date [
	^ date
]

{ #category : #accessing }
DeskBookingResult >> date: aDate [ 
	date := aDate 
]

{ #category : #accessing }
DeskBookingResult >> email [
	^ email
]

{ #category : #setting }
DeskBookingResult >> email: aString [ 
	email := aString 
]

{ #category : #setting }
DeskBookingResult >> firstName [
	^ firstName
]

{ #category : #setting }
DeskBookingResult >> firstname: aString [ 
	firstName := aString 
]

{ #category : #accessing }
DeskBookingResult >> lastName [
	^ lastName
]

{ #category : #setting }
DeskBookingResult >> lastname: aString [
	lastName := aString 
]

Class {
	#name : #DeskBookingProcessorTest,
	#superclass : #TestCase,
	#category : #'DeskBooker-Tests'
}

{ #category : #tests }
DeskBookingProcessorTest >> testShouldReturnDeskBookingResultWhenProcessing [

	|processor request|
	request := DeskBookingRequest new.
	processor  := DeskBookingRequestProcessor new.
	
	self assert: (processor bookDesk: request) class equals: (DeskBookingResult new) class
]

{ #category : #tests }
DeskBookingProcessorTest >> testShouldReturnDeskBookingResultWithTheSameRequestDate [

	|processor request expected|
	expected := Date year: 2020 month: 2  day: 12.
	request := DeskBookingRequest new date: expected.
	processor  := DeskBookingRequestProcessor new.
	
	self assert: (processor bookDesk: request) date equals: expected
]

{ #category : #tests }
DeskBookingProcessorTest >> testShouldReturnDeskBookingResultWithTheSameRequestEmail [

	|processor request|
	request := DeskBookingRequest new email: 'bsene@pm.me'.
	processor  := DeskBookingRequestProcessor new.
	
	self assert: (processor bookDesk: request) email equals: 'bsene@pm.me'
]

{ #category : #tests }
DeskBookingProcessorTest >> testShouldReturnDeskBookingResultWithTheSameRequestEmailWitchIsjohnDoeAtinternetDotMe [

	|processor request|
	request := DeskBookingRequest new email: 'john.doe@internet.me'.
	processor  := DeskBookingRequestProcessor new.
	
	self assert: (processor bookDesk: request) email equals: 'john.doe@internet.me'.
	
]

{ #category : #tests }
DeskBookingProcessorTest >> testShouldReturnDeskBookingResultWithTheSameRequestFirstName [

	|processor request|
	request := DeskBookingRequest new firstname: 'birame'.
	processor  := DeskBookingRequestProcessor new.
	
	self assert: (processor bookDesk: request) firstName equals: 'birame'
]

{ #category : #tests }
DeskBookingProcessorTest >> testShouldReturnDeskBookingResultWithTheSameRequestFirstNameWitchIsJohn [

	|processor request|
	request := DeskBookingRequest new firstname: 'john'.
	processor  := DeskBookingRequestProcessor new.
	
	self assert: (processor bookDesk: request) firstName equals: 'john'
]

{ #category : #tests }
DeskBookingProcessorTest >> testShouldReturnDeskBookingResultWithTheSameRequestLastName [

	|processor request|
	request := DeskBookingRequest new lastname: 'sene'.
	processor  := DeskBookingRequestProcessor new.
	
	self assert: (processor bookDesk: request) lastName equals: 'sene'
]

{ #category : #tests }
DeskBookingProcessorTest >> testShouldReturnDeskBookingResultWithTheSameRequestLastNameWitchIsDoe [

	|processor request|
	request := DeskBookingRequest new lastname: 'doe'.
	processor  := DeskBookingRequestProcessor new.
	
	self assert: (processor bookDesk: request) lastName equals: 'doe'
]

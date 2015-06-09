function Hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function(){
		return this.rooms - this.booked;
	};
};

var quayHotel = new Hotel('Dupa', 10, 5);

var details1 = quayHotel.name;
var elHotel1 = document.getElementById('hotelll');
elHotel1.textContent = details1;

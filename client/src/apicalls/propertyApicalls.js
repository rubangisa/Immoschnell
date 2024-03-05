import axios from "axios";

let propertyData = {
  name: "Cozy Apartment in the Heart of Downtown",
  streetName: "123 Main Street",
  apartmentNumber: "Apt 202",
  postalCode: "12345",
  state: "California",
  city: "Los Angeles",
  country: "United States",
  roomType: "Apartment",
  numberOfBedrooms: 2,
  numberOfBeds: 3,
  numberOfBathrooms: 2,
  pricePerNight: 150.9                                                     ,
  selfCheckIn: true,
  allowPets: false,
  accessibilityFeatures: true,
  smokingAllowed: false,
  childrenAllowed: true,
  description:
    "This cozy apartment is located in the heart of downtown Los Angeles. It features two bedrooms, two bathrooms, and a spacious living area. Enjoy the convenience of self-check-in and the accessibility features for a comfortable stay.",
  rating: 4.5,
  images: [
    {
      name: "Living Room",
      url: "https://example.com/images/living_room.jpg",
    },
    {
      name: "Bedroom",
      url: "https://example.com/images/bedroom.jpg",
    },
    {
      name: "Bathroom",
      url: "https://example.com/images/bathroom.jpg",
    },
    {
      name: "Dining Room",
      url: "https://example.com/images/dining_room.jpg",
    },
    {
      name: "Kitchen",
      url: "https://example.com/images/kitchen.jpg",
    },
  ],
  attributes: [
    {
      name: "WiFi",
      value: true,
    },
    {
      name: "Air Conditioning",
      value: true,
    },
    {
      name: "TV",
      value: true,
    },
    {
      name: "Kitchen",
      value: true,
    },
    {
      name: "Free Parking",
      value: false,
    },
  ],
  owner: "John Doe",
};

const getPropertyDetails = async (dispatchProperty) => {
  try {
    const response = await axios.get("http://localhost:8000/listings");

    dispatchProperty({
      type: "FETCH_PROPERTIES_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error fetching properties:", error);
    // If there's an error, use the propertyData as a fallback
    dispatchProperty({
      type: "FETCH_PROPERTIES_SUCCESS",
      payload: propertyData,
    });
  }
};

const getLocationName = async (dispatchProperty) => {
  try {
    const response = await axios.get("http://localhost:8000/listings");

    dispatchLocation({
      type: "FETCH_LOCATION_SUCCESS",
      payload: {
        city: response.data.city,
        state: response.data.state,
        country: response.data.country,
      },
    });
  } catch (error) {
    console.log("Error fetching properties:", error);
    dispatchProperty({
      type: "FETCH_LOCATION_SUCCESS",
      payload: {
        city: response.data.city,
        state: response.data.state,
        country: response.data.country,
      },
    });
  }
};

export { getPropertyDetails, getLocationName };

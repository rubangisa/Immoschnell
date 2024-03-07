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
  pricePerNight: 150.9,
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
      url: "https://www.neubaukompass.com/bilder/objekt/24162/10036764-gross.jpg",
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

const propertyList = [
  {
    name: "Charming Cottage",
    streetName: "789 Serene Street",
    apartmentNumber: "Cottage 103",
    postalCode: "98765",
    state: "California",
    city: "Santa Monica",
    country: "United States",
    roomType: "Cottage",
    numberOfBedrooms: 2,
    numberOfBeds: 4,
    numberOfBathrooms: 1.5,
    pricePerNight: 120.0,
    selfCheckIn: true,
    allowPets: true,
    accessibilityFeatures: false,
    smokingAllowed: false,
    childrenAllowed: true,
    description:
      "Escape to a charming cottage surrounded by nature. This retreat offers two cozy bedrooms, a beautiful garden, and a peaceful atmosphere for a relaxing stay.",
    rating: 4.7,
    images: [
      {
        name: "Exterior",
        url: "https://www.homelane.com/blog/wp-content/uploads/2022/11/box-house-design.jpg",
      },
      {
        name: "Living Room",
        url: "https://example.com/images/cottage_living_room.jpg",
      },
      {
        name: "Bedroom 1",
        url: "https://example.com/images/cottage_bedroom1.jpg",
      },
      {
        name: "Kitchen",
        url: "https://example.com/images/cottage_kitchen.jpg",
      },
      {
        name: "Garden View",
        url: "https://example.com/images/cottage_garden.jpg",
      },
    ],
    attributes: [
      {
        name: "WiFi",
        value: true,
      },
      {
        name: "Air Conditioning",
        value: false,
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
        value: true,
      },
    ],
    owner: "Alice Johnson",
  },
  {
    name: "Cozy Apartment ",
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
    pricePerNight: 150.9,
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
        url: "https://www.neubaukompass.com/bilder/objekt/24162/10036764-gross.jpg",
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
  },
  {
    name: "Luxurious Penthouse",
    streetName: "567 Skyline Drive",
    apartmentNumber: "Penthouse 2201",
    postalCode: "87654",
    state: "California",
    city: "San Francisco",
    country: "United States",
    roomType: "Penthouse",
    numberOfBedrooms: 3,
    numberOfBeds: 5,
    numberOfBathrooms: 3.5,
    pricePerNight: 350.0,
    selfCheckIn: true,
    allowPets: false,
    accessibilityFeatures: true,
    smokingAllowed: false,
    childrenAllowed: false,
    description:
      "Indulge in luxury with this breathtaking penthouse featuring three bedrooms, a private terrace, and floor-to-ceiling windows offering panoramic views of the city skyline.",
    rating: 4.9,
    images: [
      {
        name: "Living Area",
        url: "https://www.homelane.com/blog/wp-content/uploads/2022/11/box-house-design.jpg",
      },
      {
        name: "Master Bedroom",
        url: "https://example.com/images/penthouse_master_bedroom.jpg",
      },
      {
        name: "Bathroom",
        url: "https://example.com/images/penthouse_bathroom.jpg",
      },
      {
        name: "Terrace",
        url: "https://example.com/images/penthouse_terrace.jpg",
      },
      {
        name: "City View",
        url: "https://example.com/images/penthouse_city_view.jpg",
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
    owner: "Robert Anderson",
  },
  {
    name: "Cozy Apartment ",
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
    pricePerNight: 150.9,
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
        url: "https://www.neubaukompass.com/bilder/objekt/24162/10036764-gross.jpg",
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
  },
  {
    name: "Charming Cottage",
    streetName: "789 Serene Street",
    apartmentNumber: "Cottage 103",
    postalCode: "98765",
    state: "California",
    city: "Santa Monica",
    country: "United States",
    roomType: "Cottage",
    numberOfBedrooms: 2,
    numberOfBeds: 4,
    numberOfBathrooms: 1.5,
    pricePerNight: 120.0,
    selfCheckIn: true,
    allowPets: true,
    accessibilityFeatures: false,
    smokingAllowed: false,
    childrenAllowed: true,
    description:
      "Escape to a charming cottage surrounded by nature. This retreat offers two cozy bedrooms, a beautiful garden, and a peaceful atmosphere for a relaxing stay.",
    rating: 4.7,
    images: [
      {
        name: "Exterior",
        url: "https://www.homelane.com/blog/wp-content/uploads/2022/11/box-house-design.jpg",
      },
      {
        name: "Living Room",
        url: "https://example.com/images/cottage_living_room.jpg",
      },
      {
        name: "Bedroom 1",
        url: "https://example.com/images/cottage_bedroom1.jpg",
      },
      {
        name: "Kitchen",
        url: "https://example.com/images/cottage_kitchen.jpg",
      },
      {
        name: "Garden View",
        url: "https://example.com/images/cottage_garden.jpg",
      },
    ],
    attributes: [
      {
        name: "WiFi",
        value: true,
      },
      {
        name: "Air Conditioning",
        value: false,
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
        value: true,
      },
    ],
    owner: "Alice Johnson",
  },
  {
    name: "Cozy Apartment ",
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
    pricePerNight: 150.9,
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
        url: "https://www.neubaukompass.com/bilder/objekt/24162/10036764-gross.jpg",
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
  },
  {
    name: "Luxurious Penthouse",
    streetName: "567 Skyline Drive",
    apartmentNumber: "Penthouse 2201",
    postalCode: "87654",
    state: "California",
    city: "San Francisco",
    country: "United States",
    roomType: "Penthouse",
    numberOfBedrooms: 3,
    numberOfBeds: 5,
    numberOfBathrooms: 3.5,
    pricePerNight: 350.0,
    selfCheckIn: true,
    allowPets: false,
    accessibilityFeatures: true,
    smokingAllowed: false,
    childrenAllowed: false,
    description:
      "Indulge in luxury with this breathtaking penthouse featuring three bedrooms, a private terrace, and floor-to-ceiling windows offering panoramic views of the city skyline.",
    rating: 4.9,
    images: [
      {
        name: "Living Area",
        url: "https://www.homelane.com/blog/wp-content/uploads/2022/11/box-house-design.jpg",
      },
      {
        name: "Master Bedroom",
        url: "https://example.com/images/penthouse_master_bedroom.jpg",
      },
      {
        name: "Bathroom",
        url: "https://example.com/images/penthouse_bathroom.jpg",
      },
      {
        name: "Terrace",
        url: "https://example.com/images/penthouse_terrace.jpg",
      },
      {
        name: "City View",
        url: "https://example.com/images/penthouse_city_view.jpg",
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
    owner: "Robert Anderson",
  },
];
const getPropertyDetails = async (dispatchProperty) => {
  try {
    const response = await axios.get("http://localhost:8000/listings/:id");

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

const getAllPropertyList = async (dispatchProperty) => {
  try {
    const response = await axios.get("http://localhost:8000/listings");

    dispatchProperty({
      type: "FETCH_ALL_PROPERTIES_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error fetching properties:", error);
    // If there's an error, use the propertyData as a fallback
    dispatchProperty({
      type: "FETCH_ALL_PROPERTIES_SUCCESS",
      payload: propertyList,
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

export { getPropertyDetails, getLocationName, getAllPropertyList };

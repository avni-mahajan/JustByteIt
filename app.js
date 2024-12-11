import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
    return(
    <div className = "header">
        <div className = "logo-container">
            <img className = "logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTo7Sb8iYLjFeTf-I8Rnz7qnVpPzr6EvSUQ&s"/>
        </div>
        <div className="nav-bar">
            <ul>
                <li id="home">Home</li>
                <li id="about">About Us</li>
                <li id="contact">Contact Us</li>
                <li id="cart">Cart</li>
            </ul>
        </div>
    </div>
)}

const resList = [
    {
      "info": {
        "id": "786153",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/a2d94cd9-ac91-40de-b003-0a88f76c7f00_786153.jpg",
        "locality": "SCO459-460",
        "areaName": "Sector 35",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.1,
        "parentId": "721",
        "avgRatingString": "4.1",
        "totalRatingsString": "435",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-12 01:00:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-850fc2de-e7c4-4bc6-b47c-da344a7b7d90"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chandigarh/pizza-hut-sco459-460-sector-35-rest786153",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "264693",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/f212957d-15f8-4c69-8a22-b57d69f411dc_264693.jpg",
        "locality": "Himalaya Marg",
        "areaName": "Sector 22",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "2456",
        "avgRatingString": "4.5",
        "totalRatingsString": "4.2K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-12 01:55:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹1199",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-850fc2de-e7c4-4bc6-b47c-da344a7b7d90"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chandigarh/dominos-pizza-himalaya-marg-sector-22-rest264693",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "41298",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/0952e937-f7ad-4d0f-a369-168bfb3991d6_41298.JPG",
        "locality": "Sector 34",
        "areaName": "Sector 34",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.4,
        "parentId": "547",
        "avgRatingString": "4.4",
        "totalRatingsString": "5.1K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-12 01:00:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "1.9K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-850fc2de-e7c4-4bc6-b47c-da344a7b7d90"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chandigarh/kfc-sector-34-rest41298",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "41350",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_41350.JPG",
        "locality": "Sector 35",
        "areaName": "Sector 35",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.4,
        "parentId": "166",
        "avgRatingString": "4.4",
        "totalRatingsString": "55K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-12 05:29:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "4.4K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-850fc2de-e7c4-4bc6-b47c-da344a7b7d90"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chandigarh/burger-king-sector-35-rest41350",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "254108",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/d881ae84-527b-4d39-a3d0-fb0496b82b6f_254108.JPG",
        "locality": "Sector 22",
        "areaName": "Sector 22",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American",
          "Fast Food"
        ],
        "avgRating": 4.3,
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "13K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-12 01:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            },
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                },
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "5.5K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-850fc2de-e7c4-4bc6-b47c-da344a7b7d90"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chandigarh/mcdonalds-sector-22-rest254108",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "42803",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/2f6a94e6-d12d-497d-8066-f3234d2d172f_42803.JPG",
        "locality": "Sector 22",
        "areaName": "Sector 22",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
        ],
        "avgRating": 4.3,
        "parentId": "2",
        "avgRatingString": "4.3",
        "totalRatingsString": "8.0K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-11 23:58:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "810"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-850fc2de-e7c4-4bc6-b47c-da344a7b7d90"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chandigarh/subway-sector-22-rest42803",
        "type": "WEBLINK"
      }
    },
    {
        "info": {
          "id": "164613",
          "name": "El Mexicano",
          "cloudinaryImageId": "yc37c1fbmghsz2u9wzmt",
          "areaName": "Sector 8",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Mexican",
            "Tex-Mex",
            "Beverages",
            "Desserts",
            "Pizzas",
            "Fast Food"
          ],
          "avgRating": 4.6,
          "parentId": "11445",
          "avgRatingString": "4.6",
          "totalRatingsString": "2.7K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-11 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-7e6ff094-3ca6-4aec-8cc4-d10a1b082dca"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chandigarh/el-mexicano-sector-8-rest164613",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "47840",
          "name": "Burgrill - The Win Win Burger",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/19/3b057ea1-f0c1-46b8-81fb-773dd65d1fb3_47840.jpg",
          "locality": "Sector 8",
          "areaName": "Sector 8",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Burgers",
            "Healthy Food",
            "American",
            "Salads",
            "Beverages",
            "Desserts",
            "Snacks"
          ],
          "avgRating": 4.6,
          "parentId": "302366",
          "avgRatingString": "4.6",
          "totalRatingsString": "7.1K+",
          "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-11 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.4",
              "ratingCount": "684"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-7e6ff094-3ca6-4aec-8cc4-d10a1b082dca"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chandigarh/burgrill-the-win-win-burger-sector-8-rest47840",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "359797",
          "name": "Grameen Kulfi",
          "cloudinaryImageId": "c75iuwgwkmsiqrnw9l6d",
          "locality": "Sector 35C",
          "areaName": "Hotel Himani",
          "costForTwo": "₹120 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "12175",
          "avgRatingString": "4.7",
          "totalRatingsString": "461",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-11 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-7e6ff094-3ca6-4aec-8cc4-d10a1b082dca"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chandigarh/grameen-kulfi-sector-35c-hotel-himani-rest359797",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "41062",
          "name": "Garam Dharam",
          "cloudinaryImageId": "fulhnkw7ipmnwvqpolsa",
          "locality": "Madhya Marg",
          "areaName": "Sector 26",
          "costForTwo": "₹600 for two",
          "cuisines": [
            "Indian",
            "North Indian",
            "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "3384",
          "avgRatingString": "4.3",
          "totalRatingsString": "943",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-11 23:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.0",
              "ratingCount": "3.3K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-7e6ff094-3ca6-4aec-8cc4-d10a1b082dca"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chandigarh/garam-dharam-madhya-marg-sector-26-rest41062",
          "type": "WEBLINK"
        }
      }
]

const ResCard = (props) =>{
    const {resData} = props;
    const {name , cuisines , deliveryTime , avgRating , cloudinaryImageId , costForTwo } = resData?.info;
    return (
        <div className="res-card">
            <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating + " " + "stars"}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search"> 
                 <input type="text" placeholder="search here..." />
            </div>
            <div className = "res-container">
                {
                    resList.map(
                        (restaurant) => (<ResCard key = {restaurant?.info?.id} resData={restaurant}/>)
                    )
                }
            </div>
        </div>
    )
}

const FooterComponent = () => {

}

const AppLayout = () => {
    return (
        <div className = "app">
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    )
}

root.render(<AppLayout/>);



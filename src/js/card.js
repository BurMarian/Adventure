const cards = document.querySelectorAll(".packages--content .cards > div > div");

// tours
const saharaDesert = "SaharaDesert";
const safari = "Safari";
const pyramid = "Pyramid";
const flying = "Flying";
const volcano = "Volcano";
const hiking = "Hiking";
const amazon = "Amazon";
const cruise = "Cruise";
const iceCave = "IceCave";
const waterfall = "Waterfall";
const diving = "Diving";

// items of list
// basic card
const priceBasic = document.querySelector(".basic-card--header__price");
const firstBasicCard = document.querySelector(".basic-card--body__list_1");
const secondBasicCard = document.querySelector(".basic-card--body__list_2");
const thirdBasicCard = document.querySelector(".basic-card--body__list_3");
const fourthBasicCard = document.querySelector(".basic-card--body__list_4");
const fivethBasicCard = document.querySelector(".basic-card--body__list_5");

// standart card
const priceStandart = document.querySelector(".standart-card--header__price");
const firstStandartCard = document.querySelector(".standart-card--body__list_1");
const secondStandartCard = document.querySelector(".standart-card--body__list_2");
const thirdStandartCard = document.querySelector(".standart-card--body__list_3");
const fourthStandartCard = document.querySelector(".standart-card--body__list_4");
const fivethStandartCard = document.querySelector(".standart-card--body__list_5");

// premium card
const pricePremium = document.querySelector(".premium-card--header__price");
const firstPremiumCard = document.querySelector(".premium-card--body__list_1");
const secondPremiumCard = document.querySelector(".premium-card--body__list_2");
const thirdPremiumCard = document.querySelector(".premium-card--body__list_3");
const fourthPremiumCard = document.querySelector(".premium-card--body__list_4");
const fivethPremiumCard = document.querySelector(".premium-card--body__list_5");

for (let i of cards) {
  i.addEventListener("click", (e) => {
    // get name of tour after that writing some info in item
    let getNameOfTour = i.getAttribute("id");

    switch (getNameOfTour) {
      case saharaDesert: {
        // basic
        priceBasic.textContent = "$600";
        firstBasicCard.textContent = "7 days, 6 nights / for 1 / 5 people";
        secondBasicCard.textContent = "Breakfast daily";
        thirdBasicCard.textContent = "Kids stay free";
        fourthBasicCard.textContent = "Camel riding 1 free";
        fivethBasicCard.textContent = "Hotel with 3 stars";

        // standart
        priceStandart.textContent = "$1000";
        firstStandartCard.textContent = "10 days, 9 nights / for 1 / 5 people";
        secondStandartCard.textContent = "Breakfast, lunch daily";
        thirdStandartCard.textContent = "Walking tours";
        fourthStandartCard.textContent = "Camel riding 3 free";
        fivethStandartCard.textContent = "Hotel with 4 stars";

        // premium
        pricePremium.textContent = "$1600";
        firstPremiumCard.textContent = "14 days, 13 nights / for 1 / 5 people";
        secondPremiumCard.textContent = "Breakfast, lunch, dinner daily in the best restaurant";
        thirdPremiumCard.textContent = "Transportation and transfers in private 4x4 or mini van/touring vehicle";
        fourthPremiumCard.textContent = "Sightseeing and camel riding free";
        fivethPremiumCard.textContent = "Hotel with 5 stars";

        break;
      }
      case safari: {
        // basic
        priceBasic.textContent = "$950";
        firstBasicCard.textContent = "3 days, 2 nights / for 1 / 3 people";
        secondBasicCard.textContent = "This mid-range tour uses lodges.";
        thirdBasicCard.textContent = "Breakfast & Lunch included";
        fourthBasicCard.textContent = "Activities: Game drives.";
        fivethBasicCard.textContent = "A transfer from and back to the airport can be arranged for an extra cost";

        // standart
        priceStandart.textContent = "$1920";
        firstStandartCard.textContent = "7 days, 6 nights / for 1 / 3 people";
        secondStandartCard.textContent = "This mid-range tour uses lodges and guest houses.";
        thirdStandartCard.textContent = "This tour will be organized exclusively for you and won't be shared with others.";
        fourthStandartCard.textContent = "Game drives, gorilla trekking, chimpanzee trekking.";
        fivethStandartCard.textContent = "A transfer from and back to the airport is included.";

        // premium
        pricePremium.textContent = "$2999";
        firstPremiumCard.textContent = "10 days, 9 nights / for 2 / 5 people";
        secondPremiumCard.textContent = "This luxury tour uses lodges and tented camps.";
        thirdPremiumCard.textContent = "Getting around: pop-up roof 4x4 vehicle.";
        fourthPremiumCard.textContent = "Game drives, walking safaris with guide.";
        fivethPremiumCard.textContent = "If availability permits, this tour can start on any day.";

        break;
      }
      case pyramid: {
        // basic
        priceBasic.textContent = "$410";
        firstBasicCard.textContent = "3 days, 2 nights / for 1 / 10 people";
        secondBasicCard.textContent = "The Great Pyramids, Sphinx & Camel ride ";
        thirdBasicCard.textContent = "Sound & Light show & Dinner Nile Cruise";
        fourthBasicCard.textContent = "The Egyptian Museum & Castle ";
        fivethBasicCard.textContent = "Alexandria Day Trip";

        // standart
        priceStandart.textContent = "$1560";
        firstStandartCard.textContent = "6 days, 5 nights / for 1 / 3 people";
        secondStandartCard.textContent = "1 day tour in Cairo visiting Egyptian Museum, Pyramids";
        thirdStandartCard.textContent = "All your tours and excursions are with A/C bus";
        fourthStandartCard.textContent = "Night hotel accommodation in Cairo on bed and breakfast basis.";
        fivethStandartCard.textContent = "2 Nights Sleeper train on half board basis.";

        // premium
        pricePremium.textContent = "$3500";
        firstPremiumCard.textContent = "9 days, 8 nights / for 1 / 7 people";
        secondPremiumCard.textContent = "Full Breakfast Daily";
        thirdPremiumCard.textContent = "Cruising the Nile | Karnak & the Valley of the kings";
        fourthPremiumCard.textContent = "Luxury hotel accommodations as mentioned in our itinerary.";
        fivethPremiumCard.textContent = "Private Itinerary Designed for You.";

        break;
      }
      case flying: {
        // basic
        priceBasic.textContent = "$75";
        firstBasicCard.textContent = "3 hours / for 1 person";
        secondBasicCard.textContent = "Shared one-hour balloon flight";
        thirdBasicCard.textContent = "Expert captain and crew";
        fourthBasicCard.textContent = "Transfer from landing site back to launch spot";
        fivethBasicCard.textContent = "small breakfast with local products, picnic style";

        // standart
        priceStandart.textContent = "$110";
        firstStandartCard.textContent = "4 hours / for 1 person";
        secondStandartCard.textContent = "Pick-up and drop-off service.";
        thirdStandartCard.textContent = "Flying Standart";
        fourthStandartCard.textContent = "Coffee/tea, snacks and non-alcoholic champagne.";
        fivethStandartCard.textContent = "Tracking car";

        // premium
        pricePremium.textContent = "$193";
        firstPremiumCard.textContent = "1 day / for 1 person";
        secondPremiumCard.textContent = "4x4 transfer within the activity";
        thirdPremiumCard.textContent = "Certificate of flight";
        fourthPremiumCard.textContent = "All the necessary equipment";
        fivethPremiumCard.textContent = "Insurance.";

        break;
      }
      case volcano: {
        // basic
        priceBasic.textContent = "$2309";
        firstBasicCard.textContent = "8 hours / for 1 / 3 people";
        secondBasicCard.textContent = "Hotel pickup and drop-off";
        thirdBasicCard.textContent = "Transportation by VW classic convertible jeep";
        fourthBasicCard.textContent = "Entrance tickets";
        fivethBasicCard.textContent = "Natural hot springs visit";

        // standart
        priceStandart.textContent = "$3647";
        firstStandartCard.textContent = "8 hours / for 1 / 3 people";
        secondStandartCard.textContent = "Transport by van & Pickup & drop-off by van";
        thirdStandartCard.textContent = "Private driver";
        fourthStandartCard.textContent = "Raft";
        fivethStandartCard.textContent = "Transportation in an air-conditioned van";

        // premium
        pricePremium.textContent = "$5394";
        firstPremiumCard.textContent = "6 hours / for 1 / 5 people";
        secondPremiumCard.textContent = "Fagradalsfjall Volcano visit";
        thirdPremiumCard.textContent = "Transport by jeep / suv";
        fourthPremiumCard.textContent = " Entry to Arenal Volcano National Park";
        fivethPremiumCard.textContent = "Live tour guide";

        break;
      }
      case hiking: {
        // basic
        priceBasic.textContent = "$2120";
        firstBasicCard.textContent = "6 hours / for 1 / 10 people";
        secondBasicCard.textContent = "Transportation";
        thirdBasicCard.textContent = "Services of a tour guide";
        fourthBasicCard.textContent = "Sarankot Entrance fees.";
        fivethBasicCard.textContent = "All sightseeing entrance fees.";

        // standart
        priceStandart.textContent = "$3,847";
        firstStandartCard.textContent = "3 days, 2 nights / for 1 / 10 people";
        secondStandartCard.textContent = "Hotel pick up and drop-off";
        thirdStandartCard.textContent = "City tours";
        fourthStandartCard.textContent = "Private vehicle";
        fivethStandartCard.textContent = "Professional tour guide";

        // premium
        pricePremium.textContent = "$9,214";
        firstPremiumCard.textContent = "4 days, 3 nights / for 5 / 10 people";
        secondPremiumCard.textContent = "Rescue costs (in case of an emergency)";
        thirdPremiumCard.textContent = "3 nights' accommodation in a guest house";
        fourthPremiumCard.textContent = "Round-trip transportation";
        fivethPremiumCard.textContent = "All meals";

        break;
      }
      case amazon: {
        // basic
        priceBasic.textContent = "$4,492";
        firstBasicCard.textContent = "1 day / for 1 / 20 people";
        secondBasicCard.textContent = "Private river transport";
        thirdBasicCard.textContent = "Hotel pickup";
        fourthBasicCard.textContent = "Bilingual certified local guide";
        fivethBasicCard.textContent = "Lunch";

        // standart
        priceStandart.textContent = "$10,634";
        firstStandartCard.textContent = "3 days, 2 nights / for 1 / 20 people";
        secondStandartCard.textContent = "Bilingual guide and assistant";
        thirdStandartCard.textContent = "Double room overlooking the river";
        fourthStandartCard.textContent = "Entrance tickets";
        fivethStandartCard.textContent = "Return transfer to the airport or city";

        // premium
        pricePremium.textContent = "$16,661";
        firstPremiumCard.textContent = "5 days, 4 nights / for 3 / 15 people";
        secondPremiumCard.textContent = "Pickup/drop-off from the airport or a hotel in Iquitos";
        thirdPremiumCard.textContent = "Breakfast & Lunch & Dinner included";
        fourthPremiumCard.textContent = "Fishing on the Amazon River";
        fivethPremiumCard.textContent = "Transportation and boat";

        break;
      }
      case cruise: {
        // basic
        priceBasic.textContent = "$8,977";
        firstBasicCard.textContent = "8 hours / for 1 person";
        secondBasicCard.textContent = "BBQ lunch";
        thirdBasicCard.textContent = "Visit the island for some sunbathing";
        fourthBasicCard.textContent = "Food and drinks";
        fivethBasicCard.textContent = "Whale and dolphin-watching cruise";

        // standart
        priceStandart.textContent = "$14,780";
        firstStandartCard.textContent = "2 days, 1 night / for 1 person";
        secondStandartCard.textContent = "Private speedboat trip";
        thirdStandartCard.textContent = "Hotel pickup and drop-off";
        fourthStandartCard.textContent = "Wi-Fi";
        fivethStandartCard.textContent = "Cooler, no ice";

        // premium
        pricePremium.textContent = "$25,914";
        firstPremiumCard.textContent = "7 days, 6 nights / for 1 / 8 people";
        secondPremiumCard.textContent = "Overnight cruise";
        thirdPremiumCard.textContent = "Accommodation on the catamaran";
        fourthPremiumCard.textContent = "Port charges & levies";
        fivethPremiumCard.textContent = "Private captain";

        break;
      }
      case iceCave: {
        // basic
        priceBasic.textContent = "$6,592";
        firstBasicCard.textContent = "3 hours / for 1 person";
        secondBasicCard.textContent = "Jeep ride";
        thirdBasicCard.textContent = "Professional guide";
        fourthBasicCard.textContent = "Entrance to the ice cave";
        fivethBasicCard.textContent = "All necessary ice cave equipment";

        // standart
        priceStandart.textContent = "$9,177";
        firstStandartCard.textContent = "1 day / for 1 / 14 people";
        secondStandartCard.textContent = "Round-trip transportation";
        thirdStandartCard.textContent = "Super Jeep ride";
        fourthStandartCard.textContent = "Visit to a natural ice cave";
        fivethStandartCard.textContent = "Crampons for walking on ice";

        // premium
        pricePremium.textContent = "$16,892";
        firstPremiumCard.textContent = "3 days, 2 nights / for 1 / 6 people";
        secondPremiumCard.textContent = "Katla Ice Cave entry ticket & Reynisfjara Beach visit";
        thirdPremiumCard.textContent = "Transport by jeep / suv & Pickup & drop-off by jeep / suv";
        fourthPremiumCard.textContent = "Breakfast & Lunch & Dinner is included";
        fivethPremiumCard.textContent = "Equipment: Helmet & Crampons & Outdoor clothing & Gloves & Rain gear";

        break;
      }
      case waterfall: {
        // basic
        priceBasic.textContent = "$579";
        firstBasicCard.textContent = "6 hours / for 1 / 10 people";
        secondBasicCard.textContent = "Free hotel pickup and drop-off in Marrakech";
        thirdBasicCard.textContent = "Air-conditioned transportation";
        fourthBasicCard.textContent = "Professional driver";
        fivethBasicCard.textContent = "Local trekking guide ";

        // standart
        priceStandart.textContent = "$699";
        firstStandartCard.textContent = "10 hours / for 1 / 10 people";
        secondStandartCard.textContent = "Hotel/riad pickup and drop-off";
        thirdStandartCard.textContent = "Bilingual driver";
        fourthStandartCard.textContent = "Live guide in Ouzoud";
        fivethStandartCard.textContent = "Round-trip transportation air-conditioned minibus";

        // premium
        pricePremium.textContent = "$967";
        firstPremiumCard.textContent = "1 day / for 1 / 7 people";
        secondPremiumCard.textContent = "Hotel pickup";
        thirdPremiumCard.textContent = "Transportation by modern air-conditioned minibus 8 seats";
        fourthPremiumCard.textContent = "Boat ride";
        fivethPremiumCard.textContent = "Local guide";

        break;
      }
      case diving: {
        // basic
        priceBasic.textContent = "$3,731";
        firstBasicCard.textContent = "1 day / for 1 person";
        secondBasicCard.textContent = "Equipment";
        thirdBasicCard.textContent = "Experienced instructor";
        fourthBasicCard.textContent = "Refreshments on the boat";
        fivethBasicCard.textContent = "Second dive (1000 baht)";

        // standart
        priceStandart.textContent = "$6,518";
        firstStandartCard.textContent = "3 days, 2 nights / for 1 / 10 people";
        secondStandartCard.textContent = "Insurance";
        thirdStandartCard.textContent = "Full equipment";
        fourthStandartCard.textContent = "Wet suit & Prescription diving";
        fivethStandartCard.textContent = "Photos and video footage";

        // premium
        pricePremium.textContent = "$9720";
        firstPremiumCard.textContent = "5 days, 4 nights / for 1 person";
        secondPremiumCard.textContent = "Experienced instructor";
        thirdPremiumCard.textContent = "All equipment";
        fourthPremiumCard.textContent = "Swimming pool & jaw-dropping underwater scenery";
        fivethPremiumCard.textContent = "Breakfast on the final day";

        break;
      }
    }

    // add classes to modal to show content
    document.querySelector("#modal-container").classList.add("one");
    document.querySelector("#modal-container").classList.remove("class");
    document.querySelector("#modal-container").classList.remove("out");
    document.body.style.overflow = "hidden";

    // click by body to close the modal
    document.querySelector("#modal-container").addEventListener("click", (e) => {
      document.querySelector("#modal-container").classList.add("out");
      document.body.style.overflow = "auto";
    });

    // click by button to close the modal
    document.querySelector(".modal-button--close").addEventListener("click", (e) => {
      document.querySelector("#modal-container").classList.add("out");
      document.body.style.overflow = "auto";
    });

    // ability to click by modal
    document.querySelector(".modal").addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
}

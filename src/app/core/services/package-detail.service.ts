import { Injectable } from '@angular/core';

export interface DayActivity {
  time?: string;
  title: string;
  type: 'transfer' | 'activity' | 'hotel' | 'meal' | 'note';
  tag?: string;
  duration?: string;
  included?: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  image: string;
  description: string;
  activities: DayActivity[];
  breakfast: 'Included at Hotel' | 'Not Included' | 'Included';
  lunch: 'Included' | 'Not Included';
  dinner: 'Included' | 'Not Included';
  hotel: string;
  notes?: string[];
}

export interface HotelInfo {
  name: string;
  stars: number;
  address: string;
  rating: number;
  ratingLabel: string;
  ratingCount: number;
  checkIn: string;
  checkOut: string;
  roomType: string;
  meals: string;
  image: string;
  knowAbout: string[];
}

export interface PackageDetail {
  id: number;
  title: string;
  destination: string;
  nights: number;
  days: number;
  image: string;
  price: number;
  badge?: string;
  flightFrom: string;
  flightIncluded: boolean;
  atAGlance: { intro: string; highlights: string[] };
  hotel: HotelInfo;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  terms: string[];
  importantNotes: string[];
}

@Injectable({ providedIn: 'root' })
export class PackageDetailService {

  private details: PackageDetail[] = [

    // ─────────────────────────────────────────────
    // BALI PACKAGES (id 3 in destinations)
    // ─────────────────────────────────────────────
    {
      id: 101,
      title: 'Romantic Bali — 4 Nights 5 Days',
      destination: 'Bali',
      nights: 4, days: 5,
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
      price: 29999,
      flightFrom: 'Delhi',
      flightIncluded: false,
      atAGlance: {
        intro: 'Journey through Bali on a wonderful trip discovering its hidden gems',
        highlights: [
          'Ubud Village Celuk, Mas',
          'Goa Gajah',
          'Kintamani with Mount Batur',
          'Tirta Empul',
          'Tanah Lot',
          'Nusa Penida',
          'Besakih Temple',
          'Gates of Heaven',
          'Tirtta Gangga (Water Palace)'
        ]
      },
      hotel: {
        name: 'Hotel NEO+ Kuta, Legian by ASTON',
        stars: 3,
        address: 'Jl. Troppozone No. 8 Legian',
        rating: 8.2,
        ratingLabel: 'Very Good',
        ratingCount: 309,
        checkIn: '02:00 PM',
        checkOut: '12:00 PM',
        roomType: '1 x Superior Room (Breakfast)',
        meals: 'Meals Included - Breakfast',
        image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032141-3032140_hero-anadaman-19-1-min.jpg',
        knowAbout: [
          'Newly Renovated: Hotel renovated in 2018, modern amenities',
          'Walkable Metro: No metro, but close to public transport',
          'Lively Location: Close to Kuta\'s nightlife, bars, and restaurants',
          'Indian Breakfast: Not available in hotel, but nearby options',
          'Lift Issues: Sometimes slow and busy during peak hours',
          'Spacious Lobby: Comfortable seating area, modern design',
          'Variety Dining: Multiple restaurants and cafes nearby',
          'Indian Food: Available in nearby restaurants',
          'Noise Pollution: Can be noisy due to nearby nightlife',
          'Small Pool: Limited pool size, can get crowded',
          'Local Shopping: Kuta Art Market and shopping streets nearby',
          'Spacious Rooms: 30 sqm room size, comfortable and clean',
          'Indian Crowd: Popular among Indian tourists',
          'No Beach View: Not a beachfront property, 10-15 min walk to Kuta Beach',
          'No Indian Restaurant: Inside the hotel, but nearby options available'
        ]
      },
      itinerary: [
        {
          day: 1,
          title: 'Arrival at Bali',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
          description: 'Upon your arrival at Ngurah Rai Airport in Denpasar, Bali, our representative will meet and welcome you. You will then be taken to the hotel for your refreshment.',
          activities: [
            { title: 'Private Transfer from Airport to Hotel - Kuta, Legian, Tuban Kuta', type: 'transfer', tag: 'Private Transfers' },
            { title: 'Overnight stay at Hotel NEO+ Kuta, Legian by ASTON', type: 'hotel' }
          ],
          breakfast: 'Not Included',
          lunch: 'Not Included',
          dinner: 'Not Included',
          hotel: 'Hotel NEO+ Kuta, Legian by ASTON'
        },
        {
          day: 2,
          title: 'Full Day Ubud with Kintamani and Volcano',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
          description: 'Spend a day experiencing a traditional dance, discovering iconic rice terraces and exploring the highlights of Kintamani. Start the day with a performance of the famous Barong and Keris Dance. This traditional Balinese dance narrates the fight between good and evil and is a classic example of the Balinese way of blending myth and history into one reality. Drive to the iconic Tegalalang Rice Terraces, where emerald rice fields cascade down the mountain sides. Along the way, we\'ll pass through villages, home to skilled silversmiths, goldsmiths, wood carvers, stone carvers and painters. Visit Goa Gajah (Elephant Cave), one of Bali\'s most important archaeological sites. Continue to Kintamani for a panoramic view of Mount Batur volcano and its crater lake. Visit Tirta Empul, a sacred Hindu water temple where locals come to purify themselves.',
          activities: [
            { time: '07:30', title: 'Barong Dance and Kintamani Tour (Goa Gajah, Celuk, Mas, Mount Batur, Tirta Empul) - Private with English Speaking Guide', type: 'activity', tag: 'Private Transfers', duration: 'Starts at 7:30 am (Duration: 10 hrs)' },
            { title: 'Overnight stay at Hotel NEO+ Kuta, Legian by ASTON', type: 'hotel' }
          ],
          breakfast: 'Included at Hotel',
          lunch: 'Not Included',
          dinner: 'Not Included',
          hotel: 'Hotel NEO+ Kuta, Legian by ASTON'
        },
        {
          day: 3,
          title: 'Half Day Tanah Lot',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg',
          description: 'Visit a spectacular Tanah Lot Temple which stands proudly on the rock inside the ocean. Shopping time is available on this visit for any kind of Balinese handicraft products good for souvenirs and or for collection.',
          activities: [
            { time: '14:00', title: 'Half Day Tanah Lot Tour - Private Transfer', type: 'activity', tag: 'Private Transfers', duration: 'Starts at 9:00 am, 4:00 pm, 5:00 pm (Duration: 6 hrs)' },
            { title: 'Overnight stay at Hotel NEO+ Kuta, Legian by ASTON', type: 'hotel' }
          ],
          breakfast: 'Included at Hotel',
          lunch: 'Not Included',
          dinner: 'Not Included',
          hotel: 'Hotel NEO+ Kuta, Legian by ASTON',
          notes: ['Guide is Mandatory and included above 15 pax. For Below 15 Pax, select the optional Guide from the system']
        },
        {
          day: 4,
          title: 'Full Day Nusa Penida Island Tour',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
          description: 'Nusa Penida is a stunning island southeast of Bali, known for its dramatic cliffs, crystal-clear waters, and iconic viewpoints. Visit Kelingking Beach (T-Rex cliff), Angel\'s Billabong, Broken Beach, and Crystal Bay. The island offers some of the most breathtaking scenery in all of Indonesia.',
          activities: [
            { time: '07:00', title: 'Full Day Nusa Penida Island Tour - Speedboat + Private Transfer', type: 'activity', tag: 'Private Transfers', duration: 'Starts at 7:00 am (Duration: 10 hrs)' },
            { title: 'Overnight stay at Hotel NEO+ Kuta, Legian by ASTON', type: 'hotel' }
          ],
          breakfast: 'Included at Hotel',
          lunch: 'Not Included',
          dinner: 'Not Included',
          hotel: 'Hotel NEO+ Kuta, Legian by ASTON'
        },
        {
          day: 5,
          title: 'Departure from Bali',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
          description: 'After breakfast, check out from the hotel. Our representative will transfer you to Ngurah Rai International Airport for your onward journey. Carry back beautiful memories of Bali.',
          activities: [
            { title: 'Private Transfer from Hotel to Airport', type: 'transfer', tag: 'Private Transfers' }
          ],
          breakfast: 'Included at Hotel',
          lunch: 'Not Included',
          dinner: 'Not Included',
          hotel: ''
        }
      ],
      inclusions: [
        '4 Nights accommodation at Hotel NEO+ Kuta, Legian by ASTON (or similar) on twin sharing basis',
        'Daily breakfast at hotel',
        'Private airport transfers (arrival and departure)',
        'Barong Dance and Kintamani Tour with English speaking guide',
        'Half Day Tanah Lot Tour with private transfer',
        'Full Day Nusa Penida Island Tour with speedboat',
        'All tours and transfers on private basis',
        'All applicable taxes'
      ],
      exclusions: [
        'International / Domestic airfare',
        'Visa charges (Visa on Arrival for Indians — approx USD 35)',
        'Lunch and Dinner',
        'Personal expenses such as laundry, telephone calls, tips',
        'Travel insurance',
        'Any services not mentioned in inclusions',
        'Entry fees to monuments not mentioned',
        'Optional tours and activities'
      ],
      terms: [
        'Booking amount of 25% is required to confirm the booking.',
        'Full payment must be made 30 days prior to departure.',
        'Cancellation charges: 30+ days before departure — 10% of total cost; 15-29 days — 25%; 7-14 days — 50%; Less than 7 days — 100%.',
        'In case of natural calamities, political unrest or any force majeure, the company will not be responsible.',
        'The company reserves the right to change the itinerary due to unforeseen circumstances.',
        'Hotel check-in and check-out times are subject to hotel policies.',
        'Room allocation is subject to availability at the time of check-in.',
        'All disputes are subject to Pune jurisdiction only.'
      ],
      importantNotes: [
        'The timings shown for various tours and transfers is indicative and may change depending on the situation at the destination at the time of travel. Any change in timing will be communicated in the final itinerary before travel and communicated on the trip support group.',
        'Guide is Mandatory and included above 15 pax. For Below 15 Pax, select the optional Guide from the system.',
        'Visa on Arrival is available for Indian passport holders at Bali airport. Carry USD 35 in cash.',
        'Bali has a tourist tax — please carry small denomination USD/IDR for entry fees.',
        'Dress modestly when visiting temples — sarong and sash are required (usually provided at temple entrance).',
        'Nusa Penida roads are rough — wear comfortable shoes and be prepared for bumpy rides.'
      ]
    },

    // ─────────────────────────────────────────────
    // BALI PACKAGE 2 — Romantic Singapore and Bali
    // ─────────────────────────────────────────────
    {
      id: 102,
      title: 'Romantic Singapore and Bali',
      destination: 'Bali',
      nights: 7, days: 8,
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg',
      price: 47854,
      flightFrom: 'Delhi',
      flightIncluded: false,
      atAGlance: {
        intro: 'A perfect blend of modern Singapore and tropical Bali for couples',
        highlights: [
          'Gardens by the Bay, Singapore',
          'Sentosa Island & Universal Studios',
          'Marina Bay Sands SkyPark',
          'Ubud Rice Terraces, Bali',
          'Tanah Lot Temple',
          'Kintamani Volcano View',
          'Nusa Penida Island',
          'Seminyak Beach'
        ]
      },
      hotel: {
        name: 'Hotel Boss Singapore + Kuta Seaview Boutique Resort Bali',
        stars: 3,
        address: 'Singapore & Kuta, Bali',
        rating: 8.0,
        ratingLabel: 'Very Good',
        ratingCount: 520,
        checkIn: '02:00 PM',
        checkOut: '12:00 PM',
        roomType: '1 x Superior Room (Breakfast)',
        meals: 'Meals Included - Breakfast',
        image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg',
        knowAbout: [
          'Centrally located in Singapore near Lavender MRT',
          'Bali hotel is close to Kuta Beach — 5 min walk',
          'Both hotels include daily breakfast',
          'Indian food available nearby at both locations',
          'Singapore hotel has rooftop pool',
          'Bali hotel has outdoor pool with garden view',
          'Popular among Indian honeymooners',
          'Airport transfers included at both destinations'
        ]
      },
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Singapore',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg',
          description: 'Arrive at Changi Airport, Singapore. Our representative will meet and greet you. Transfer to hotel. Evening free to explore the vibrant streets of Singapore.',
          activities: [
            { title: 'Private Transfer from Changi Airport to Hotel', type: 'transfer', tag: 'Private Transfers' },
            { title: 'Overnight stay at Hotel Boss Singapore', type: 'hotel' }
          ],
          breakfast: 'Not Included', lunch: 'Not Included', dinner: 'Not Included',
          hotel: 'Hotel Boss Singapore'
        },
        {
          day: 2,
          title: 'Singapore City Tour + Gardens by the Bay',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg',
          description: 'Full day Singapore city tour covering Merlion Park, Orchard Road, Little India, Chinatown, and the iconic Gardens by the Bay with its stunning Supertree Grove. Evening light show at Gardens by the Bay is a must-see.',
          activities: [
            { time: '09:00', title: 'Singapore City Tour with Gardens by the Bay - Private', type: 'activity', tag: 'Private Transfers', duration: 'Duration: 8 hrs' },
            { title: 'Overnight stay at Hotel Boss Singapore', type: 'hotel' }
          ],
          breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included',
          hotel: 'Hotel Boss Singapore'
        },
        {
          day: 3,
          title: 'Sentosa Island — Universal Studios',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg',
          description: 'Spend the day at Sentosa Island. Visit Universal Studios Singapore with its thrilling rides and shows. Enjoy the beaches of Sentosa and the cable car ride for panoramic views.',
          activities: [
            { time: '09:00', title: 'Sentosa Island + Universal Studios Singapore - Private Transfer', type: 'activity', tag: 'Private Transfers', duration: 'Duration: Full Day' },
            { title: 'Overnight stay at Hotel Boss Singapore', type: 'hotel' }
          ],
          breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included',
          hotel: 'Hotel Boss Singapore'
        },
        {
          day: 4,
          title: 'Singapore to Bali — Arrival',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
          description: 'Morning transfer to Singapore Changi Airport for your flight to Bali. Arrive at Ngurah Rai Airport, Bali. Our representative will meet and transfer you to the hotel. Evening free to explore Kuta Beach.',
          activities: [
            { title: 'Transfer to Singapore Airport', type: 'transfer', tag: 'Private Transfers' },
            { title: 'Flight Singapore to Bali (own arrangement)', type: 'activity', tag: 'Own Arrangement' },
            { title: 'Private Transfer from Bali Airport to Hotel', type: 'transfer', tag: 'Private Transfers' },
            { title: 'Overnight stay at Kuta Seaview Boutique Resort', type: 'hotel' }
          ],
          breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included',
          hotel: 'Kuta Seaview Boutique Resort'
        },
        {
          day: 5,
          title: 'Full Day Ubud with Kintamani',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
          description: 'Explore the cultural heart of Bali. Visit Tegalalang Rice Terraces, Goa Gajah (Elephant Cave), Celuk silver village, Mas wood carving village, and enjoy the panoramic views of Mount Batur volcano at Kintamani. Visit Tirta Empul holy spring temple.',
          activities: [
            { time: '07:30', title: 'Full Day Ubud Kintamani Tour - Private with English Speaking Guide', type: 'activity', tag: 'Private Transfers', duration: 'Duration: 10 hrs' },
            { title: 'Overnight stay at Kuta Seaview Boutique Resort', type: 'hotel' }
          ],
          breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included',
          hotel: 'Kuta Seaview Boutique Resort'
        },
        {
          day: 6,
          title: 'Tanah Lot + Seminyak Beach',
          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg',
          description: 'Morning visit to the iconic Tanah Lot Temple perched on a rock in the ocean — one of Bali\'s most photographed spots. Afternoon free at Seminyak Beach, known for its upscale beach clubs and stunning sunsets.',
          activities: [
            { time: '14:00', title: 'Half Day Tanah Lot Tour - Private Transfer', type: 'activity', tag: 'Private Transfers', duration: 'Duration: 6 hrs' },
            { title: 'Overnight stay at Kuta Seaview Boutique Resort', type: 'hotel' }
          ],
          breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included',
          hotel: 'Kuta Seaview Boutique Resort'
        },
        {
          day: 7,
          title: 'Nusa Penida Island Tour',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
          description: 'Full day excursion to Nusa Penida island. Visit the famous Kelingking Beach (T-Rex cliff viewpoint), Angel\'s Billabong natural infinity pool, Broken Beach arch, and Crystal Bay for snorkeling.',
          activities: [
            { time: '07:00', title: 'Full Day Nusa Penida Tour - Speedboat + Private Transfer', type: 'activity', tag: 'Private Transfers', duration: 'Duration: 10 hrs' },
            { title: 'Overnight stay at Kuta Seaview Boutique Resort', type: 'hotel' }
          ],
          breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included',
          hotel: 'Kuta Seaview Boutique Resort'
        },
        {
          day: 8,
          title: 'Departure from Bali',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg',
          description: 'After breakfast, check out from the hotel. Transfer to Ngurah Rai International Airport for your return flight. Carry back beautiful memories of Singapore and Bali.',
          activities: [
            { title: 'Private Transfer from Hotel to Bali Airport', type: 'transfer', tag: 'Private Transfers' }
          ],
          breakfast: 'Included at Hotel', lunch: 'Not Included', dinner: 'Not Included',
          hotel: ''
        }
      ],
      inclusions: [
        '3 Nights in Singapore at Hotel Boss (twin sharing, breakfast included)',
        '4 Nights in Bali at Kuta Seaview Boutique Resort (twin sharing, breakfast included)',
        'All private airport transfers in Singapore and Bali',
        'Singapore City Tour with Gardens by the Bay',
        'Sentosa Island + Universal Studios Singapore entry',
        'Full Day Ubud Kintamani Tour in Bali',
        'Half Day Tanah Lot Tour',
        'Full Day Nusa Penida Island Tour with speedboat',
        'All applicable taxes'
      ],
      exclusions: [
        'International airfare (India to Singapore and Bali to India)',
        'Singapore to Bali flight',
        'Singapore Tourist Visa (if applicable)',
        'Bali Visa on Arrival (approx USD 35)',
        'Lunch and Dinner',
        'Personal expenses',
        'Travel insurance',
        'Any services not mentioned in inclusions'
      ],
      terms: [
        'Booking amount of 25% is required to confirm the booking.',
        'Full payment must be made 30 days prior to departure.',
        'Cancellation charges: 30+ days — 10%; 15-29 days — 25%; 7-14 days — 50%; Less than 7 days — 100%.',
        'The company reserves the right to change the itinerary due to unforeseen circumstances.',
        'All disputes are subject to Pune jurisdiction only.'
      ],
      importantNotes: [
        'The timings shown for various tours and transfers is indicative and may change depending on the situation at the destination at the time of travel.',
        'Singapore to Bali flight is not included — please book separately. Recommended airlines: IndiGo, Air Asia, Scoot.',
        'Universal Studios Singapore entry tickets are included. Meal vouchers are not included.',
        'Bali Visa on Arrival available for Indian passport holders — carry USD 35 cash.',
        'Dress modestly when visiting temples in Bali — sarong required.'
      ]
    }
  ];

    // DUBAI PACKAGE 1
    {
      id: 201,
      title: 'Dubai on a Budget',
      destination: 'Dubai',
      nights: 4, days: 5,
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
      price: 28536,
      badge: 'Best Seller',
      flightFrom: 'Mumbai',
      flightIncluded: false,
      atAGlance: {
        intro: 'Experience the dazzling city of Dubai — from towering skyscrapers to golden deserts',
        highlights: ['Burj Khalifa At the Top Level 124','Dubai Mall & Fountain Show','Desert Safari with BBQ Dinner','Dubai Creek & Gold Souk','Spice Souk','Dubai Frame','Palm Jumeirah Drive','Dhow Cruise Dinner']
      },
      hotel: {
        name: 'Citymax Hotel Bur Dubai',
        stars: 3,
        address: 'Khalid Bin Al Waleed Road, Bur Dubai',
        rating: 7.8, ratingLabel: 'Good', ratingCount: 1240,
        checkIn: '02:00 PM', checkOut: '12:00 PM',
        roomType: '1 x Standard Room (Breakfast)',
        meals: 'Meals Included - Breakfast',
        image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
        knowAbout: [
          'Centrally located in Bur Dubai — easy metro access',
          'Indian restaurants within walking distance',
          'Rooftop pool with city views',
          'Indian breakfast available at hotel',
          'Close to Gold Souk and Spice Souk',
          'Popular among Indian tourists',
          'Free WiFi throughout the hotel',
          'Metro station 5 min walk',
          'No beach view — beach accessible by taxi (20 min)',
          '24-hour front desk and room service'
        ]
      },
      itinerary: [
        {
          day: 1, title: 'Arrival in Dubai',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
          description: 'Arrive at Dubai International Airport. Our representative will meet and greet you at the arrival hall. Transfer to your hotel in Bur Dubai. Check-in and freshen up. Evening free to explore the nearby Gold Souk and Spice Souk.',
          activities: [
            { title: 'Private Transfer from Dubai Airport to Hotel', type: 'transfer' as const, tag: 'Private Transfers' },
            { title: 'Overnight stay at Citymax Hotel Bur Dubai', type: 'hotel' as const }
          ],
          breakfast: 'Not Included' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Citymax Hotel Bur Dubai'
        },
        {
          day: 2, title: 'Dubai City Tour + Burj Khalifa',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
          description: 'Start your Dubai city tour with Jumeirah Mosque photo stop, Burj Al Arab exterior, Palm Jumeirah drive. Afternoon visit Burj Khalifa At the Top (Level 124) for breathtaking panoramic views. Evening at Dubai Mall with the spectacular Dubai Fountain Show.',
          activities: [
            { time: '09:00', title: 'Dubai City Tour — Jumeirah Mosque, Burj Al Arab, Palm Jumeirah', type: 'activity' as const, tag: 'Private Transfers', duration: 'Duration: 4 hrs' },
            { time: '15:00', title: 'Burj Khalifa At the Top Level 124 + Dubai Mall + Fountain Show', type: 'activity' as const, tag: 'Private Transfers', duration: 'Duration: 4 hrs' },
            { title: 'Overnight stay at Citymax Hotel Bur Dubai', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Citymax Hotel Bur Dubai'
        },
        {
          day: 3, title: 'Desert Safari with BBQ Dinner',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
          description: 'Morning free for leisure. Afternoon, embark on an exciting Desert Safari — dune bashing in 4x4 vehicles, camel riding, sandboarding, henna painting. Watch belly dance and Tanoura show at the Bedouin camp. Lavish BBQ dinner under the stars with unlimited soft drinks.',
          activities: [
            { time: '15:00', title: 'Desert Safari — Dune Bashing, Camel Ride, BBQ Dinner', type: 'activity' as const, tag: 'Shared Transfers', duration: 'Starts at 3:00 pm (Duration: 6 hrs)' },
            { title: 'Overnight stay at Citymax Hotel Bur Dubai', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Included' as const,
          hotel: 'Citymax Hotel Bur Dubai',
          notes: ['BBQ Dinner included in Desert Safari. Vegetarian options available on request.']
        },
        {
          day: 4, title: 'Dubai Frame + Dhow Cruise Dinner',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
          description: 'Morning visit to the Dubai Frame — 150-metre tall picture frame offering views of old and new Dubai. Afternoon free for shopping at Gold Souk or Dubai Mall. Evening, enjoy a traditional Dhow Cruise on Dubai Creek with dinner and live entertainment.',
          activities: [
            { time: '10:00', title: 'Dubai Frame Entry + Private Transfer', type: 'activity' as const, tag: 'Private Transfers', duration: 'Duration: 2 hrs' },
            { time: '20:00', title: 'Dhow Cruise Dinner on Dubai Creek', type: 'activity' as const, tag: 'Shared Transfers', duration: 'Duration: 2 hrs' },
            { title: 'Overnight stay at Citymax Hotel Bur Dubai', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Included' as const,
          hotel: 'Citymax Hotel Bur Dubai'
        },
        {
          day: 5, title: 'Departure from Dubai',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
          description: 'After breakfast, check out from the hotel. Transfer to Dubai International Airport for your return flight to India. Carry back golden memories of the City of Gold.',
          activities: [
            { title: 'Private Transfer from Hotel to Dubai Airport', type: 'transfer' as const, tag: 'Private Transfers' }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: ''
        }
      ],
      inclusions: [
        '4 Nights at Citymax Hotel Bur Dubai (twin sharing, breakfast included)',
        'Private airport transfers (arrival and departure)',
        'Dubai City Tour — Jumeirah Mosque, Burj Al Arab, Palm Jumeirah',
        'Burj Khalifa At the Top Level 124 entry ticket',
        'Dubai Mall visit + Dubai Fountain Show',
        'Desert Safari — dune bashing, camel ride, BBQ dinner',
        'Dubai Frame entry ticket',
        'Dhow Cruise Dinner on Dubai Creek',
        'All applicable taxes'
      ],
      exclusions: [
        'International airfare (India to Dubai and return)',
        'UAE Tourist Visa (approx ₹5,000 — can be arranged on request)',
        'Lunch and personal meals',
        'Personal expenses — laundry, tips, telephone',
        'Travel insurance',
        'Optional tours and activities',
        'Any services not mentioned in inclusions'
      ],
      terms: [
        'Booking amount of 25% required to confirm booking.',
        'Full payment must be made 30 days prior to departure.',
        'Cancellation: 30+ days — 10%; 15-29 days — 25%; 7-14 days — 50%; Less than 7 days — 100%.',
        'UAE Visa must be applied minimum 7 working days before departure.',
        'Company reserves right to change itinerary due to unforeseen circumstances.',
        'All disputes subject to Pune jurisdiction only.'
      ],
      importantNotes: [
        'The timings shown for various tours and transfers is indicative and may change depending on the situation at the destination at the time of travel. Any change in timing will be communicated in the final itinerary before travel and communicated on the trip support group.',
        'UAE Tourist Visa is NOT included in the package price. It can be arranged by JK Tours for an additional charge.',
        'Desert Safari is on shared basis. Private desert safari available at extra cost.',
        'Burj Khalifa tickets are subject to availability — booking in advance is strongly recommended.',
        'Dubai has a strict dress code in public places — dress modestly outside hotels and malls.'
      ]
    },

    // DUBAI PACKAGE 2
    {
      id: 202,
      title: 'Trip to Dubai',
      destination: 'Dubai',
      nights: 5, days: 6,
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg',
      price: 40397,
      flightFrom: 'Mumbai',
      flightIncluded: false,
      atAGlance: {
        intro: 'A comprehensive Dubai experience covering all iconic landmarks and experiences',
        highlights: ['Burj Khalifa Level 124 & 125','Dubai Mall & Fountain','Desert Safari with BBQ','Dhow Cruise Marina','Abu Dhabi Day Trip — Sheikh Zayed Grand Mosque','Dubai Frame','Gold Souk & Spice Souk','Palm Jumeirah']
      },
      hotel: {
        name: 'Ibis Styles Dubai Jumeira',
        stars: 3,
        address: 'Al Mina Road, Jumeirah, Dubai',
        rating: 8.4, ratingLabel: 'Very Good', ratingCount: 890,
        checkIn: '02:00 PM', checkOut: '12:00 PM',
        roomType: '1 x Standard Room (Breakfast)',
        meals: 'Meals Included - Breakfast',
        image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg',
        knowAbout: [
          'Located in Jumeirah — close to beach and city attractions',
          'Modern hotel with vibrant interiors',
          'Indian restaurants within 10 min walk',
          'Outdoor pool available',
          'Free WiFi throughout',
          'Popular among Indian and European tourists',
          'Metro accessible — Al Jafiliya station nearby',
          'Breakfast buffet includes Indian options',
          'Close to Dubai Mall (15 min by taxi)',
          'Fitness center available'
        ]
      },
      itinerary: [
        {
          day: 1, title: 'Arrival in Dubai',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
          description: 'Arrive at Dubai International Airport. Our representative will meet and greet you. Transfer to hotel in Jumeirah. Check-in and freshen up. Evening free to explore the vibrant Jumeirah area.',
          activities: [
            { title: 'Private Transfer from Dubai Airport to Hotel — Jumeirah', type: 'transfer' as const, tag: 'Private Transfers' },
            { title: 'Overnight stay at Ibis Styles Dubai Jumeira', type: 'hotel' as const }
          ],
          breakfast: 'Not Included' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Ibis Styles Dubai Jumeira'
        },
        {
          day: 2, title: 'Dubai City Tour + Burj Khalifa',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
          description: 'Comprehensive Dubai city tour — Jumeirah Mosque photo stop, Burj Al Arab exterior, Atlantis The Palm drive, Palm Jumeirah, JBR Walk. Afternoon visit Burj Khalifa At the Top (Level 124 & 125). Evening at Dubai Mall with the world-famous Dubai Fountain Show.',
          activities: [
            { time: '09:00', title: 'Dubai City Tour — Half Day Private', type: 'activity' as const, tag: 'Private Transfers', duration: 'Duration: 4 hrs' },
            { time: '15:00', title: 'Burj Khalifa At the Top Level 124 & 125 + Dubai Fountain Show', type: 'activity' as const, tag: 'Private Transfers', duration: 'Duration: 4 hrs' },
            { title: 'Overnight stay at Ibis Styles Dubai Jumeira', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Ibis Styles Dubai Jumeira'
        },
        {
          day: 3, title: 'Desert Safari with BBQ Dinner',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
          description: 'Morning free for leisure or optional shopping. Afternoon, depart for an exhilarating Desert Safari — heart-pumping dune bashing, camel riding, sandboarding, quad biking (optional), henna painting. Spectacular belly dance and Tanoura show at the Bedouin camp. Lavish BBQ dinner with unlimited soft drinks.',
          activities: [
            { time: '14:30', title: 'Desert Safari — Dune Bashing, Camel Ride, Sandboarding, BBQ Dinner', type: 'activity' as const, tag: 'Shared Transfers', duration: 'Starts at 2:30 pm (Duration: 7 hrs)' },
            { title: 'Overnight stay at Ibis Styles Dubai Jumeira', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Included' as const,
          hotel: 'Ibis Styles Dubai Jumeira',
          notes: ['Quad biking is optional and available at extra cost at the desert camp.']
        },
        {
          day: 4, title: 'Abu Dhabi Day Trip — Sheikh Zayed Grand Mosque',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
          description: 'Full day trip to Abu Dhabi. Visit the magnificent Sheikh Zayed Grand Mosque — one of the world\'s largest mosques with stunning white marble architecture. Drive past Emirates Palace Hotel, Corniche, and Heritage Village. Return to Dubai by evening.',
          activities: [
            { time: '08:00', title: 'Abu Dhabi Day Trip — Sheikh Zayed Grand Mosque, Emirates Palace, Corniche', type: 'activity' as const, tag: 'Shared Transfers', duration: 'Starts at 8:00 am (Duration: 10 hrs)' },
            { title: 'Overnight stay at Ibis Styles Dubai Jumeira', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Ibis Styles Dubai Jumeira',
          notes: ['Modest dress is mandatory at Sheikh Zayed Grand Mosque. Abayas provided free at entrance for women.']
        },
        {
          day: 5, title: 'Dubai Frame + Dhow Cruise Marina',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
          description: 'Morning visit to the iconic Dubai Frame — 150-metre tall structure offering views of old and new Dubai. Afternoon free for shopping at Gold Souk, Spice Souk, or Dubai Mall. Evening, enjoy a luxurious Dhow Cruise on Dubai Marina with international buffet dinner and live entertainment.',
          activities: [
            { time: '10:00', title: 'Dubai Frame Entry + Private Transfer', type: 'activity' as const, tag: 'Private Transfers', duration: 'Duration: 2 hrs' },
            { time: '20:00', title: 'Dhow Cruise Dinner — Dubai Marina', type: 'activity' as const, tag: 'Shared Transfers', duration: 'Duration: 2 hrs' },
            { title: 'Overnight stay at Ibis Styles Dubai Jumeira', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Included' as const,
          hotel: 'Ibis Styles Dubai Jumeira'
        },
        {
          day: 6, title: 'Departure from Dubai',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg',
          description: 'After breakfast, check out from the hotel. Transfer to Dubai International Airport for your return flight. Carry back golden memories of the magnificent City of Gold.',
          activities: [
            { title: 'Private Transfer from Hotel to Dubai Airport', type: 'transfer' as const, tag: 'Private Transfers' }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: ''
        }
      ],
      inclusions: [
        '5 Nights at Ibis Styles Dubai Jumeira (twin sharing, breakfast included)',
        'Private airport transfers (arrival and departure)',
        'Dubai City Tour — half day private',
        'Burj Khalifa At the Top Level 124 & 125 entry',
        'Dubai Fountain Show',
        'Desert Safari — dune bashing, camel ride, BBQ dinner',
        'Abu Dhabi Day Trip — Sheikh Zayed Grand Mosque',
        'Dubai Frame entry ticket',
        'Dhow Cruise Dinner on Dubai Marina',
        'All applicable taxes'
      ],
      exclusions: [
        'International airfare',
        'UAE Tourist Visa',
        'Lunch and personal meals',
        'Personal expenses',
        'Travel insurance',
        'Quad biking at desert (optional extra)',
        'Any services not mentioned in inclusions'
      ],
      terms: [
        'Booking amount of 25% required to confirm booking.',
        'Full payment must be made 30 days prior to departure.',
        'Cancellation: 30+ days — 10%; 15-29 days — 25%; 7-14 days — 50%; Less than 7 days — 100%.',
        'UAE Visa must be applied minimum 7 working days before departure.',
        'All disputes subject to Pune jurisdiction only.'
      ],
      importantNotes: [
        'The timings shown for various tours and transfers is indicative and may change depending on the situation at the destination at the time of travel. Any change in timing will be communicated in the final itinerary before travel and communicated on the trip support group.',
        'UAE Tourist Visa is NOT included — can be arranged by JK Tours for additional charge.',
        'Modest dress is mandatory at Sheikh Zayed Grand Mosque — abayas provided free at entrance.',
        'Burj Khalifa tickets must be booked in advance — subject to availability.',
        'Global Village and Miracle Garden are seasonal (October to April only).'
      ]
    },

  ];

  getByPackageId(id: number): PackageDetail | undefined {
    return this.details.find(d => d.id === id);
  }

    // ── THAILAND ──
    {
      id: 301,
      title: 'Classic Thailand',
      destination: 'Thailand',
      nights: 11, days: 12,
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
      price: 66071,
      flightFrom: 'Mumbai',
      flightIncluded: false,
      atAGlance: {
        intro: 'Discover the Land of Smiles — from bustling Bangkok to serene Chiang Mai and tropical Phuket',
        highlights: ['Grand Palace & Wat Phra Kaew, Bangkok','Wat Arun (Temple of Dawn)','Floating Market Tour','Elephant Sanctuary, Chiang Mai','Doi Inthanon National Park','Phi Phi Islands, Phuket','James Bond Island','Patong Beach','Tiger Kingdom (optional)']
      },
      hotel: {
        name: 'Ibis Bangkok Riverside + Chiang Mai Orchid Hotel + Patong Beach Hotel',
        stars: 3,
        address: 'Bangkok, Chiang Mai & Phuket, Thailand',
        rating: 8.1, ratingLabel: 'Very Good', ratingCount: 1450,
        checkIn: '02:00 PM', checkOut: '12:00 PM',
        roomType: '1 x Superior Room (Breakfast)',
        meals: 'Meals Included - Breakfast',
        image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
        knowAbout: [
          'Bangkok hotel on Chao Phraya riverside — stunning views',
          'Chiang Mai hotel centrally located near Night Bazaar',
          'Phuket hotel 5 min walk from Patong Beach',
          'Indian food available at all three locations',
          'All hotels include daily breakfast',
          'Popular among Indian families and couples',
          'Free WiFi at all properties',
          'Swimming pool at all three hotels',
          'Airport transfers included at all cities',
          'Inter-city flights not included — arrange separately'
        ]
      },
      itinerary: [
        {
          day: 1, title: 'Arrival in Bangkok',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',
          description: 'Arrive at Suvarnabhumi Airport, Bangkok. Our representative will meet and greet you. Transfer to hotel on the Chao Phraya riverside. Check-in and freshen up. Evening free to explore the vibrant streets of Bangkok.',
          activities: [
            { title: 'Private Transfer from Bangkok Airport to Hotel', type: 'transfer' as const, tag: 'Private Transfers' },
            { title: 'Overnight stay at Ibis Bangkok Riverside', type: 'hotel' as const }
          ],
          breakfast: 'Not Included' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Ibis Bangkok Riverside'
        },
        {
          day: 2, title: 'Bangkok City Tour — Grand Palace & Temples',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',
          description: 'Full day Bangkok city tour. Visit the magnificent Grand Palace and Wat Phra Kaew (Temple of the Emerald Buddha) — the most sacred Buddhist temple in Thailand. Visit Wat Pho with its giant reclining Buddha. Take a boat ride on the Chao Phraya River to visit Wat Arun (Temple of Dawn). Evening at Khao San Road.',
          activities: [
            { time: '08:30', title: 'Bangkok City Tour — Grand Palace, Wat Phra Kaew, Wat Pho, Wat Arun', type: 'activity' as const, tag: 'Private Transfers', duration: 'Duration: 8 hrs' },
            { title: 'Overnight stay at Ibis Bangkok Riverside', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Ibis Bangkok Riverside'
        },
        {
          day: 3, title: 'Floating Market + Safari World',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',
          description: 'Morning visit to the famous Damnoen Saduak Floating Market — a vibrant market on the canals where vendors sell fresh fruits, vegetables, and local food from boats. Afternoon visit to Safari World — an open zoo with marine park shows including dolphin shows, orangutan boxing, and bird shows.',
          activities: [
            { time: '07:00', title: 'Damnoen Saduak Floating Market Tour', type: 'activity' as const, tag: 'Shared Transfers', duration: 'Starts at 7:00 am (Duration: 4 hrs)' },
            { time: '13:00', title: 'Safari World & Marine Park — Entry + Transfer', type: 'activity' as const, tag: 'Private Transfers', duration: 'Duration: 4 hrs' },
            { title: 'Overnight stay at Ibis Bangkok Riverside', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Ibis Bangkok Riverside'
        },
        {
          day: 4, title: 'Bangkok to Chiang Mai',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',
          description: 'Morning transfer to Bangkok airport for your flight to Chiang Mai (own arrangement). Arrive in Chiang Mai — the cultural capital of Northern Thailand. Transfer to hotel. Evening visit to the famous Chiang Mai Night Bazaar for shopping and local street food.',
          activities: [
            { title: 'Transfer to Bangkok Airport', type: 'transfer' as const, tag: 'Private Transfers' },
            { title: 'Flight Bangkok to Chiang Mai (own arrangement)', type: 'activity' as const, tag: 'Own Arrangement' },
            { title: 'Private Transfer from Chiang Mai Airport to Hotel', type: 'transfer' as const, tag: 'Private Transfers' },
            { title: 'Overnight stay at Chiang Mai Orchid Hotel', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Chiang Mai Orchid Hotel'
        },
        {
          day: 5, title: 'Elephant Sanctuary + Doi Inthanon',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',
          description: 'Morning visit to an ethical Elephant Sanctuary where you can feed, bathe, and interact with rescued elephants in a natural environment. Afternoon drive to Doi Inthanon National Park — the highest peak in Thailand — with stunning waterfalls and twin royal pagodas.',
          activities: [
            { time: '08:00', title: 'Elephant Sanctuary Half Day Tour', type: 'activity' as const, tag: 'Private Transfers', duration: 'Duration: 4 hrs' },
            { time: '13:00', title: 'Doi Inthanon National Park Tour', type: 'activity' as const, tag: 'Private Transfers', duration: 'Duration: 5 hrs' },
            { title: 'Overnight stay at Chiang Mai Orchid Hotel', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Chiang Mai Orchid Hotel',
          notes: ['Elephant Sanctuary is ethical — no riding. Interaction includes feeding and bathing only.']
        },
        {
          day: 6, title: 'Chiang Mai Temples + Cooking Class',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',
          description: 'Morning visit to Doi Suthep Temple — a sacred Buddhist temple perched on a mountain with panoramic views of Chiang Mai. Visit the Old City temples. Afternoon, enjoy a traditional Thai cooking class where you learn to cook authentic Thai dishes.',
          activities: [
            { time: '08:30', title: 'Doi Suthep Temple + Old City Temples Tour', type: 'activity' as const, tag: 'Private Transfers', duration: 'Duration: 4 hrs' },
            { time: '14:00', title: 'Thai Cooking Class — Half Day', type: 'activity' as const, tag: 'Private Transfers', duration: 'Duration: 3 hrs' },
            { title: 'Overnight stay at Chiang Mai Orchid Hotel', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Chiang Mai Orchid Hotel'
        },
        {
          day: 7, title: 'Chiang Mai to Phuket',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',
          description: 'Morning transfer to Chiang Mai airport for your flight to Phuket (own arrangement). Arrive in Phuket — Thailand\'s largest island and premier beach destination. Transfer to hotel in Patong. Evening free to explore Patong Beach and Bangla Road.',
          activities: [
            { title: 'Transfer to Chiang Mai Airport', type: 'transfer' as const, tag: 'Private Transfers' },
            { title: 'Flight Chiang Mai to Phuket (own arrangement)', type: 'activity' as const, tag: 'Own Arrangement' },
            { title: 'Private Transfer from Phuket Airport to Hotel', type: 'transfer' as const, tag: 'Private Transfers' },
            { title: 'Overnight stay at Patong Beach Hotel', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Patong Beach Hotel'
        },
        {
          day: 8, title: 'Phi Phi Islands Tour',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',
          description: 'Full day speedboat tour to the stunning Phi Phi Islands — one of the most beautiful island groups in the world. Visit Maya Bay (made famous by the movie The Beach), Monkey Beach, Viking Cave, and enjoy snorkeling in crystal-clear turquoise waters.',
          activities: [
            { time: '08:00', title: 'Phi Phi Islands Full Day Speedboat Tour — Maya Bay, Monkey Beach, Snorkeling', type: 'activity' as const, tag: 'Shared Transfers', duration: 'Starts at 8:00 am (Duration: 9 hrs)' },
            { title: 'Overnight stay at Patong Beach Hotel', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Included' as const, dinner: 'Not Included' as const,
          hotel: 'Patong Beach Hotel',
          notes: ['Lunch on the boat is included. Snorkeling equipment provided.']
        },
        {
          day: 9, title: 'James Bond Island + Phang Nga Bay',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',
          description: 'Full day tour to Phang Nga Bay — a stunning bay with dramatic limestone karsts rising from emerald-green water. Visit the iconic James Bond Island (Ko Tapu) made famous by the 1974 film The Man with the Golden Gun. Explore sea caves by kayak and visit a floating Muslim village.',
          activities: [
            { time: '08:00', title: 'James Bond Island + Phang Nga Bay Tour by Speedboat', type: 'activity' as const, tag: 'Shared Transfers', duration: 'Starts at 8:00 am (Duration: 9 hrs)' },
            { title: 'Overnight stay at Patong Beach Hotel', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Included' as const, dinner: 'Not Included' as const,
          hotel: 'Patong Beach Hotel'
        },
        {
          day: 10, title: 'Phuket City Tour + Patong Beach',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',
          description: 'Morning Phuket city tour — visit the Big Buddha (45-metre white marble statue), Wat Chalong temple, Phuket Old Town with its Sino-Portuguese architecture, and Promthep Cape for panoramic views. Afternoon free at Patong Beach.',
          activities: [
            { time: '09:00', title: 'Phuket City Tour — Big Buddha, Wat Chalong, Old Town, Promthep Cape', type: 'activity' as const, tag: 'Private Transfers', duration: 'Duration: 5 hrs' },
            { title: 'Overnight stay at Patong Beach Hotel', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Patong Beach Hotel'
        },
        {
          day: 11, title: 'Leisure Day at Phuket',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',
          description: 'Full day free for leisure. Optional activities include Tiger Kingdom, ATV adventure, Thai massage, or simply relaxing on Patong Beach. Evening, enjoy a traditional Thai dinner at a local restaurant.',
          activities: [
            { title: 'Day free for leisure — optional Tiger Kingdom, ATV, Thai massage', type: 'activity' as const, tag: 'Optional' },
            { title: 'Overnight stay at Patong Beach Hotel', type: 'hotel' as const }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: 'Patong Beach Hotel'
        },
        {
          day: 12, title: 'Departure from Phuket',
          image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg',
          description: 'After breakfast, check out from the hotel. Transfer to Phuket International Airport for your return flight to India. Carry back beautiful memories of the Land of Smiles.',
          activities: [
            { title: 'Private Transfer from Hotel to Phuket Airport', type: 'transfer' as const, tag: 'Private Transfers' }
          ],
          breakfast: 'Included at Hotel' as const, lunch: 'Not Included' as const, dinner: 'Not Included' as const,
          hotel: ''
        }
      ],
      inclusions: [
        '3 Nights Bangkok at Ibis Bangkok Riverside (twin sharing, breakfast)',
        '3 Nights Chiang Mai at Chiang Mai Orchid Hotel (twin sharing, breakfast)',
        '4 Nights Phuket at Patong Beach Hotel (twin sharing, breakfast)',
        'All private airport transfers in Bangkok, Chiang Mai, and Phuket',
        'Bangkok City Tour — Grand Palace, Wat Phra Kaew, Wat Pho, Wat Arun',
        'Damnoen Saduak Floating Market Tour',
        'Safari World & Marine Park entry',
        'Elephant Sanctuary Half Day Tour',
        'Doi Inthanon National Park Tour',
        'Doi Suthep Temple Tour',
        'Thai Cooking Class',
        'Phi Phi Islands Full Day Speedboat Tour (lunch included)',
        'James Bond Island + Phang Nga Bay Tour (lunch included)',
        'Phuket City Tour',
        'All applicable taxes'
      ],
      exclusions: [
        'International airfare (India to Bangkok and Phuket to India)',
        'Inter-city flights (Bangkok–Chiang Mai, Chiang Mai–Phuket) — own arrangement',
        'Thailand Tourist Visa (e-Visa available online)',
        'Lunch and dinner (except where mentioned)',
        'Personal expenses',
        'Travel insurance',
        'Tiger Kingdom, ATV, and other optional activities',
        'Any services not mentioned in inclusions'
      ],
      terms: [
        'Booking amount of 25% required to confirm booking.',
        'Full payment must be made 30 days prior to departure.',
        'Cancellation: 30+ days — 10%; 15-29 days — 25%; 7-14 days — 50%; Less than 7 days — 100%.',
        'Inter-city flights must be booked by the traveler independently.',
        'All disputes subject to Pune jurisdiction only.'
      ],
      importantNotes: [
        'The timings shown for various tours and transfers is indicative and may change depending on the situation at the destination at the time of travel. Any change in timing will be communicated in the final itinerary before travel and communicated on the trip support group.',
        'Inter-city flights (Bangkok–Chiang Mai and Chiang Mai–Phuket) are NOT included. Recommended airlines: AirAsia, Thai Lion Air, Nok Air.',
        'Elephant Sanctuary is ethical — no riding. Interaction includes feeding and bathing only.',
        'Thailand e-Visa is available online for Indian passport holders. Apply at least 7 days before travel.',
        'Phi Phi Islands tour may be cancelled due to bad weather — alternative tour will be provided.',
        'Tiger Kingdom is optional and not included in the package price.'
      ]
    },

  // THAILAND PACKAGE 1
  getByTitle(title: string): PackageDetail | undefined {
    return this.details.find(d =>
      d.title.toLowerCase().includes(title.toLowerCase()) ||
      title.toLowerCase().includes(d.destination.toLowerCase())
    );
  }

  getByDestination(dest: string): PackageDetail[] {
    return this.details.filter(d => d.destination.toLowerCase() === dest.toLowerCase());
  }

  getAll(): PackageDetail[] {
    return this.details;
  }
}

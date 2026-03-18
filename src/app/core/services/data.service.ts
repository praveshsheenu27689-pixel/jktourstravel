import { Injectable } from '@angular/core';

export interface Destination { id: number; name: string; image: string; }
export interface Package { id: number; title: string; image: string; itinerary: string; price: number; category: string; badge?: string; }
export interface Experience { icon: string; label: string; }
export interface Testimonial { name: string; location: string; text: string; }

@Injectable({ providedIn: 'root' })
export class DataService {

  companyName = 'J K Tours And Travels, Pune';
  logo = 'https://cdn.yourholiday.me/static/dynimg/partner/37/300x150/3562268-3562267_j-k-new-logo.jpg';
  heroImage = 'https://cdn.yourholiday.me/static/dynimg/itinerary/85/1200x900/2191615-2191614_adobestock_223056954.jpg';
  customizeImage = 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/1200x900/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg';

  typewriterWords = [
    'Dubai starting Rs. 39,999',
    'Thailand starting Rs. 19,999',
    'Singapore starting Rs. 44,999',
    'Europe starting Rs. 1,19,999',
    'Australia starting Rs. 1,29,999',
    'Goa starting Rs. 9,999',
    'Kerala starting Rs. 14,999'
  ];

  destinations: Destination[] = [
    { id: 1,  name: 'Andamans',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/33/600x300/2210456-2210455_andaman.jpg' },
    { id: 2,  name: 'Australia',   image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg' },
    { id: 3,  name: 'Bali',        image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg' },
    { id: 4,  name: 'Cambodia',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/60/600x300/3160621-3160620_cambodia.jpg' },
    { id: 5,  name: 'Dubai',       image: 'https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg' },
    { id: 6,  name: 'Europe',      image: 'https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg' },
    { id: 7,  name: 'Georgia',     image: 'https://cdn.yourholiday.me/static/dynimg/destination/7/600x300/2185866-2185865_georgia-main-image.jpg' },
    { id: 8,  name: 'Greece',      image: 'https://cdn.yourholiday.me/static/dynimg/destination/5/600x300/2750959-2750958_greece.jpg' },
    { id: 9,  name: 'Italy',       image: 'https://cdn.yourholiday.me/static/dynimg/destination/79/600x300/2750961-2750960_italy.jpg' },
    { id: 10, name: 'Japan',       image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg' },
    { id: 11, name: 'Kazakhstan',  image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2750322-2750321_kazakhstan.jpg' },
    { id: 12, name: 'Malaysia',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg' },
    { id: 13, name: 'Maldives',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg' },
    { id: 14, name: 'Mauritius',   image: 'https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg' },
    { id: 15, name: 'New Zealand', image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2190141-2190140_rock-formations-on-wharariki-beach-new-zealand--1.jpg' },
    { id: 16, name: 'Portugal',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/20/600x300/2750340-2750339_portugal.jpg' },
    { id: 17, name: 'Russia',      image: 'https://cdn.yourholiday.me/static/dynimg/destination/89/600x300/2750969-2750968_russia.jpg' },
    { id: 18, name: 'Seychelles',  image: 'https://cdn.yourholiday.me/static/dynimg/destination/3/600x300/2750342-2750341_seychelles.jpg' },
    { id: 19, name: 'Singapore',   image: 'https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg' },
    { id: 20, name: 'Spain',       image: 'https://cdn.yourholiday.me/static/dynimg/destination/56/600x300/2750344-2750343_spain.jpg' },
    { id: 21, name: 'Sri Lanka',   image: 'https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg' },
    { id: 22, name: 'Switzerland', image: 'https://cdn.yourholiday.me/static/dynimg/destination/74/600x300/2190187-2190186_zurich-switzerland-view-of-the-historic-city-center-with-famous-fraumunster-church-5.jpg' },
    { id: 23, name: 'Thailand',    image: 'https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg' },
    { id: 24, name: 'Turkey',      image: 'https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg' },
    { id: 25, name: 'Vietnam',     image: 'https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg' }
  ];

  // Europe Summer 2024 Fixed Departure — exact prices from live site
  europePackages: Package[] = [
    { id: 1, title: 'Grand Tour of Europe with All Meals',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/55/600x300/2998781-2998780_london-tourism-title.jpg',
      itinerary: 'London 3N, Paris 3N, Rotterdam 1N, ...', price: 404583, category: 'Europe', badge: 'Fixed Departure' },
    { id: 2, title: 'Wonders of Europe',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/38/600x300/2990875-2990874_swiss.jpg',
      itinerary: 'Paris 3N, Rotterdam 1N, Cologne 1N, ...', price: 322573, category: 'Europe' },
    { id: 3, title: 'Glimpses of Europe',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/43/600x300/2993319-2993318_europe.jpg',
      itinerary: 'Paris 3N, Eindhoven 1N, Cologne 1N, ...', price: 229628, category: 'Europe' },
    { id: 4, title: 'UK and Scotland (Summer 2024)',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/15/600x300/2995351-2995350_uk_tourism.jpg',
      itinerary: 'London 2N, Birmingham 1N, Glasgow 3N, ...', price: 316471, category: 'Europe' }
  ];

  // Andaman Fixed Departure — exact prices from live site
  andamanPackages: Package[] = [
    { id: 5, title: 'Andaman Island Delight With Flight',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032141-3032140_hero-anadaman-19-1-min.jpg',
      itinerary: 'Port Blair 1N, Havelock-Island 2N, ...', price: 28264, category: 'Andaman', badge: 'Fixed Departure' },
    { id: 6, title: 'Island Escape With Complimentary Photoshoot',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032082-3032081_hero-anadaman-21-min.jpg',
      itinerary: 'Port Blair 1N, Havelock-Island 2N, ...', price: 16836, category: 'Andaman' },
    { id: 7, title: 'Andaman Honeymoon Escapes',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/7/600x300/3177247-3177246_honeymoon.jpg',
      itinerary: 'Port Blair 1N, Havelock-Island 2N, ...', price: 25509, category: 'Andaman' },
    { id: 8, title: 'Best of Andaman',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/56/600x300/3115245-3115244_andaman-oickture.jpg',
      itinerary: 'Port Blair 1N, Havelock-Island 2N, ...', price: 27755, category: 'Andaman' }
  ];

  // Recommended Domestic Experiences — exact prices from live site
  domesticPackages: Package[] = [
    { id: 9,  title: 'Stunning Kerala - Budget',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg',
      itinerary: 'Munnar 2N, Thekkady 1N, Kumarakom 1N, ...', price: 16562, category: 'Domestic' },
    { id: 10, title: 'Luxury in South India',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg',
      itinerary: 'Bangalore 2N, Mysore 2N, Ooty 2N, ...', price: 104322, category: 'Domestic' },
    { id: 11, title: 'MAGICAL ANDAMAN',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/2086330-2086329_portblair.jpg',
      itinerary: 'Port Blair 2N, Havelock-Island 1N, ...', price: 18515, category: 'Domestic' },
    { id: 12, title: 'EXOTIC ANDAMAN',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/71/600x300/2228849-2228848_andaman-3.jpg',
      itinerary: 'Port Blair 1N, Havelock-Island 2N, ...', price: 18314, category: 'Domestic' },
    { id: 13, title: "Classic Kerala: God's own Country",
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/17/600x300/2182118-2182117_classic-kerala-gods-own-country.jpg',
      itinerary: 'Kochi 2N, Munnar 2N, Thekkady 1N, ...', price: 58111, category: 'Domestic' },
    { id: 14, title: 'Goa 4 Nights 3 Star',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg',
      itinerary: 'Goa 4N', price: 10272, category: 'Domestic' },
    { id: 15, title: 'Magnificent Tour to Himachal',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg',
      itinerary: 'Shimla 2N, Manali 3N, Dharamshala 1N, ...', price: 21115, category: 'Domestic' },
    { id: 16, title: 'Amazing Himachal with Chandigarh',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg',
      itinerary: 'Shimla 2N, Manali 3N, Dharamshala 1N, ...', price: 27257, category: 'Domestic' }
  ];

  // Recommended International Experiences — exact prices from live site
  internationalPackages: Package[] = [
    { id: 17, title: 'Classic Thailand',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg',
      itinerary: 'Bangkok 3N, Chiang Mai 4N, Phuket 4N, ...', price: 66071, category: 'International' },
    { id: 18, title: 'Romantic Singapore and Bali',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2210757-2210756_sin-pack-1.jpg',
      itinerary: 'Singapore 3N, Bali 2N, Bali 2N', price: 47854, category: 'International' },
    { id: 19, title: 'Fully Loaded Singapore Malaysia',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/20/600x300/2211659-2211658_sing-pac-1.jpg',
      itinerary: 'Singapore 4N, Kuala Lumpur 3N', price: 75531, category: 'International' },
    { id: 20, title: 'Ultimate Singapore Experience',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2211669-2211668_singapore-4.jpg',
      itinerary: 'Singapore 5N', price: 61516, category: 'International' },
    { id: 21, title: 'Fabulous Hong Kong Macau',
      image: 'https://cdn.yourholiday.me/static/dynimg/destination/51/600x300/2082244-2082243_venetian.jpg',
      itinerary: 'Macau 2N, Hong Kong 3N', price: 54295, category: 'International' },
    { id: 22, title: 'Highlights of Thailand',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/2/600x300/2210731-2210730_thailand-p2.jpg',
      itinerary: 'Bangkok 2N, Chiang Mai 3N, Koh Samui ...', price: 87987, category: 'International' },
    { id: 23, title: 'Dubai on a Budget',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg',
      itinerary: 'Dubai 4N', price: 28536, category: 'International' },
    { id: 24, title: 'Trip to Dubai',
      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/59/600x300/2211591-2211590_dubai-pac-4.jpg',
      itinerary: 'Dubai 5N', price: 40397, category: 'International' }
  ];

  // Experiences — exact from live site
  experiences: Experience[] = [
    { icon: 'fas fa-umbrella-beach', label: 'Beach' },
    { icon: 'fas fa-users',          label: 'Family' },
    { icon: 'fas fa-gem',            label: 'Luxury' },
    { icon: 'fas fa-landmark',       label: 'Culture and Heritage' },
    { icon: 'fas fa-infinity',       label: 'All Inclusive Holidays' },
    { icon: 'fas fa-paw',            label: 'Cultral Safaris' },
    { icon: 'fas fa-heart',          label: 'Honeymoon' },
    { icon: 'fas fa-star',           label: 'Experiences' }
  ];

  // Testimonials — exact text from live site
  testimonials: Testimonial[] = [
    {
      name: 'Anthony', location: 'Goa',
      text: 'No words! Thanks for making my dream come true. But I want to say, Sabse pyaara Hindustan'
    },
    {
      name: 'Sagar', location: 'Belgaum',
      text: 'Never could I have imagined the wonderful experiences that awaited me before we began our trip. It was a wonderful experience overall'
    },
    {
      name: 'Ramya John', location: 'Rajasthan',
      text: 'Thank you so much for a well-organized trip. We had a wonderful time. The weather was awesome, the hotels were nice, thank you for everything!'
    },
    {
      name: 'Priya Sharma', location: 'Pune',
      text: 'J K Tours made our Europe trip absolutely magical. Every detail was perfectly planned — from hotels to sightseeing. Highly recommend to everyone!'
    },
    {
      name: 'Rahul Mehta', location: 'Mumbai',
      text: 'Booked Dubai package for our family. The team was very professional and helpful throughout. Best travel agency in Pune without a doubt!'
    }
  ];

  // Mega menu experiences — exact from live site
  megaExperiences = [
    { label: 'Beach',                image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/72/600x450/2185294-2185293_pexels-photo-1450353.jpg' },
    { label: 'Family',               image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/23/600x450/2185310-2185309_pexels-photo-4205505.jpg' },
    { label: 'Luxury',               image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x450/2185274-2185273_pexels-photo-279574.jpg' },
    { label: 'Culture and Heritage', image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg' },
    { label: 'All Inclusive',        image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/62/600x450/2186114-2186113_pexels-photo-3184183.jpg' },
    { label: 'Cultral Safaris',      image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/86/600x450/2186480-2186479_kenya-6.jpg' },
    { label: 'Honeymoon',            image: 'https://cdn.yourholiday.me/static/dynimg/destination/54/1200x900/2188294-2188293_.jpg' },
    { label: 'Experiences',          image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/45/1200x900/3192010-3192009_aaron-sebastian-bfgeyps0znk-unsplash.jpg' }
  ];

  // Footer experiences — exact from live site
  footerExperiences = [
    'Beach', 'Family', 'Luxury', 'Culture and Heritage',
    'All Inclusive Holidays', 'Cultral Safaris', 'Honeymoon',
    'All Inclusive', 'All Inclusive', 'Luxury', 'Beach', 'Family', 'Experiences'
  ];
}

/**
 * Single source of truth for the invitation.
 * 1st Marriage Anniversary celebration of Anupma Gupta & Pushkal Jaiswal.
 */

export const invitation = {
  couple: {
    bride: "Anupma Gupta",
    brideShort: "Anupma",
    groom: "Pushkal Jaiswal",
    groomShort: "Pushkal",
    hashtag: "#AnupmaAndPushkal",
    parents: {
      father: "Chandra Deo Jaiswal",
      mother: "Shashi Lata Jaiswal",
    },
    brother: "Pranjal Jaiswal",
  },
  invite: {
    shlok: "ॐ नमः पार्वती पतये हर हर महादेव",
    tagline: "Bound by प्यार • Blessed with साथ",
    kicker: "Mrs. Shashi Lata Jaiswal & Mr. Chandra Deo Jaiswal",
    line: "cordially invite you to celebrate the 1st Marriage Anniversary of their beloved",
    occasion: "1st Marriage Anniversary Celebration",
  },
  event: {
    title: "1st Marriage Anniversary of Anupma & Pushkal",
    /** ISO with timezone offset — India Standard Time */
    startsAt: "2026-11-28T19:00:00+05:30",
    endsAt: "2026-11-28T23:30:00+05:30",
    dateLabel: "28 . 11 . 2026",
    dayLabel: "Saturday",
    timeLabel: "07:00 in the evening",
    dressCode: "Traditional / Festive Indian Attire",
    note: "Dinner, music, and celebrations to follow",
  },
  venue: {
    name: "Sky Hilton Banquet and Restaurant",
    address:
      "5th Floor, Bhargava road, VIP Rd, Sector B, Bargawan, LDA Colony, Lucknow, Uttar Pradesh 226012",
    mapsQuery:
      "Sky Hilton Banquet and Restaurant, 5th Floor, Bhargava road, VIP Rd, Sector B, Bargawan, LDA Colony, Lucknow, Uttar Pradesh 226012",
    url: "https://maps.app.goo.gl/koSj9mkvguHVybNNA?g_st=ac",
    lat: 26.7915,
    lng: 80.8974,
  },
  story: [
    {
      year: "The Beginning",
      title: "The Sacred Vows",
      text: "Two souls united in love and companionship, embarking on a lifelong journey surrounded by the blessings of loved ones.",
      image: "story-1",
    },
    {
      year: "Together",
      title: "Bound by प्यार • Blessed with साथ",
      text: "A year of shared laughter, cherished memories, deep understanding, and growing together through every season of life.",
      image: "story-2",
    },
    {
      year: "Celebration",
      title: "1st Anniversary Milestone",
      text: "Rejoicing in one beautiful year of marriage and celebrating this joyous milestone with our dearest family and friends.",
      image: "story-3",
    },
  ],
  blessing: {
    shlok: "ॐ नमः पार्वती पतये हर हर महादेव",
    line: "May divine blessings always illuminate your path with boundless love, peace, and eternal togetherness.",
    translation:
      "Bound by प्यार, Blessed with साथ — Celebrating our 1st year of love, companionship, and cherished togetherness.",
    source: "With warm blessings from Chandra Deo Jaiswal & Shashi Lata Jaiswal",
  },
  footer: {
    families:
      "With best compliments & warm wishes from Chandra Deo Jaiswal, Shashi Lata Jaiswal & Pranjal Jaiswal",
    contacts: [
      {
        name: "Pushkal Jaiswal",
        phone: "+91 7272898912",
        relation: "Groom",
      },
      {
        name: "Pranjal Jaiswal",
        phone: "+91 7272898913",
        relation: "Brother",
      },
    ],
  },
  music: {
    title: "Celebration Melody",
    url: "/music.mp3",
    autoPlay: true,
  },
  meta: {
    title: "Anupma & Pushkal — 1st Marriage Anniversary Celebration",
    description:
      "Mrs. Shashi Lata Jaiswal & Mr. Chandra Deo Jaiswal cordially invite you to celebrate the 1st Marriage Anniversary of Anupma & Pushkal at Sky Hilton Banquet and Restaurant, Lucknow.",
    url: "https://maps.app.goo.gl/koSj9mkvguHVybNNA?g_st=ac",
    image: "https://media.invitestory.in/sage-parchment/og-image.jpg",
    siteName: "Anupma & Pushkal 1st Anniversary",
  },
} as const;

export type Invitation = typeof invitation;

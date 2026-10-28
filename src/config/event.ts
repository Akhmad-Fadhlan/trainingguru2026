export interface ContactPerson {
  name: string;
  phone: string;
  phoneFormatted: string;
  waLink: string;
  telLink: string;
}

export interface EventConfig {
  name: string;
  theme: string;
  tagline: string;
  dateRange: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string; // ISO 8601 with offset
  registrationDeadlineFormatted: string;
  locationName: string;
  locationAddress: string;
  googleMapsQueryUrl: string;
  googleMapsEmbedUrl: string;
  registrationFee: string;
  payment: {
    bankName: string;
    accountNumber: string;
    accountName: string;
  };
  contacts: ContactPerson[];
  registrationUrl: string;
  logoSrc: string;
  logoAlt: string;
  posterImage: string;
  posterAlt: string;
  timeZone: string;
}

export const eventConfig: EventConfig = {
  name: "Training Guru Nasional 2026",
  theme: "Empowering Educators Through Technology, Innovation & AI",
  tagline: "Upgrade Your Skills. Inspire the Next Generation.",
  dateRange: "23–25 Desember 2026",
  startDate: "2026-12-23",
  endDate: "2026-12-25",
  registrationDeadline: "2026-12-02T23:59:59+07:00",
  registrationDeadlineFormatted: "2 Desember 2026 pukul 23.59.59 WIB",
  locationName: "SMK IDN Boarding School Jonggol",
  locationAddress: "Jalan Jonggol, Dayeuh, Sukanegara, Jawa Barat, Indonesia",
  googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=SMK+IDN+Boarding+School+Jonggol",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=SMK+IDN+Boarding+School+Jonggol&hl=id&z=15&output=embed",
  registrationFee: "Rp 300.000",
  payment: {
    bankName: "Bank Syariah Indonesia (BSI)",
    accountNumber: "5001006640",
    accountName: "Yayasan IDN",
  },
  contacts: [
    {
      name: "Mr. Debs",
      phone: "08990860870",
      phoneFormatted: "0899-0860-870",
      waLink: "https://wa.me/628990860870",
      telLink: "tel:08990860870",
    },
    {
      name: "Mr. Rayhan",
      phone: "082110970434",
      phoneFormatted: "0821-1097-0434",
      waLink: "https://wa.me/6282110970434",
      telLink: "tel:082110970434",
    },
  ],
  registrationUrl: "https://bit.ly/tgnasional26",
  logoSrc: "/images/idn-logo.png", // Menggunakan file logo resmi yang diunggah
  logoAlt: "Logo IDN Boarding School",
  posterImage: "/images/poster-resmi.jpg",
  posterAlt: "Poster resmi Training Guru Nasional 2026",
  timeZone: "Asia/Jakarta",
};

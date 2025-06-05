const config = {
  data: {
    title: "Pernikahan Raden & Maulidia",
    description:
      "Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini.",
    groomName: "Raden",
    brideName: "Maulidia",
    parentGroom: "Bapak Groom & Ibu Groom",
    parentBride: "Bapak Bride & Ibu Bride",
    date: "2025-06-08",
    maps_url: "https://maps.app.goo.gl/a7PhQkwW39oAJxAf9",
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.789026601338!2d106.81318531029387!3d-6.6213124933452185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5fdc85c009b%3A0x3f1d828e147c2e5c!2sKomplek%20Brimob%20Sukasari!5e1!3m2!1sid!2sid!4v1749096951264!5m2!1sid!2sid",
    time: "10:00 - 17:00 WIB",
    location: "komplek brimop suksari",
    address: "Lawanggintung, Kec. Bogor Selatan, Kota Bogor",
    ogImage: "/images/og-image.jpg",
    favicon: "/images/favicon.ico",
    agenda: [
      {
        title: "Resepsi & Akad Nikah",
        date: "2025-06-08",
        startTime: "10:00",
        endTime: "17:00",
        location: "komplek brimop suksari",
        address: "Lawanggintung, Kec. Bogor Selatan, Kota Bogor",
      },
    ],
    audio: {
      src: "/audio/fulfilling-humming.mp3",
      title: "Fulfilling Humming",
      autoplay: true,
      loop: true,
    },
    banks: [
      {
        bank: "Bank Central Asia (BCA)",
        accountNumber: "5735378624",
        accountName: "Raden Muhamad Rujilka Muhararan",
      },
      {
        bank: "Bank Rakyat Indonesia (BRI)",
        accountNumber: "038701062901503",
        accountName: "Maulidia Arachman",
      },
    ],
  },
  firebaseConfig: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? "",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? "",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? "",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "",
    appId: import.meta.env.VITE_FIREBASE_APP_ID ?? "",
  },
};

export default config;

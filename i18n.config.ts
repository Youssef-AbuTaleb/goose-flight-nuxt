export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      header: {
        links: { home: "Home", promo: "Promo", booking: "My Booking" },
        signIn: "Sign In",
      },
      hero: "Discover Our Paradise Worlds, Travel Anywhere Now!",
      bookingForm: {
        oneWay: "One Way",
        roundTrip: "Round Trip",
        from: "From",
        to: "To",
        fromPlaceholder: "Flight from?",
        toPlaceholder: "Where to?",
        depart: "Depart",
        return: "Return",
        class: "Cabin Class & Travelers",
        classOptions: {
          economyOne: "1 adult, Economy",
          classTwo: "2 adult, Class",
          economyTwo: "2 adult, Economy",
        },
      },
      popularDest: {
        title: "Popular Destinations",
        subTitle: "Vacations to make your experience enjoyable in Indonesia!",
        destinations: {
          destOne: {
            location: "Manggarai Barat",
            title: "Flores Road Trip 3D2N",
            duration: "3 Days",
            price: "$375",
          },
          destTwo: {
            location: "Bogor",
            title: "Forrester Glamping Co Bogor",
            duration: "1 Days",
            price: "$375",
          },
          destThree: {
            location: "Jakarta",
            title: "Paket Tiket Pesawat Jakarta Bali",
            duration: "",
            price: "$375",
          },
          destFour: {
            location: "Kota Semarang",
            title: "Desa Wisata Kandri",
            duration: "14 Days",
            price: "$375",
          },
        },
      },
      footer: {
        links: {
          about: {
            title: "About",
            about: "About GooseFlight",
            how: "How it works",
            blog: "Blog",
            forum: "Forum",
          },
          support: {
            title: "Support",
            help: "Help Center",
            contactUs: "Contact us",
            terms: "Terms of service",
            safety: "Trust and safetty",
            privacyPolicy: "Privacy policy",
            accessibility: "Accessibility",
          },
          getApp: {
            title: "Get the app",
            android: "Tripma for Android",
            ios: "Tripma for IOS",
            mobileSite: "Mobile site",
          },
        },
      },
    },
    ar: {
      header: {
        links: { home: "الرئيسية", promo: "العروض", booking: "حجزي" },
        signIn: "تسجيل الدخول",
      },
      hero: "!استكشف وجهاتنا الخيالية وابدأ رحلتك الآن",
      bookingForm: {
        oneWay: "ذهاب فقط",
        roundTrip: "ذهاب وعودة",
        from: "من",
        to: "إلى",
        fromPlaceholder: "من أين؟",
        toPlaceholder: "إلى أين؟",
        depart: "المغادرة",
        return: "العودة",
        class: "درجة المقصورة والمسافرون",
        classOptions: {
          economyOne: "بالغ واحد، الدرجة الاقتصادية",
          classTwo: "شخصان بالغان، الدرجة",
          economyTwo: "شخصان بالغان، الدرجة الاقتصادية",
        },
      },
      popularDest: {
        title: "الوجهات الشهيرة",
        subTitle: "إجازات تجعل تجربتك ممتعة في إندونيسيا!",
        destinations: {
          destOne: {
            location: "مانغاراي بارات",
            title: "مغامرة في الطبيعة",
            duration: "3 أيام",
            price: "$375",
          },
          destTwo: {
            location: "بوجور",
            title: "يوم واحد في الطبيعة",
            duration: "1 يوم",
            price: "$375",
          },
          destThree: {
            location: "جاكرتا",
            title: "استكشاف العاصمة",
            duration: "",
            price: "$375",
          },
          destFour: {
            location: "كوتا سيمارانج",
            title: "رحلة طويلة لاكتشاف الثقافة",
            duration: "14 يومًا",
            price: "$375",
          },
        },
      },
      footer: {
        links: {
          about: {
            title: "معلومات",
            about: "عن GooseFlight",
            how: "كيف تعمل",
            blog: "المدونة",
            forum: "المنتدى",
          },
          support: {
            title: "الدعم",
            help: "مركز المساعدة",
            contactUs: "اتصل بنا",
            terms: "شروط الخدمة",
            safety: "الثقة والأمان",
            privacyPolicy: "سياسة الخصوصية",
            accessibility: "سهولة الوصول",
          },
          getApp: {
            title: "احصل على التطبيق",
            android: "Tripma لنظام Android",
            ios: "Tripma لنظام IOS",
            mobileSite: "الموقع على الهاتف",
          },
        },
      },
    },
  },
}));

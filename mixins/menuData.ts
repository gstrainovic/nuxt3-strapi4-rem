export default {
  data() {
    return {
      menuData: [
        {
          id: 1,
          hasDropdown: true, // needed for mobile menu
          title: "Services",
          link: "/service-details",
        },
        {
          id: 2,
          hasDropdown: true, // needed for mobile menu
          title: "Events",
          link: "event-details",
        },
        {
          id: 3,
          hasDropdown: true, // needed for mobile menu
          title: "Blog",
          link: "blog-details",
        },
        {
          id: 4,
          hasDropdown: true, // needed for mobile menu
          title: "Company",
          link: "/company",
        },
      ],
    };
  },
};

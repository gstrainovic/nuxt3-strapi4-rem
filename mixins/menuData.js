export default {
  data() {
    return {
      menuData: [
        {
          id: 1,
          title: "Services",
          // megaMenu: true,
          link: "service-details",
          // mega_menus: [
          //   {
          //     title: "Widget 1",
          //     link: "#",
          //     submenus: [
          //       { title: "Accordion", link: "/elements-accordion" }
          //     ],
          //   },
          //   {
          //     title: "Widget 2",
          //     link: "#",
          //     submenus: [
          //       { title: "Contact Form", link: "/elements-form" }
          //     ],
          //   },
          //   {
          //     title: "Widget 3",
          //     link: "#",
          //     submenus: [
          //       { title: "Parallax", link: "/elements-parallax" }
          //     ],
          //   },
          //   {
          //     title: "Widget 4",
          //     link: "#",
          //     submenus: [
          //       { title: "Tabs", link: "/elements-tab" }
          //     ],
          //   },
          // ],
        },
        {
          id: 2,
          // hasDropdown: true,
          title: "Events",
          link: "event-details",
          // submenus: [
          //   { title: "Main Home", link: "/" }
          // ],
        },
        {
          id: 3,
          // hasDropdown: true,
          title: "Blog",
          link: "blog-details",
          // submenus: [
          //   { title: "Main Home", link: "/" }
          // ],
        },
        {
          id: 4,
          // hasDropdown: false,
          title: "Company",
          link: "/company",
          // submenus: [
          //   { title: "Contact Agency", link: "/contact" },
          //   { title: "Contact: Classic", link: "/contact-2" },
          // ],
        },
      ],
    };
  },
};

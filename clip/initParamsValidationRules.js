export default {
  event: {
    label: "Event",
    type: "object",
    props: {
      logo: {
        label: "Logo",
        type: "string", //small image icon
      },
      banner: {
        label: "Banner",
        type: "string", //big banner image
      },
      primaryColor: {
        label: "Primary Color",
        type: "color",
      },
      secondaryColor: {
        label: "Secondary Color",
        type: "color",
      },
      fontColor:{
        label: "Font Color",
        type: "color",
      },
      name: {
        label: "Name",
        type: "string",
      },
      location: {
        label: "Title",
        type: "string",
      },
      startDate: {
        label: "Start Date",
        type: "string",
      },
      endDate: {
        label: "End Date",
        type: "string",
      },
      supportEmail: {
        label: "Support Email",
        type: "string",
      },
      supportPhone: {
        label: "Support Phone",
        type: "string",
      },
      otherInfo: {
        label: "Other Info",
        type: "string",
      },
    },
  },
  sponsors: {
    label: "Sponsors",
    type: "array",
    optional: true,
    items: {
      label: "Single Sponsor",
      type: "string", //image
    },
  },
  sessions: {
    label: "Sessions",
    type: "array",
    optional: true,
    items: {
      label: "Single Session",
      type: "object",
      props: {
        title: {
          label: "Session Title",
          type: "string",
        },
        startDate: {
          label: "Start Date",
          type: "string",
        },
        endDate: {
          label: "End Date",
          type: "string",
        },
      },
    },
  },
  speakers: {
    label: "Speakers",
    type: "array",
    optional: true,
    items: {
      label: "Single Speaker",
      type: "object",
      props: {
        thumbnail: {
          label: "Thumbnail",
          type: "string",
        },
        name: {
          label: "First Name",
          type: "string",
        },
        lastName: {
          label: "Last Name",
          type: "string",
        },
      },
    },
  },
};
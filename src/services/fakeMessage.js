const messages = [
    {
        _id : "1234561a",
        date:"01st Jan 2022, 1.12 pm",
        direction: "incoming",
        from: "user1",
        to: "RiversEdge,Kandy",
        status: "received",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a felis a velit ullamcorper dignissim vel sagittis odio. Curabitur velit mi, aliquet ut urna nec, ultrices aliquet neque. Proin imperdiet dignissim quam nec aliquam. Nulla nisl tellus, mollis quis urna et, vulputate semper odio. Proin ipsum ligula, rhoncus in vestibulum vel, ullamcorper at lacus. Ut porttitor at nulla ut auctor. Nam rutrum in est ut accumsan. Praesent vitae urna sapien. Nam laoreet non dolor vel malesuada. Nam eget lorem a erat scelerisque efficitur. Donec at ultricies mi. Integer vehicula lectus in tempus sagittis. Fusce viverra condimentum elit quis hendrerit. "
    },
    {
        _id : "1234561b",
        date:"21st Jan 2022, 1.12 pm",
        direction: "incoming",
        from: "user3",
        to: "RiversEdge,Jaffna",
        status: "received",
        // actions: ""
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a felis a velit ullamcorper dignissim vel sagittis odio. Curabitur velit mi, aliquet ut urna nec, ultrices aliquet neque. Proin imperdiet dignissim quam nec aliquam. Nulla nisl tellus, mollis quis urna et, vulputate semper odio. Proin ipsum ligula, rhoncus in vestibulum vel, ullamcorper at lacus. Ut porttitor at nulla ut auctor. Nam rutrum in est ut accumsan. Praesent vitae urna sapien. Nam laoreet non dolor vel malesuada. Nam eget lorem a erat scelerisque efficitur. Donec at ultricies mi. Integer vehicula lectus in tempus sagittis. Fusce viverra condimentum elit quis hendrerit. "

    },
    {
        _id : "1234561c",
        date:"31st Jan 2022, 1.12 pm",
        direction: "outgoing",
        from: "user1",
        to: "RiversEdge,Kandy",
        status: "delivered",
        // actions: ""
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a felis a velit ullamcorper dignissim vel sagittis odio. Curabitur velit mi, aliquet ut urna nec, ultrices aliquet neque. Proin imperdiet dignissim quam nec aliquam. Nulla nisl tellus, mollis quis urna et, vulputate semper odio. Proin ipsum ligula, rhoncus in vestibulum vel, ullamcorper at lacus. Ut porttitor at nulla ut auctor. Nam rutrum in est ut accumsan. Praesent vitae urna sapien. Nam laoreet non dolor vel malesuada. Nam eget lorem a erat scelerisque efficitur. Donec at ultricies mi. Integer vehicula lectus in tempus sagittis. Fusce viverra condimentum elit quis hendrerit. "

    },
    {
        _id : "1234561d",
        date:"21st Jan 2022, 1.12 pm",
        direction: "incoming",
        from: "user4",
        to: "RiversEdge,Kandy",
        status: "received",
        // actions: ""
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a felis a velit ullamcorper dignissim vel sagittis odio. Curabitur velit mi, aliquet ut urna nec, ultrices aliquet neque. Proin imperdiet dignissim quam nec aliquam. Nulla nisl tellus, mollis quis urna et, vulputate semper odio. Proin ipsum ligula, rhoncus in vestibulum vel, ullamcorper at lacus. Ut porttitor at nulla ut auctor. Nam rutrum in est ut accumsan. Praesent vitae urna sapien. Nam laoreet non dolor vel malesuada. Nam eget lorem a erat scelerisque efficitur. Donec at ultricies mi. Integer vehicula lectus in tempus sagittis. Fusce viverra condimentum elit quis hendrerit. "

    },
    {
        _id : "1234561e",
        date:"21st Jan 2022, 1.12 pm",
        direction: "incoming",
        from: "user5",
        to: "RiversEdge,Kandy",
        status: "received",
        // actions: ""
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a felis a velit ullamcorper dignissim vel sagittis odio. Curabitur velit mi, aliquet ut urna nec, ultrices aliquet neque. Proin imperdiet dignissim quam nec aliquam. Nulla nisl tellus, mollis quis urna et, vulputate semper odio. Proin ipsum ligula, rhoncus in vestibulum vel, ullamcorper at lacus. Ut porttitor at nulla ut auctor. Nam rutrum in est ut accumsan. Praesent vitae urna sapien. Nam laoreet non dolor vel malesuada. Nam eget lorem a erat scelerisque efficitur. Donec at ultricies mi. Integer vehicula lectus in tempus sagittis. Fusce viverra condimentum elit quis hendrerit. "

    },
    {
        _id : "1234561f",
        date:"21st Jan 2022, 1.12 pm",
        direction: "outgoing",
        from: "user6",
        to: "RiversEdge,Kandy",
        status: "delivered",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a felis a velit ullamcorper dignissim vel sagittis odio. Curabitur velit mi, aliquet ut urna nec, ultrices aliquet neque. Proin imperdiet dignissim quam nec aliquam. Nulla nisl tellus, mollis quis urna et, vulputate semper odio. Proin ipsum ligula, rhoncus in vestibulum vel, ullamcorper at lacus. Ut porttitor at nulla ut auctor. Nam rutrum in est ut accumsan. Praesent vitae urna sapien. Nam laoreet non dolor vel malesuada. Nam eget lorem a erat scelerisque efficitur. Donec at ultricies mi. Integer vehicula lectus in tempus sagittis. Fusce viverra condimentum elit quis hendrerit. "

        // actions: ""
    }
];

export function getMessages() {
    return messages;
}

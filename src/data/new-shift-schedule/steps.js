const steps = [
    {
        number: "01",
        title: "Go to the Time and Attendance Module",
        content: [
            "From the side navigation menu, click Time and Attendance."
        ]
    },
    {
        number: "02",
        title: "Open Shift & Location",
        content: [
            "Under Time and Attendance, select Shift & Location."
        ]
    },
    {
        number: "03",
        title: "Navigate to Shift Request",
        content: [
            "Click Shift Request from the available options."
        ]
    },
    {
        number: "04",
        title: "Create a New Shift Request",
        content: [
            "Click the Request New Shift button."
        ]
    },
    {
        number: "05",
        title: "Enable Multiple Shifts",
        content: [
            "In the request form, check or toggle Has Multiple Shift."
        ]
    },
    {
        number: "06",
        title: "Add First Shift",
        content: [
            "Set the details for Shift 1:"
        ],
        fields: [
            { label: "Day", desc: "Monday" },
            { label: "Time", desc: "6:00 AM – 10:00 AM" }
        ],
        action: "Click Save to save the first shift."
    },
    {
        number: "07",
        title: "Add Second Shift",
        content: [
            "Click Add again to create another shift.",
            "Set the details for Shift 2:"
        ],
        fields: [
            { label: "Day", desc: "Monday" },
            { label: "Time", desc: "2:00 PM – 5:00 PM" }
        ],
        action: "Click Save to save the second shift."
    },
    {
        number: "08",
        title: "Repeat for the Rest of the Week",
        content: [
            "Repeat the same two shifts (6:00 AM – 10:00 AM and 2:00 PM – 5:00 PM) for Tuesday to Sunday."
        ]
    },
    {
        number: "09",
        title: "Submit the Request",
        content: [
            "Review all your added shifts to ensure accuracy.",
            "Click Submit to finalize your shift request."
        ]
    }
];

export const keyNotes = [
    "Ensure all days have valid shifts before submitting.",
    "You can edit or cancel a submitted request if it’s not yet approved."
];
export default steps
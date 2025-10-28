// pluginData.js
export const pluginProcess = {
  functionName: "ShiftSchedulePlugin",
  file: "ShiftPlugin.cs",
  note: "This plugin is triggered after shift approval to update employee schedules.",
  processFlow: [
    {
      step: 1,
      title: "Fetch shift request",
      details: [
        "Retrieve the approved shift request record.",
        "Ensure the request status is 'Approved'."
      ],
    },
    {
      step: 2,
      title: "Validate overlaps",
      details: [
        "Check for any overlapping shifts within the requested date range.",
        "Mark overlapping shifts for update or disable."
      ],
    },
    {
      step: 3,
      title: "Create new shift record",
      details: [
        "Insert a new shift record based on the approved request.",
        "Assign it to the respective employee."
      ],
    },
    {
      step: 4,
      title: "Summary of Logic",
      table: [
        { action: "Check if request is Approved", result: "Only approved requests are processed" },
        { action: "Check existing shifts", result: "Identify overlaps" },
        { action: "Adjust overlapping shifts", result: "Update, disable, or split old shifts" },
        { action: "Create new shift", result: "Add new active shift for employee" },
        { action: "Copy stakeholders", result: "Automatically link account stakeholders" },
        { action: "Update request", result: "Clear or update status" },
        { action: "Handle multiple shifts", result: "Create and link additional shifts" }
      ]
    },
    {
      step: 5,
      title: "Example Scenario",
      example: {
        employee: "John Doe",
        oldShift: "Oct 1–Oct 15 (8AM–5PM)",
        newRequest: "Oct 10–Oct 20 (Approved)",
        pluginActions: [
          "Adjust old shift → Ends Oct 9",
          "Disable overlapping shifts within Oct 10–Oct 20",
          "Create new shift → Oct 10–Oct 20",
          "Create new stakeholder records",
          "Update shift request status"
        ]
      }
    }
  ],
  importantNote: {
    included: "Only approved shift requests are processed.",
    excluded: "Pending or rejected requests are ignored."
  }
};

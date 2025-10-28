export const apiPostData = {
    apiEndpoint: "/api/shifts/requests",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "x-functions-key": "mBubza_A_5SiY1JSud9bj-uh3Aqp1D4K_rW2BXhxoQ7zAzFu_2kNng=="
    },
    requestBody: {
        shiftRequests: [
            {
                requestedForId: "string (GUID)",
                requestedForName: "string",
                clientId: "string (GUID)",
                clientName: "string",
                requestedById: "string (GUID)",
                requestedByName: "string",
                shiftTemplateId: "string (GUID or null)",
                monShiftId: "string (GUID or null)",
                tueShiftId: "string (GUID or null)",
                wedShiftId: "string (GUID or null)",
                thuShiftId: "string (GUID or null)",
                friShiftId: "string (GUID or null)",
                satShiftId: "string (GUID or null)",
                sunShiftId: "string (GUID or null)",
                startDate: "date (ISO 8601)",
                endDate: "date (ISO 8601)",
                isFlexi: "boolean",
                isAssumedPresent: "boolean",
                isCustomShift: "boolean",
                flexiBuffer: "number (minutes)",
                workSetup: "number (enum value)",
                wfhDays: "array (list of enum values)",
                roleName: "string",
                hasMultipleShifts: "boolean",
                employeeShiftDetails: [
                    {
                        monShiftId: "string (GUID or null)",
                        tueShiftId: "string (GUID or null)",
                        wedShiftId: "string (GUID or null)",
                        thuShiftId: "string (GUID or null)",
                        friShiftId: "string (GUID or null)",
                        satShiftId: "string (GUID or null)",
                        sunShiftId: "string (GUID or null)",
                        shiftRequestId: "string (GUID or null)",
                        shiftSequence: "number",
                        name: "string"
                    }
                ]
            }
        ]
    },
    responseExample: {
        status: "success",
        message: "Shift request created successfully.",
        shiftRequestIds: [
            "bfa214a0-9e41-ea11-a812-000d3a07b262",
            "c341f120-9e41-ea11-a812-000d3a07b262"
        ],
        createdDate: "2025-10-28T00:00:00Z"
    }
};

export const apiGetData = {
    apiEndpoint: "/api/v2/employee/shifts/{companyId}/{employeeId}/{roleName}/{startDate}/{endDate}",
    method: "GET",
    headers: {
        "Content-Type": "application/json",

        "x-functions-key": "mBubza_A_5SiY1JSud9bj-uh3Aqp1D4K_rW2BXhxoQ7zAzFu_2kNng=="
    },
    exampleRequest:
        "http://localhost:7239/api/v2/employee/shifts/cdcecbbb-f6a7-f011-bbd2-000d3a802a53/278d6ab8-e73a-ed11-9db0-002248595075/HR%20Admin/2025-10-12/2025-10-18?code=mBubza_A_5SiY1JSud9bj-uh3Aqp1D4K_rW2BXhxoQ7zAzFu_2kNng==",
    responseExample: {
        status: "success",
        employeeId: "278d6ab8-e73a-ed11-9db0-002248595075",
        employeeName: "John Doe",
        companyId: "cdcecbbb-f6a7-f011-bbd2-000d3a802a53",
        roleName: "HR Admin",
        shifts: [
            {
                date: "2025-10-13",
                day: "Monday",
                shiftId: "46764fed-9f91-e511-8112-c4346badf500",
                shiftName: "Morning Shift",
                time: "06:00 AM – 10:00 AM"
            },
            {
                date: "2025-10-13",
                day: "Monday",
                shiftId: "48764fed-9f91-e511-8112-c4346badf500",
                shiftName: "Afternoon Shift",
                time: "02:00 PM – 05:00 PM"
            }
        ]
    }
};


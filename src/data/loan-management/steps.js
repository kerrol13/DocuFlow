const steps = [
    {
        number: "01",
        title: "Search Employee",
        content: [
            "Navigate to Document Workflow in the left menu.",
            "In the Search Employee field, type the employee's name or number.",
            "Example: Carlos Poquiz Yulo"
        ],
        details: [
            "Employee Number",
            "Employee Name",
            "Company",
            "Company Code",
            "Document Status (default is New)"
        ]
    },
    {
        number: "02",
        title: "Choose Document Type",
        content: [
            "Select the appropriate Document Type.",
            "LMNG – Loan Deduction"
        ]
    },
    {
        number: "03",
        title: "Fill Up Input Fields",
        content: [
            "Complete the required fields for the loan deduction:"
        ],
        fields: [
            { label: "Company", desc: "Enter the company name" },
            { label: "Post Net Deduction Type", desc: "Specify deduction type" },
            { label: "Principal Amount", desc: "Enter the loan amount" },
            { label: "Number of Payments", desc: "Define how many payroll cycles will deduct the loan" },
            { label: "Deduction Start", desc: "Select the start date of deduction" },
            { label: "Description", desc: "Provide any relevant notes/details" },
            { label: "To Update", desc: "Select the loan reference if updating an existing loan" }
        ],
        note: "You may also upload attachments (e.g., loan documents) using Click or Drag Files Here.",
        action: "After completing, click Submit."
    },
    {
        number: "04",
        title: "Browse & Verify Document",
        content: [
            "Go to Browse Documents under Document Workflow.",
            "Search or filter the document using employee name or document type.",
            "Review the details. The document will show:"
        ],
        details: [
            "Document Name",
            "Employee Name",
            "Document Type",
            "Modified On date",
            "Document Status (e.g., New, Approved)",
            "Approved By",
            "Encoded By",
            "Created Date"
        ]
    },
    {
        number: "05",
        title: "Approve Document",
        content: [
            "Once verified, the approver can set the status to Approved.",
            "Example: Document status changes from New → Approved."
        ]
    },
    {
        number: "06",
        title: "Pay in Full (Optional)",
        content: [
            "If you want to pay off the loan in full:"
        ],
        substeps: [
            "In the To Update field, select the loan you want to update.",
            "The field Deduct From Salary will be enabled."
        ],
        options: [
            { label: "Set to Yes", desc: "The system will close the loan and deduct the remaining balance from the employee's salary." },
            { label: "Set to No", desc: "The system will close the loan but will not deduct the remaining balance (will not appear in the payslip)." }
        ],
        afterSteps: [
            "Approve the updated document in Browse Documents.",
            "After the next Payroll Run, the system will:"
        ],
        finalDetails: [
            "Mark the loan as Fulfilled.",
            "Create a Loan transaction deducting the remaining balance from the loan (if \"Deduct From Salary\" was set to Yes)."
        ]
    }
];

export const keyNotes = [
    "Only Approved Documents take effect in payroll.",
    "Attachments are optional but recommended for compliance."
];
export default steps
const apiData = {
    apiEndpoint: "/api/loan-management",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer {token}"
    },
    requestBody: {
        employeeNumber: "string",
        employeeName: "string",
        company: "string",
        companyCode: "string",
        documentType: "LMNG",
        postNetDeductionType: "string",
        principalAmount: "number",
        numberOfPayments: "number",
        deductionStart: "date",
        description: "string",
        toUpdate: "string (optional)",
        attachments: "array (optional)"
    },
    responseExample: {
        status: "success",
        documentId: "DOC123456",
        documentStatus: "New",
        createdDate: "2025-10-28T00:00:00Z"
    }
};

export default apiData
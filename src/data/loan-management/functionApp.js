  export const functionAppProcess = {
    functionName: "GenerateDeductions",
    file: "LoanDeductionProcess.cs",
    note: "This function app process is part of the payroll run.",
    processFlow: [
      {
        step: "01",
        title: "Get active loan deductions",
        details: [
          "Retrieve all unfulfilled loans for the payroll period",
          "Only unfulfilled loans are considered for processing",
          "Fulfilled loans are skipped"
        ]
      },
      {
        step: "02",
        title: "Exclude government loans in the 5th week",
        details: [
          "If payroll cycle is weekly and it's the 5th week",
          "Government-related deductions (like REPI/FPPI) are excluded"
        ]
      },
      {
        step: "03",
        title: "Handle loan transfers (ToUpdateReference)",
        details: [
          "If a loan references another loan to update:",
          "• Close out the original loan (mark as fulfilled)",
          "• Transfer remaining balance to the new loan",
          "• Create a final loan detail for the old loan"
        ]
      },
      {
        step: "04",
        title: "Avoid duplicates",
        details: [
          "Check if the loan detail already exists for this pay period before inserting"
        ]
      },
      {
        step: "05",
        title: "Process regular active loans",
        details: [
          "For loans without transfer reference, update CRM records and insert deduction details"
        ]
      }
    ],
    importantNote: {
      included: "Only unfulfilled (active) loans are included in processing",
      excluded: "Fulfilled (fully paid) loans are skipped"
    }
  };

  export const documentQuery = {
    functionName: "GetHighestDocumentQuestionsV2",
    file: "EntityReferenceHelperV2.cs",
    entity: "fp_loandeductions",
    flow: [
      {
        step: "01",
        title: "Add extra columns to the query",
        details: [
          "If entity being queried is Loan Deduction (fp_loandeductions), include:",
          "• fp_description → Loan description field",
          "• fp_employee → Employee linked to the loan"
        ]
      },
      {
        step: "02",
        title: "Map entity to response object",
        details: [
          "For each loan deduction returned:",
          "• Description → Loan's description text",
          "• EmployeeName → Employee's name who owns the loan",
          "• EmployeeId → Employee's unique identifier (GUID)"
        ]
      },
      {
        step: "03",
        title: "Return enriched response",
        details: [
          "Each Loan Deduction entity is returned as an EntityReferrenceResponse with loan and employee details included"
        ]
      }
    ],
    summary: {
      title: "Loan Deduction Mapping",
      fieldsAdded: [
        "Loan description",
        "Employee name",
        "Employee ID"
      ]
    }
  };
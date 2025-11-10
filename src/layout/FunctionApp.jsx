// FunctionAppProcess.jsx
import React from "react";

const FunctionApp = ({ queryData, processData }) => {
  // Helper: safely render a section only if data exists
  const renderSection = (data) => {
    if (!data) return null; // prevents "undefined" error

    return (
      <section className="mb-32">
        {/* Header */}
        <header className="mb-12">
          <h2 className="text-3xl font-normal text-neutral-900 ">
            {data.functionName || "Unnamed Function"}
          </h2>
          <p className="text-neutral-500 font-light text-sm mt-1">
            {data.file}
          </p>
          {data.note && (
            <p className="text-neutral-500 font-light italic mt-2">
              {data.note}
            </p>
          )}
        </header>

        {/* Steps */}
        <div className="space-y-16">
          {(data.processFlow || data.flow || []).map((step, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-baseline gap-8 mb-6">
                <span className="text-6xl font-extralight text-neutral-200 leading-none">
                  {step.step}
                </span>
                <h3 className="text-3xl font-light text-neutral-900">
                  {step.title}
                </h3>
              </div>

              <div className="ml-32 space-y-3">
                {(step.details || []).map((detail, i) => (
                  <p
                    key={i}
                    className="text-neutral-600 leading-relaxed font-light flex items-start"
                  >
                    <span className="text-neutral-300 mr-3">—</span>
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Notes */}
        {data.importantNote && (
          <div className="mt-16 pt-10 border-t border-neutral-100 ml-32 space-y-3">
            <h4 className="text-xl font-light text-neutral-900">
              Important Notes
            </h4>
            <p className="text-neutral-600 font-light">
              <span className="text-neutral-400">Included:</span>{" "}
              {data.importantNote.included}
            </p>
            <p className="text-neutral-600 font-light">
              <span className="text-neutral-400">Excluded:</span>{" "}
              {data.importantNote.excluded}
            </p>
          </div>
        )}

        {data.summary && (
          <div className="mt-16 pt-10 border-t border-neutral-100 ml-32 space-y-3">
            <h4 className="text-xl font-light text-neutral-900">
              {data.summary.title}
            </h4>
            <ul className="space-y-2">
              {(data.summary.fieldsAdded || []).map((field, idx) => (
                <li
                  key={idx}
                  className="text-neutral-600 leading-relaxed font-light flex items-start"
                >
                  <span className="text-neutral-300 mr-3">—</span>
                  {field}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    );
  };

  return (
    <main className="max-w-3xl mx-auto px-6 pt-10">
      {renderSection(queryData)}
      {renderSection(processData)}
    </main>
  );
};

export default FunctionApp

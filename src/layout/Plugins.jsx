import React from "react";

const Plugins = ({ data }) => {
  if (!data) return null;

  return (
    <main className="max-w-3xl mx-auto px-6 pt-10">
      {/* Header */}
      <header className="mb-12">
        <h2 className="text-3xl font-light text-neutral-900 tracking-tight">
          {data.functionName}
        </h2>
        <p className="text-neutral-500 font-light text-sm mt-1">{data.file}</p>
        {data.note && (
          <p className="text-neutral-500 font-light italic mt-2">{data.note}</p>
        )}
      </header>

      {/* Process Flow */}
      <div className="space-y-24">
        {data.processFlow.map((step) => (
          <section key={step.step} className="relative">
            <div className="flex items-baseline gap-8 mb-8">
              <span className="text-6xl font-extralight text-neutral-200 leading-none">
                {step.step}
              </span>
              <h3 className="text-3xl font-light text-neutral-900 tracking-tight">
                {step.title}
              </h3>
            </div>

            <div className="ml-32 space-y-6">
              {/* Step Details */}
              {step.details && (
                <ul className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-neutral-600 font-light flex items-start leading-relaxed"
                    >
                      <span className="text-neutral-300 mr-3">—</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {/* Table Logic */}
              {step.table && (
                <table className="w-full mt-8 border-collapse border-t border-neutral-100">
                  <thead>
                    <tr className="text-left text-neutral-500 text-sm font-light">
                      <th className="py-2 pr-6">Action</th>
                      <th className="py-2">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {step.table.map((row, idx) => (
                      <tr key={idx} className="border-t border-neutral-100">
                        <td className="py-2 text-neutral-700 text-sm font-light">
                          {row.action}
                        </td>
                        <td className="py-2 text-neutral-600 text-sm font-light">
                          {row.result}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* Example */}
              {step.example && (
                <div className="mt-8 space-y-4">
                  <p className="text-neutral-700 font-normal">
                    <span className="text-neutral-400">Employee:</span>{" "}
                    {step.example.employee}
                  </p>
                  <p className="text-neutral-600 font-light">
                    <span className="text-neutral-400">Old Shift:</span>{" "}
                    {step.example.oldShift}
                  </p>
                  <p className="text-neutral-600 font-light">
                    <span className="text-neutral-400">New Request:</span>{" "}
                    {step.example.newRequest}
                  </p>
                  <div className="mt-6 border-t border-neutral-100 pt-6 space-y-3">
                    {step.example.pluginActions.map((action, idx) => (
                      <p
                        key={idx}
                        className="text-neutral-600 leading-relaxed font-light flex items-start"
                      >
                        <span className="text-neutral-300 mr-3">→</span>
                        {action}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Important Notes */}
      {data.importantNote && (
        <section className="mt-32 pt-16 border-t border-neutral-100">
          <h2 className="text-3xl font-light text-neutral-900 tracking-tight mb-12">
            Key Notes
          </h2>
          <div className="ml-32 space-y-4">
            <p className="text-neutral-600 font-light">
              <span className="text-neutral-400">Included:</span>{" "}
              {data.importantNote.included}
            </p>
            <p className="text-neutral-600 font-light">
              <span className="text-neutral-400">Excluded:</span>{" "}
              {data.importantNote.excluded}
            </p>
          </div>
        </section>
      )}
    </main>
  );
};

export default Plugins;

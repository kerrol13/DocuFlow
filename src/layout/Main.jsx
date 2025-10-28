const Main = ({steps,keyNotes}) => {
    return (
        <main className="max-w-3xl mx-auto px-6 pt-10">
            <div className="space-y-24">
                {steps.map((step) => (
                    <section key={step.number} className="relative">
                        {/* Step Number */}
                        <div className="flex items-baseline gap-8 mb-8">
                            <span className="text-6xl font-extralight text-neutral-200 leading-none">
                                {step.number}
                            </span>
                            <h2 className="text-3xl font-light text-neutral-900 tracking-tight">
                                {step.title}
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="ml-32 space-y-6">
                            {step.content.map((text, idx) => (
                                <p key={idx} className="text-neutral-600 leading-relaxed font-light">
                                    {text}
                                </p>
                            ))}

                            {/* Details */}
                            {step.details && (
                                <div className="mt-8 pt-8 border-t border-neutral-100">
                                    <ul className="space-y-3">
                                        {step.details.map((detail, idx) => (
                                            <li key={idx} className="text-neutral-600 font-light flex items-start">
                                                <span className="text-neutral-300 mr-3">—</span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Fields */}
                            {step.fields && (
                                <div className="mt-8 space-y-6">
                                    {step.fields.map((field, idx) => (
                                        <div key={idx} className="border-l-2 border-neutral-100 pl-6">
                                            <div className="text-neutral-900 font-normal mb-1">{field.label}</div>
                                            <div className="text-sm text-neutral-500 font-light">{field.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Substeps */}
                            {step.substeps && (
                                <div className="mt-8 space-y-4">
                                    {step.substeps.map((substep, idx) => (
                                        <p key={idx} className="text-neutral-600 leading-relaxed font-light pl-6">
                                            {idx + 1}. {substep}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {/* Options */}
                            {step.options && (
                                <div className="mt-6 ml-6 space-y-4">
                                    {step.options.map((option, idx) => (
                                        <div key={idx} className="border-l-2 border-neutral-100 pl-6">
                                            <div className="text-neutral-900 font-normal mb-1">{option.label}</div>
                                            <div className="text-sm text-neutral-500 font-light">{option.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* After Steps */}
                            {step.afterSteps && (
                                <div className="mt-8 space-y-4">
                                    {step.afterSteps.map((afterStep, idx) => (
                                        <p key={idx} className="text-neutral-600 leading-relaxed font-light pl-6">
                                            {idx + 3}. {afterStep}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {/* Final Details */}
                            {step.finalDetails && (
                                <div className="mt-6 ml-12 pt-6 border-t border-neutral-100">
                                    <ul className="space-y-3">
                                        {step.finalDetails.map((detail, idx) => (
                                            <li key={idx} className="text-neutral-600 font-light flex items-start">
                                                <span className="text-neutral-300 mr-3">—</span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Note */}
                            {step.note && (
                                <div className="mt-8 pt-6 border-t border-neutral-100">
                                    <p className="text-sm text-neutral-500 font-light italic">
                                        {step.note}
                                    </p>
                                </div>
                            )}

                            {/* Action */}
                            {step.action && (
                                <div className="mt-4">
                                    <p className="text-sm text-neutral-900 font-normal">
                                        → {step.action}
                                    </p>
                                </div>
                            )}
                        </div>
                    </section>
                ))}

                {/* Key Notes Section */}
                <section className="mt-32 pt-16 border-t border-neutral-100">
                    <h2 className="text-3xl font-light text-neutral-900 tracking-tight mb-12">
                        Key Notes
                    </h2>
                    <div className="ml-32 space-y-6">
                        {keyNotes.map((note, idx) => (
                            <p key={idx} className="text-neutral-600 leading-relaxed font-light flex items-start">
                                <span className="text-neutral-300 mr-3">—</span>
                                {note}
                            </p>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Main
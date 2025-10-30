const Main = ({ steps, keyNotes }) => {
    return (
        <main className="max-w-3xl mx-auto px-6 pt-10">
            <div className="space-y-24">
                {steps.map((step) => (
                    <section key={step.number} className="relative">

                        <div className="flex items-baseline gap-8 mb-8">
                            <span className="text-6xl font-extralight text-neutral-200 leading-none">
                                {step.number}
                            </span>
                            <h2 className="text-3xl font-light text-neutral-900 tracking-tight">
                                {step.title}
                            </h2>
                        </div>

                        <div className="ml-32 space-y-6">
                            {step.content.map((content, idx) => (
                                <p key={idx} className="text-neutral-600 leading-relaxed font-light">
                                    {content.text}
                                </p>
                            ))}

                            {step.details && (
                                <div className="mt-8 pt-8 border-t border-neutral-100">
                                    <ul className="space-y-3">
                                        {step.details.map((detail, idx) => (
                                            <li key={idx} className="text-neutral-600 font-light flex items-start">
                                                <span className="text-neutral-300 mr-3">—</span>
                                                {detail.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

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

                            {step.note && (
                                <div className="mt-8 pt-6 border-t border-neutral-100">
                                    <p className="text-sm text-neutral-500 font-light italic">
                                        {step.note}
                                    </p>
                                </div>
                            )}

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

                {keyNotes && <section className="mt-32 pt-16 border-t border-neutral-100">
                    <h2 className="text-3xl font-light text-neutral-900 tracking-tight mb-12">
                        Key Notes
                    </h2>
                    <div className="ml-32 space-y-6">
                        {keyNotes.map((note, idx) => (
                            <p key={idx} className="text-neutral-600 leading-relaxed font-light flex items-start">
                                <span className="text-neutral-300 mr-3">—</span>
                                {note.note}
                            </p>
                        ))}
                    </div>
                </section>}
            </div>
        </main>
    )
}
export default Main
import { useEffect, useState } from 'react';

const Main = ({ steps: initialSteps, keyNotes: initialKeyNotes,setStepsSetter }) => {
    const [steps, setSteps] = useState(initialSteps);
    const [keyNotes, setKeyNotes] = useState(initialKeyNotes);

    const updateText = (stepIndex, path, e) => {
        const newSteps = [...steps];
        const keys = path.split('.');
        let target = newSteps[stepIndex];

        for (let i = 0; i < keys.length - 1; i++) {
            target = target[keys[i]];
        }

        const lastKey = keys[keys.length - 1];
        if (typeof target[lastKey] === 'object' && target[lastKey].text !== undefined) {
            target[lastKey].text = e.target.innerText;
        } else {
            target[lastKey] = e.target.innerText;
        }
        setStepsSetter && setStepsSetter(newSteps)
        setSteps(newSteps);
    };

    const updateKeyNoteText = (idx, e) => {
        const newKeyNotes = [...keyNotes];
        newKeyNotes[idx].note = e.target.innerText;
        setKeyNotes(newKeyNotes);
    };

    useEffect(() => {
        setStepsSetter && setStepsSetter(initialSteps)
        setSteps(initialSteps)
    }, [initialSteps])

    return (
        <main className="max-w-3xl mx-auto px-6 pt-10">
            <div className="space-y-24">
                {steps.map((step, stepIndex) => (
                    <section key={step.number} className="relative">
                        <div className="flex items-baseline gap-8 mb-8">
                            <span
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => updateText(stepIndex, 'number', e)}
                                className="text-8xl font-Druk-Bold  leading-none outline-none focus:ring-2 focus:ring-blue-200 rounded px-1"
                            >
                                {step.number}
                            </span>
                            <h2
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => updateText(stepIndex, 'title', e)}
                                className="font-Druk-Medium  text-5xl   outline-none focus:ring-2 focus:ring-blue-200 rounded px-1"
                            >
                                {step.title}
                            </h2>
                        </div>

                        <div className="ml-29 space-y-6 font-monument-grotesk-regular">
                            {step.content.map((content, idx) => (
                                <p
                                    key={idx}
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => updateText(stepIndex, `content.${idx}`, e)}
                                    className=" font-light outline-none focus:ring-2 focus:ring-blue-200 rounded "
                                >
                                    {content.text}
                                </p>
                            ))}

                            {step.details && (
                                <div className="mt-8 pt-8 border-t ">
                                    <ul className="space-y-3">
                                        {step.details.map((detail, idx) => (
                                            <li key={idx} className="text-neutral-600 font-light flex items-start">
                                                <span className="text-neutral-300 mr-3">—</span>
                                                <span
                                                    contentEditable
                                                    suppressContentEditableWarning
                                                    onBlur={(e) => updateText(stepIndex, `details.${idx}`, e)}
                                                    className="outline-none focus:ring-2 focus:ring-blue-200 rounded px-1"
                                                >
                                                    {detail.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {step.fields && (
                                <div className="mt-8 space-y-6">
                                    {step.fields.map((field, idx) => (
                                        <div key={idx} className="border-l-2  pl-6">
                                            <div
                                                contentEditable
                                                suppressContentEditableWarning
                                                onBlur={(e) => {
                                                    const newSteps = [...steps];
                                                    newSteps[stepIndex].fields[idx].label = e.target.innerText;
                                                    setSteps(newSteps);
                                                }}
                                                className=" font-normal mb-1 outline-none focus:ring-2 focus:ring-blue-200 rounded px-1"
                                            >
                                                {field.label}
                                            </div>
                                            <div
                                                contentEditable
                                                suppressContentEditableWarning
                                                onBlur={(e) => {
                                                    const newSteps = [...steps];
                                                    newSteps[stepIndex].fields[idx].desc = e.target.innerText;
                                                    setSteps(newSteps);
                                                }}
                                                className="text-sm text-neutral-500  outline-none focus:ring-2 focus:ring-blue-200 rounded px-1"
                                            >
                                                {field.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {step.note && (
                                <div className="mt-8 pt-6 border-t ">
                                    <p
                                        contentEditable
                                        suppressContentEditableWarning
                                        onBlur={(e) => updateText(stepIndex, 'note', e)}
                                        className="text-sm text-neutral-500 font-light italic outline-none focus:ring-2 focus:ring-blue-200 rounded px-1"
                                    >
                                        {step.note}
                                    </p>
                                </div>
                            )}

                            {step.action && (
                                <div className="mt-4">
                                    <p
                                        contentEditable
                                        suppressContentEditableWarning
                                        onBlur={(e) => updateText(stepIndex, 'action', e)}
                                        className="text-sm  outline-none focus:ring-2 focus:ring-blue-200 rounded px-1"
                                    >
                                        → {step.action}
                                    </p>
                                </div>
                            )}
                        </div>
                    </section>
                ))}

                {keyNotes && (
                    <section className="">
                        <h2 className="text-5xl font-SkribblughRegular  mb-12">
                            Key Notes
                        </h2>
                        <div className="ml-29 space-y-6 font-monument-grotesk-regular">
                            {keyNotes.map((note, idx) => (
                                <p key={idx} className=" ">
                                    <span className="text-neutral-300 mr-3">—</span>
                                    <span
                                        contentEditable
                                        suppressContentEditableWarning
                                        onBlur={(e) => updateKeyNoteText(idx, e)}
                                        className="outline-none focus:ring-2 focus:ring-blue-200 rounded px-1"
                                    >
                                        {note.note}
                                    </span>
                                </p>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
};

export default Main;
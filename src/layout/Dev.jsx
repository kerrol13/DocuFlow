import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light-async";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Dev = ({ apiData }) => {
    const normalizeNewlines = (text) =>
        typeof text === "string" ? text.replace(/\\n/g, "\n") : text;
    const renderContent = (content) => {
        if (Array.isArray(content)) {
            return (
                <div className="bg-[#1e1e1e] text-neutral-300 p-4 space-y-2 text-sm lowercase">
                    {content.map((h) => (
                        <div key={h.id} className="flex justify-between border-b  last:border-none pb-1 ">
                            <span className="font-medium text-neutral-300 ">{h.key}</span>
                            <span className="text-neutral-300 break-all">{h.value}</span>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <SyntaxHighlighter
                language="json"
                style={vs2015}
                className="normal-case"
            >
                {typeof content === "string"
                    ? normalizeNewlines(content.toString())
                    : JSON.stringify(content, null, 2)}
            </SyntaxHighlighter>

        );
    };

    const Section = ({ title, content }) => (
        <div>
            <h3 className="text-5xl font-Druk-Medium uppercase  mb-4">
                {title}
            </h3>
            {renderContent(content)}
        </div>
    );

    return (
        <main className="max-w-3xl mx-auto px-6 pt-10">
            <header className="mb-12">
                <h2 className="text-8xl mb-2 font-Druk-Bold ">API Reference</h2>
                <p className="text-2xl font-Druk-Medium tracking-wide">Technical documentation for developers</p>
            </header>

            {apiData.map((data) => (
                <section key={data.id} className="space-y-8 mb-12 border-b  pb-10">
                    <h2 className="text-8xl font-Druk-Bold mb-4">{data.name}</h2>

                    <Section title="Endpoint" content={data.apiEndpoint} />
                    <Section title="Method" content={data.method} />
                    <Section title="Headers" content={data.headers} />

                    {data.examples.map((ex) => (
                        <div key={ex.id} className="space-y-6    ">
                            <Section title="Example Request" content={ex.exampleRequest} />
                            {ex.requestBodyJson && <Section title="Request Body" content={ex.requestBodyJson} />}
                            <Section title="Response Example" content={ex.responseExampleJson} />
                        </div>
                    ))}
                </section>
            ))}
        </main>
    );
};

export default Dev;
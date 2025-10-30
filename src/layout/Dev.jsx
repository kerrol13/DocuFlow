import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light-async";
import { stackoverflowLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Dev = ({ apiData }) => {
    const renderContent = (content) => {
        if (Array.isArray(content)) {
            return (
                <div className="bg-neutral-50 border border-neutral-100 p-4 space-y-2 text-sm">
                    {content.map((h) => (
                        <div key={h.id} className="flex justify-between border-b border-neutral-100 last:border-none pb-1">
                            <span className="font-medium text-neutral-700">{h.key}</span>
                            <span className="text-neutral-500 break-all">{h.value}</span>
                        </div>
                    ))}
                </div>
            );
        }
        
        return (
            <SyntaxHighlighter language="json" style={stackoverflowLight}>
                {typeof content === "string" ? content : JSON.stringify(content, null, 2)}
            </SyntaxHighlighter>
        );
    };

    const Section = ({ title, content }) => (
        <div>
            <h3 className="text-sm font-normal text-neutral-400 uppercase tracking-wider mb-4">
                {title}
            </h3>
            {renderContent(content)}
        </div>
    );

    return (
        <main className="max-w-3xl mx-auto px-6 pt-10">
            <header className="mb-12">
                <h2 className="text-2xl font-normal text-neutral-900 mb-2">API Reference</h2>
                <p className="text-neutral-600 font-light">Technical documentation for developers</p>
            </header>

            {apiData.map((data) => (
                <section key={data.id} className="space-y-8 mb-12 border-b border-neutral-100 pb-10">
                    <h2 className="text-xl font-medium text-neutral-800 mb-4">{data.name}</h2>

                    <Section title="Endpoint" content={data.apiEndpoint} />
                    <Section title="Method" content={data.method} />
                    <Section title="Headers" content={data.headers} />

                    {data.examples.map((ex) => (
                        <div key={ex.id} className="space-y-6    ">
                            <h4 className="text-neutral-700 font-medium text-sm uppercase">Example</h4>
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
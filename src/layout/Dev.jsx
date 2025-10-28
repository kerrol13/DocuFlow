import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light-async";
import { stackoverflowLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Dev = ({ apiData }) => {
    const renderSection = (title, content) => (
        <div>
            <h3 className="text-sm font-normal text-neutral-400 uppercase tracking-wider mb-4">
                {title}
            </h3>
            <SyntaxHighlighter language="javascript" style={stackoverflowLight}>
                {JSON.stringify(content, null, 2)}
            </SyntaxHighlighter>
        </div>
    );

    return (
        <main className="max-w-3xl mx-auto px-6 pt-10">
            <header className="mb-12">
                <h2 className="text-2xl font-normal text-neutral-900 mb-2">API Reference</h2>
                <p className="text-neutral-600 font-light">
                    Technical documentation for developers
                </p>
            </header>

            {apiData.map((data) => (
                <section className="space-y-8 mb-12 border-b border-neutral-100 pb-10" key={data.apiEndpoint}>
                    {renderSection("Endpoint", data.apiEndpoint)}
                    {renderSection("Method", data.method)}
                    {renderSection("Headers", data.headers)}
                    {data.requestBody ? renderSection("Request Body", data.requestBody) : null}
                    {renderSection("Response Example", data.responseExample)}
                </section>
            ))}
        </main>
    );
};

export default Dev;

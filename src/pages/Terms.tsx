import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import termsContent from '../content/terms.md?raw';

const Terms = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container max-w-4xl mx-auto px-4 py-24">
                <div className="animate-fade-in">
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-4xl md:text-5xl font-heading font-bold mb-10 text-primary" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl md:text-3xl font-heading font-semibold mt-12 mb-6 text-foreground border-b border-primary/10 pb-2" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-heading font-medium mt-8 mb-4 text-foreground" {...props} />,
                            p: ({ node, ...props }) => <p className="text-muted-foreground leading-relaxed mb-6" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-muted-foreground" {...props} />,
                            li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                            a: ({ node, ...props }) => <a className="text-primary hover:text-primary/80 transition-colors font-medium underline underline-offset-4" {...props} />,
                            hr: ({ node, ...props }) => <hr className="my-12 border-border" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-semibold text-foreground" {...props} />,
                        }}
                    >
                        {termsContent}
                    </ReactMarkdown>
                </div>

                <div className="bg-muted/50 border border-border p-6 rounded-xl mt-12 max-w-4xl mx-auto text-center">
                    <p className="text-sm text-muted-foreground">
                        <strong>Note to Admin:</strong> You can update this content by editing <code>src/content/terms.md</code>.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;

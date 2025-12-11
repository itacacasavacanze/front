import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import privacyContent from '../content/privacy.md?raw';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container max-w-4xl mx-auto px-4 py-24">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <ReactMarkdown>{privacyContent}</ReactMarkdown>
                </div>

                <div className="bg-muted p-4 rounded-lg mt-8 max-w-4xl mx-auto">
                    <p className="text-sm text-muted-foreground">
                        <strong>Note to Admin:</strong> You can update this content by editing <code>src/content/privacy.md</code>.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;

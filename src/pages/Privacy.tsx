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
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;

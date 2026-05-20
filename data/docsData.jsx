import React from 'react';

export const docsCategories = [
    {
        title: "Getting Started",
        items: [
            {
                title: "Introduction",
                slug: "introduction",
                content: () => (
                    <>
                        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">Introduction to N-Keys</h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            N-Keys is a modern, ultra-secure platform built in Rust for managing environment variables and configuration files across diverse deployment stages.
                            It aims to eliminate configuration sprawl and secrets mismanagement by providing a single source of truth.
                        </p>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Core Philosophy</h2>
                        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 mb-6">
                            <li><strong>Security First:</strong> All keys are protected via Argon2 hashing. The backend is 100% Rust memory-safe code.</li>
                            <li><strong>Stage-Aware:</strong> Manage identical keys across `dev`, `staging`, and `prod` with complete isolation.</li>
                            <li><strong>Agnostic:</strong> Works beautifully with Docker Compose, raw cURL, or our dedicated CLI.</li>
                        </ul>
                    </>
                )
            },
            {
                title: "Quickstart",
                slug: "quickstart",
                content: () => (
                    <>
                        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">Quickstart Guide</h1>
                        <p className="text-slate-600 dark:text-slate-300 mb-6">
                            Get up and running with N-Keys in less than 5 minutes.
                        </p>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">1. Generate an API Key</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Log into your dashboard, navigate to the <strong>API Keys</strong> section, and generate a new key for your desired environment stage.
                        </p>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">2. Pull your variables</h2>
                        <div className="bg-slate-900 p-4 rounded-xl mb-6 overflow-x-auto border border-slate-700">
                            <code className="text-emerald-400">curl -H "Authorization: Bearer YOUR_API_KEY" https://api.n-keys.com/v1/env/prod  .env</code>
                        </div>
                    </>
                )
            }
        ]
    },
    {
        title: "Integrations",
        items: [
            {
                title: "Docker Compose",
                slug: "docker-compose",
                content: () => (
                    <>
                        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">Docker Compose Integration</h1>
                        <p className="text-slate-600 dark:text-slate-300 mb-6">
                            N-Keys works natively with Docker Compose by securely fetching your environment variables during the build or run process.
                        </p>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">Example docker-compose.yml</h2>
                        <div className="bg-slate-900 p-4 rounded-xl mb-6 overflow-x-auto border border-slate-700 text-sm">
                            <pre className="text-sky-300">
                                {`version: '3.8'
services:
  web:
    image: my-app:latest
    env_file:
      - .env
    ports:
      - "3000:3000"`}
                            </pre>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">
                            Simply use our CLI to pull the `.env` file right before running <code>docker compose up</code>.
                        </p>
                    </>
                )
            }
        ]
    }
];

export const getDocBySlug = (slug) => {
    for (const category of docsCategories) {
        const doc = category.items.find(item => item.slug === slug);
        if (doc) return doc;
    }
    return null;
};

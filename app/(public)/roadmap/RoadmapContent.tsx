"use client";

import PageHeader from '@/components/PageHeader'
import { roadmapEntries } from '@/data/roadmapData'
import { useState } from 'react'

interface RoadmapEntry {
    id: string;
    title: string;
    description: string;
    range: string;
    done: boolean;
    learnMoreUrl?: string;
}

export default function RoadmapContent() {
    const [searchTerm, setSearchTerm] = useState('')

    const highlightText = (text: string, term: string) => {
        if (!term) return text
        const parts = text.split(new RegExp(`(${term})`, 'gi'))
        return parts.map((part, index) =>
            part.toLowerCase() === term.toLowerCase() ? (
                <mark key={index} className="bg-brand-primary/20 text-brand-primary dark:text-[#02b5b8] font-bold px-1 rounded">
                    {part}
                </mark>
            ) : (
                part
            )
        )
    }

    const filteredEntries = roadmapEntries.filter((entry: RoadmapEntry) => {
        const lowerSearchTerm = searchTerm.toLowerCase()
        return (
            entry.title.toLowerCase().includes(lowerSearchTerm) ||
            entry.description.toLowerCase().includes(lowerSearchTerm) ||
            entry.range.toLowerCase().includes(lowerSearchTerm)
        )
    })

    return (
        <>
            <PageHeader
                title="Roadmap"
                subtitle="Discover our timeline with key milestones, detailed descriptions, and links to learn more."
            />

            <section className="px-6 pb-20 lg:pb-28 max-w-4xl mx-auto">
                {/* Search Bar */}
                <div className="relative mb-12 max-w-2xl mx-auto group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-primary transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search roadmap by title, description, or date..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                    />
                </div>

                {/* Roadmap List */}
                <div className="space-y-6" role="list">
                    {filteredEntries.length === 0 ? (
                        <div className="text-center py-12 text-slate-500 dark:text-slate-400">
                            No roadmap items match your search.
                        </div>
                    ) : (
                        filteredEntries.map((entry: RoadmapEntry) => (
                            <article 
                                key={entry.id} 
                                className={`p-6 sm:p-8 bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:border-brand-primary/40 dark:hover:border-brand-primary/40 transition-all duration-300 relative overflow-hidden group ${entry.done ? 'opacity-70 hover:opacity-100' : ''}`}
                                role="listitem"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-brand-primary mb-2 uppercase tracking-wider">
                                            {highlightText(entry.range, searchTerm)}
                                        </p>
                                        <h3 className={`text-xl font-bold text-slate-900 dark:text-white mb-3 ${entry.done ? 'line-through text-slate-500 dark:text-slate-400' : ''}`}>
                                            {highlightText(entry.title, searchTerm)}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {highlightText(entry.description, searchTerm)}
                                        </p>
                                    </div>

                                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 sm:min-w-[120px] shrink-0">
                                        {entry.done ? (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                                                <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Done
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                                                Planned
                                            </span>
                                        )}

                                        {entry.learnMoreUrl && (
                                            <a
                                                href={entry.learnMoreUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm font-semibold text-brand-primary hover:text-brand-hover inline-flex items-center group/link transition-colors"
                                            >
                                                Read more
                                                <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))
                    )}
                </div>
            </section>
        </>
    )
}

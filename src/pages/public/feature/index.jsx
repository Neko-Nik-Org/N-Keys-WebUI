import FeatureIcon from "@/components/FeatureIcon"
import PageHeader from "@/components/PageHeader"
import SeoMeta from "@/components/SeoMeta"
import { benefits, features } from "@/data/featuresData"

function Features() {
    return (
        <>
            <SeoMeta
                title="Features"
                description="Discover N-Keys features: server-to-server env sync, Docker Compose support, raw env variable workflows, CLI and cURL access, API-key auth, custom stages, Argon2 security, and pure Rust backend."
            />

            <PageHeader
                title="Features"
                subtitle="Everything your team needs to securely manage env vars and config files at scale."
            />

            {/* Features Grid Section */}
            <section className="px-6 pb-20 lg:pb-28">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <article 
                            key={feature.title} 
                            className="p-8 bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-brand-primary/10 hover:border-brand-primary/40 dark:hover:border-brand-primary/40 transition-all duration-300 group flex flex-col"
                        >
                            <FeatureIcon icon={feature.icon} />
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="px-6 py-20 lg:py-28 bg-slate-50/50 dark:bg-transparent border-t border-slate-200 dark:border-slate-800/50 relative overflow-hidden">
                {/* Subtle Background Elements */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                            Why teams pick N-Keys
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            Simple workflows, strong security, and practical pricing for real-world teams.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {benefits.map((benefit) => (
                            <article 
                                key={benefit} 
                                className="flex items-start gap-4 p-6 bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-xl hover:border-brand-primary/40 dark:hover:border-brand-primary/40 hover:shadow-lg transition-all duration-300 group"
                            >
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-sm group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                    ✓
                                </span>
                                <p className="text-slate-700 dark:text-slate-300 font-medium pt-1 leading-relaxed">
                                    {benefit}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
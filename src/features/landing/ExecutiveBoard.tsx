"use client";
import AnimatedDivider from "@/components/common/Animateddivider";
import { LeadershipMember, boardOfTrustees } from "@/data/leadership";
import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MemberModal from "@/features/landing/members/MemberModal";

export default function ExecutiveBoard() {
    const [active, setActive] = useState<LeadershipMember | null>(null);

    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
    };

    const item = {
        hidden: { opacity: 0, y: 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
        },
    };

    // Board roles data
    const boardMembers = [
        { title: "President", role: "Executive Board" },
        { title: "Vice President", role: "Executive Board" },
        { title: "Secretary General", role: "Executive Board" },
        { title: "Joint Secretary", role: "Executive Board" },
        { title: "Treasurer", role: "Executive Board" },
        { title: "Executive Member", role: "Executive Board" },
        { title: "Executive Member", role: "Executive Board" },
        { title: "Executive Member", role: "Executive Board" },
    ];

    // Core values data
    const coreValues = [
        { title: "Respect" },
        { title: "Friendship" },
        { title: "Fair Play" },
        { title: "Innovation" },
        { title: "Excellence" },
    ];

    return (
        <section className="py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
            <div className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">

                {/* Top Section Header */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <motion.h2
                        variants={item}
                        className="font-heading text-[30px] font-bold text-secondary-900 sm:text-[36px]"
                    >
                        Executive Board & Board of Trustees
                    </motion.h2>

                    <motion.div variants={item} className="mt-3.5 flex justify-center">
                        <AnimatedDivider color="bg-secondary-900" />
                    </motion.div>

                    <motion.p
                        variants={item}
                        className="mx-auto mt-4 font-body text-[16px] leading-relaxed text-secondary-900 font-semibold"
                    >
                        The People Taking the Game Forward
                    </motion.p>
                </motion.div>

                {/* Introductory Paragraphs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-12 max-w-4xl space-y-6 font-body text-[16px] leading-relaxed text-muted-foreground text-center md:text-left"
                >
                    <p>
                        World Mini Mini Football is built by people who share a clear ambition: to take the game further and create a lasting place for Mini Mini Football on the international sporting stage.
                    </p>
                    <p>
                        The Executive Board and Board of Trustees bring together experience, knowledge, and a shared commitment to the development of WMMF. Working together, they help shape the direction of the organization, strengthen its international structure, and create new opportunities for players, coaches, referees, clubs, and Member Associations.
                    </p>
                    <p>
                        From grassroots development and education to competitions and international expansion, the leadership of WMMF is focused on turning opportunity into action and building a sport that is fast, accessible, exciting, and open to everyone.
                    </p>
                    <p>
                        The Executive Board leads the development and implementation of WMMF’s programs and priorities, while the Board of Trustees provides oversight, guidance, and support for the organization’s long-term direction and integrity.
                    </p>
                </motion.div>

                <div className="mt-10 flex justify-center">
                    <AnimatedDivider color="bg-secondary-900" />
                </div>

                {/* President & Board Cards Grid */}
                <div className="mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h3 className="font-heading text-[26px] font-bold text-secondary-900">
                            Leadership Roster
                        </h3>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
                    >
                        {boardOfTrustees.map((member) => (
                            <motion.button
                                key={member.id}
                                type="button"
                                variants={item}
                                whileHover={{ y: -6 }}
                                onClick={() => setActive(member)}
                                className="group text-left"
                            >
                                <div className="relative aspect-[253/300] overflow-hidden rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-muted shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                                </div>
                                <h3 className="mt-4 font-heading text-[16px] font-semibold text-secondary-900 transition-colors group-hover:text-primary-600">
                                    {member.name}
                                </h3>
                                <p className="mt-1 font-body text-[13px] text-muted-foreground">
                                    {member.role}
                                </p>
                            </motion.button>
                        ))}
                    </motion.div>

                </div>
                <MemberModal member={active} onClose={() => setActive(null)} />


                {/* Our Values Section */}
                <div className="mt-24 text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-[28px] font-bold text-secondary-900"
                    >
                        Our Values
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-2 font-body text-lg font-semibold text-primary tracking-wide"
                    >
                        Respect. Friendship. Fair Play. Innovation. Excellence.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-muted-foreground"
                    >
                        These principles are at the heart of WMMF — shaping our decisions, our competitions, our partnerships, and the way we work across World Mini Mini Football community.
                    </motion.p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                        {coreValues.map((val, idx) => (
                            <div key={idx} className="bg-secondary-50 border border-secondary-200 p-4 rounded-lg font-heading font-bold text-secondary-900 shadow-xs">
                                {val.title}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Motto Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 bg-secondary-900 text-white rounded-2xl p-10 text-center shadow-lg relative overflow-hidden"
                >
                    <div className="flex justify-center gap-6 font-semibold tracking-widest text-xs uppercase text-primary mb-3">
                        <span>One team</span>
                        <span>•</span>
                        <span>One vision</span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight">
                        World Mini Mini Football (WMMF)
                    </h3>
                    <p className="mt-2 font-body text-sm md:text-base font-medium tracking-wider text-secondary-200 uppercase">
                        IT’S MORE THAN JUST A GAME
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
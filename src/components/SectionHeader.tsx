'use client';

import { motion } from 'framer-motion';
import { Fragment } from 'react';

interface SectionHeaderProps {
  tag: string;
  titleLines: string[];
  accentWord?: string;
}

export default function SectionHeader({ tag, titleLines, accentWord }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-16 md:mb-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="block w-6 h-px bg-[#00FF66]" aria-hidden="true" />
        <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-neutral-500">
          {tag}
        </span>
      </div>

      <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.05] tracking-tight">
        {titleLines.map((line, lineIdx) => (
          <Fragment key={lineIdx}>
            {accentWord
              ? line.split(new RegExp(`(${accentWord})`, 'i')).map((segment, segIdx) =>
                  segment.toLowerCase() === accentWord.toLowerCase() ? (
                    <span key={segIdx} className="text-[#00FF66]">{segment}</span>
                  ) : (
                    <Fragment key={segIdx}>{segment}</Fragment>
                  ),
                )
              : line}
            {lineIdx < titleLines.length - 1 && <br />}
          </Fragment>
        ))}
      </h2>
    </motion.div>
  );
}

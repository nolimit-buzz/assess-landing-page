import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { getPrivacyPolicyData } from '@/lib/api';
import React from 'react';

export const revalidate = 3600;

export default async function PrivacyPolicyPage() {
  const data = await getPrivacyPolicyData();

  return (
    <main className="min-h-screen bg-white">
      <Navigation navLinks={data.navbar.nav_links} />

      <section className="bg-gradient-to-br from-slate-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy">Privacy Policy</h1>
            <p className="text-brand-navy/60 mt-2">We value your privacy and are committed to protecting your data.</p>
          </div>

          <article className="prose prose-slate max-w-none [&_h1]:text-brand-navy [&_h2]:text-brand-navy [&_h3]:text-brand-navy [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h1]:leading-tight [&_h2]:leading-tight [&_strong]:text-brand-navy [&_h2]:mt-10 [&_h3]:mt-6 [&_p]:mt-4 [&_ul]:mt-4 [&_ol]:mt-4 prose-ul:list-disc prose-ol:list-decimal prose-ul:pl-6 prose-ol:pl-6 prose-li:my-1 prose-li:marker:text-brand-navy">
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: markdownToHtml(data.content) }} />
          </article>
        </div>
      </section>

      <Footer footer={data.footer} />
    </main>
  );
}

function markdownToHtml(markdown: string) {
  // Simple markdown to HTML with correct bullet lists
  const lines = markdown.split(/\r?\n/);
  let html = '';
  let inUl = false;
  let inOl = false;

  const flushLists = () => {
    if (inUl) { html += '</ul>'; inUl = false; }
    if (inOl) { html += '</ol>'; inOl = false; }
  };

  for (let raw of lines) {
    const line = raw.replace(/\s+$/,''); // trim trailing spaces

    // Headings
    if (/^###\s+/.test(line)) { flushLists(); const t=line.replace(/^###\s+/, ''); html += `<h3>${t.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')}</h3>`; continue; }
    if (/^##\s+/.test(line)) { flushLists(); const t=line.replace(/^##\s+/, ''); html += `<h2>${t.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')}</h2>`; continue; }
    if (/^#\s+/.test(line))   { flushLists(); const t=line.replace(/^#\s+/, ''); html += `<h1>${t.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')}</h1>`; continue; }

    // Unordered list item
    if (/^-\s+/.test(line)) {
      if (!inUl) { flushLists(); html += '<ul>'; inUl = true; }
      const t=line.replace(/^-\s+/, '');
      html += `<li>${t.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')}</li>`;
      continue;
    }

    // Ordered list item (e.g., 1. Item)
    if (/^\d+\.\s+/.test(line)) {
      if (!inOl) { flushLists(); html += '<ol>'; inOl = true; }
      const t=line.replace(/^\d+\.\s+/, '');
      html += `<li>${t.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')}</li>`;
      continue;
    }

    // Blank line
    if (line.trim() === '') { flushLists(); html += ''; continue; }

    // Paragraph
    flushLists();
    const safe = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html += `<p>${safe}</p>`;
  }

  flushLists();
  return html;
}


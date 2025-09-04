import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { getTermsOfServiceData } from '@/lib/api';
import React from 'react';

export const revalidate = 3600;

export default async function TermsOfServicePage() {
  const data = await getTermsOfServiceData();

  return (
    <main className="min-h-screen bg-white">
      <Navigation navLinks={data.navbar.nav_links} />

      <section className="bg-gradient-to-br from-slate-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy">Terms of Service</h1>
            <p className="text-brand-navy/60 mt-2">Please review these terms carefully before using our services.</p>
          </div>

          <article className="prose prose-slate max-w-none [&_h1]:text-brand-navy [&_h2]:text-brand-navy [&_h3]:text-brand-navy [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h1]:leading-tight [&_h2]:leading-tight [&_strong]:text-brand-navy [&_h2]:mt-10 [&_h3]:mt-6 [&_p]:mt-4 [&_ul]:mt-4 [&_ol]:mt-4">
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
  let html = markdown
    .replace(/^###\s(.+)$/gim, '<h3>$1</h3>')
    .replace(/^##\s(.+)$/gim, '<h2>$1</h2>')
    .replace(/^#\s(.+)$/gim, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\n\n-\s/gm, '\n<ul><li>')
    .replace(/\n-\s/gm, '</li><li>')
    .replace(/(\n\n)([^<\n-].*)/gm, '<p>$2</p>')
    .replace(/\n\n/gm, '<br/>')
    .replace(/\n/gm, '<br/>');
  if (html.includes('<ul><li>')) {
    html = html.replace(/(<ul><li>[\s\S]*?)(?=<p>|$)/gm, (m) => m.endsWith('</li>') ? `${m}</ul>` : `${m}</li></ul>`);
  }
  return html;
}


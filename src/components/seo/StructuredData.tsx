import { SITE_URL, CONTACT_EMAIL, COMPANY } from "@/lib/site";
import { dictionaries } from "@/lib/i18n/dictionaries";

/**
 * JSON-LD structured data (Person + WebSite + Organization). Server-rendered
 * so search engines read it without executing JS. One `@graph` keeps the
 * entities cross-linked by @id.
 */
export function StructuredData() {
  const description = dictionaries.ro.meta.description;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Iustin Aionese",
        url: SITE_URL,
        jobTitle: "Senior Product Engineer",
        description,
        email: `mailto:${CONTACT_EMAIL}`,
        worksFor: { "@id": `${SITE_URL}/#organization` },
        knowsAbout: [
          "Web development",
          "Product engineering",
          "SaaS platforms",
          "Marketing funnels",
          "Payment integration",
          "Marketing automation",
          "Artificial intelligence",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Iustin Aionese",
        description,
        inLanguage: "ro-RO",
        publisher: { "@id": `${SITE_URL}/#person`,  },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY.name,
        url: SITE_URL,
        email: `mailto:${CONTACT_EMAIL}`,
        foundingDate: "2025-12-02",
        founder: { "@id": `${SITE_URL}/#person` },
        identifier: [
          { "@type": "PropertyValue", name: "CUI", value: COMPANY.cui },
          { "@type": "PropertyValue", name: "Reg. Com.", value: COMPANY.regCom },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY.address,
          addressLocality: COMPANY.city,
          addressRegion: COMPANY.county,
          addressCountry: "RO",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

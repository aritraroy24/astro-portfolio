import siteData from "./data/siteData"

export default function jsonLDGenerator({ type, post, url }) {
  if (type === 'post') {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "${post.type}",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.cover.src}",
        "tags": "${post.tags}",
        "duration": "${post.duration}"
        "author": {
          "@type": "Aritra Roy",
          "url": "/"
        },
        "datePublished": "${post.pubDate}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "${siteData.title}",
        "url": "${import.meta.env.SITE}",
        "image": "${siteData.cover.src}",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "aritraroy.live{search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "@details": [
          {
            "@type": "Person",
            "name": "Aritra Roy",
            "image":
              "${siteData.cover.src}",
            "url": "https://aritraroy.live/",
            "jobTitle": "Computational Chemist",
            "worksFor": {
              "@type": "Organization",
              "name": "London South Bank University",
              "url": "https://www.lsbu.ac.uk/",
              "location":
                "London South Bank University
                103 Borough Road
                London SE1 0AA"
            },
            "@softwares": {
              "@type": "Software",
              "softwares": [
                "Gaussian 16",
                "ORCA 5.0",
                "GaussView 6.0",
                "Spartan '14",
                "Materials Studio 2017",
                "Avogadro",
                "ChemDraw Pro 19",
                "WinCACAO",
                "Origin Pro 2018",
                "EndNote X9",
                "Math Editor",
                "Multiwfn"
              ]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "512, Pirtala, Poramatala Road",
              "addressLocality": "Nabadwip, Nadia",
              "addressRegion": "West Bengal",
              "postalCode": "741302",
              "addressCountry": "India"
            },
            "sameAs": [
              "https://beacons.ai/aritraroy24",
              "https://orcid.org/0000-0003-0243-9124",
              "https://www.researchgate.net/profile/Aritra-Roy-5/",
              "https://www.linkedin.com/in/aritraroy24/",
              "https://github.com/aritraroy24",
              "https://aritraroy24.medium.com/",
              "https://twitter.com/aritraroy24",
              "https://www.facebook.com/aritraroy24/",
              "https://www.instagram.com/royaritra24/"
            ]
          }
        ],
        "@educationOrganizations": [
          {
            "@type": "Courses",
            "courseDetails": [
              {
                "@type": "CreativeWork",
                "description": "M.Sc. Chemistry",
                "name": "Pondicherry University",
                "url": "https://www.pondiuni.edu.in/",
                "locationCreated":
                  "R Venkat Raman Nagar, Kalapet, Pondicherry - 605 014, India"
              },
              {
                "@type": "Course",
                "name": "M.Sc. Chemistry",
                "description": "Masters' course in Chemistry",
                "provider": "Pondicherry University",
                "educationalCredentialAwarded": "8.88 CGPA out of 10"
              },
              {
                "@type": "Organization",
                "department": "Chemistry (Chemical Information Sciences Lab)"
              }
            ]
          },
          {
            "@type": "Courses",
            "courseDetails": [
              {
                "@type": "CreativeWork",
                "description": "B.Sc. Chemistry",
                "name": "Ramakrishna Mission Vivekananda Centenary College, Rahara",
                "url": "https://www.rkmvccrahara.org/",
                "locationCreated":
                  "Ramakrishna Mission Vivekananda Centenary College, Rahara, Kolkata - 700118, West Bengal, India"
              },
              {
                "@type": "Course",
                "name": "B.Sc. Chemistry",
                "description": "Bachelors' course in Chemistry",
                "provider": "Ramakrishna Mission Vivekananda Centenary College",
                "educationalCredentialAwarded": "67.88%"
              },
              {
                "@type": "Organization",
                "department": "Chemistry"
              }
            ]
          },
          {
            "@type": "Courses",
            "courseDetails": [
              {
                "@type": "CreativeWork",
                "description": "Higher Secondary",
                "name": "Nabadwip Bakultala High School (H.S.) for Boys",
                "url": "http://nbvpcs.org.in/",
                "locationCreated":
                  "Badur Tala Lane, Nabadwip, 741302, West Bengal, India"
              },
              {
                "@type": "Course",
                "name": "Higher Secondary",
                "description": "Higher secondary course in Science",
                "provider": "Nabadwip Bakultala High School (H.S.)",
                "educationalCredentialAwarded": "89.20%"
              },
              {
                "@type": "Organization",
                "department": "Science"
              }
            ]
          },
          {
            "@type": "Courses",
            "courseDetails": [
              {
                "@type": "CreativeWork",
                "description": "Secondary",
                "name": "Nabadwip Bakultala High School (H.S.) for Boys",
                "url": "http://nbvpcs.org.in/",
                "locationCreated":
                  "Badur Tala Lane, Nabadwip, 741302, West Bengal, India"
              },
              {
                "@type": "Course",
                "name": "Secondary",
                "description": "Secondary course in seven subjects",
                "provider": "Nabadwip Bakultala High School (H.S.)",
                "educationalCredentialAwarded": "90.00%"
              },
              {
                "@type": "Organization",
                "department": "General"
              }
            ]
          }
        ]
      }
    </script>`;
}
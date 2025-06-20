export function generateMetadata({
  homepage = '',
  title,
  description,
  image,
  url,
  date_published = new Date().toISOString(),
  date_modified = new Date().toISOString()
}) {
  const imageUrl = `${homepage}/assets/images/seo/${image || 'homepage.png'}`;

  return {
    title,
    metaDescription: description,
    path: `${url}`,
    img: image || 'homepage.png',
    date_published,
    date_modified,
    alternates: {
      canonical: `${homepage}/${url}`,
      languages: {
        hrefLang: 'x-default',
        href: `${homepage}/${url}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${homepage}/${url}`,
      siteName: 'Montra',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: 'Montra',
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  
  };
  
}

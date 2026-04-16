// hooks/useShare.js
export function useShare({ url, title, description = "" }) {
  const encoded = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
    desc: encodeURIComponent(description),
  };

  const platformUrls = {
  twitter:  `https://twitter.com/intent/tweet?text=${encoded.title}&url=${encoded.url}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded.url}`,
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encoded.url}`,
};

  const share = (platform) => {
    const shareUrl = platformUrls[platform];
    if (!shareUrl) {
      navigator.clipboard.writeText(url).then(() => {
        alert("Link copied! You can now paste it on Instagram.");
      });
      return;
    }
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=500");
  };

  const copyLink = () => navigator.clipboard.writeText(url);

  return { share, copyLink };
}
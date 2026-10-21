// Utility to format experiment titles for SEO-friendly URLs and matching

export const formatExperimentTitle = (title: string): string => {
  if (!title) return "";
  return title
    .trim()
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "-");
};

export const normalizeTopicSlug = (slug: string): string => {
  if (!slug) return "";
  return slug.toLowerCase().replace(/[^a-z0-9]/g, "");
};

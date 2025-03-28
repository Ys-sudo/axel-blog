import CMS from "decap-cms-app";
// import uploadcare from "decap-cms-media-library-uploadcare";
// import cloudinary from "decap-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";

import IndexPagePreview from "./preview-templates/IndexPagePreview";

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

const config = {
  load_config_file: true,
  local_backend: true,
  backend: {
    name: "git-gateway",
    // branch: 'next',
  },
  slug: {
    encoding: "ascii",
    clean_accents: true,
  },
};

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);

CMS.registerPreviewTemplate("blog", BlogPostPreview);

CMS.init({ config });

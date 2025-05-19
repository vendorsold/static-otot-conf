const replaceInFile = require('replace-in-file');

async function addLangAttribute() {
  try {
    const results = await replaceInFile({
      files: './**/*.html',
      from: /<html>/gi,
      to: '<html lang="en">',
    });
    console.log('Added lang="en" to:', results.filter((r) => r.hasChanged).map((r) => r.file));
  } catch (error) {
    console.error('Error:', error);
  }
}

addLangAttribute();
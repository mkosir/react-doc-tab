const glob = require('glob');

const supportedCodeExt = ['jsx', 'tsx'];
const supportedStyleExt = ['css', 'scss'];

export const getDocTabFilePaths = (): {
  docTabCodeFilePaths: string[];
  docTabStyleFilePaths: string[];
} => {
  const docTabFilePaths = glob.sync(process.cwd() + '/**/*.doctab.*', {});

  const docTabCodeFilePaths = docTabFilePaths.filter(docTabFilePath =>
    supportedCodeExt.includes(docTabFilePath.split('.').pop()),
  );
  const docTabStyleFilePaths = docTabFilePaths.filter(docTabFilePath =>
    supportedStyleExt.includes(docTabFilePath.split('.').pop()),
  );

  return { docTabCodeFilePaths, docTabStyleFilePaths };
};
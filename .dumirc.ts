import { defineConfig } from 'dumi';

// 此处更换为自己的仓库名
let base = '/my-react-comp/';
let publicPath = '/my-react-comp/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
    // @ts-ignore
    base = undefined;
    // @ts-ignore
    publicPath = undefined;
}

export default defineConfig({
    title: 'Happy UI',
    outputPath: 'doc-site',
    exportStatic: {},
    base,
    publicPath,
});
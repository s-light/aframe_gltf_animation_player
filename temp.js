module.exports = configure(function (ctx) {
  return {
    //...
    build: {
        transformAssetUrls: {
            aAssetItem: 'src',
            'a-asset-item': 'src',
        },
        vueLoaderOptions: {
            compilerOptions: {
                isCustomElement: tag => tag.startsWith('a-'),
                transformAssetUrls: {
                    aAssetItem: 'src',
                    'a-asset-item': 'src',
                },
            },
            transformAssetUrls: {
                aAssetItem: 'src',
                'a-asset-item': 'src',
            },
        },
    },
    // ...
 }
});

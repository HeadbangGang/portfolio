module.exports = {
    plugins: [
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
        ['wildcard', {
            exts: 'json',
            noModifyCase: true
        }]
    ],
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                targets: {
                    node: 'current',
                }
            }
        ],
        '@babel/typescript',
        '@babel/react'
    ]
}

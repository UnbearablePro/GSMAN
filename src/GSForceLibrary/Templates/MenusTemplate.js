const MenusTemplate = {
    ADMIN: [
        ['TITLE', 'ADMIN'],
        [`addSubMenu`, [
            ['TITLE', 'DEBUG'],
            
            ['addItem', 'User', 'debugUserProperties'],
            ['addItem', 'Document', 'debugDocumentProperties'],
            ['addItem', 'Script', 'debugScriptProperties']
        ]
        ],
        // ['addSeparator', 'Triggers']
    ],
}

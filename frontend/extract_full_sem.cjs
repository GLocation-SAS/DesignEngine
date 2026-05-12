const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/styles/variables-colors.json', 'utf8'));

function extractSemantics(mode) {
    const sem = data[mode];
    const results = [];

    function process(obj, prefix = '') {
        for (const key in obj) {
            const val = obj[key];
            if (val.value) {
                let cleanVal = val.value.replace(/{|}/g, '').replace(/\./g, '-');
                results.push(`    --semantic-${prefix}${key}: var(--${cleanVal});`);
            } else if (typeof val === 'object') {
                process(val, `${prefix}${key}-`);
            }
        }
    }

    process(sem);
    return results.join('\n');
}

console.log('--- LIGHT SEMANTICS ---');
console.log(extractSemantics('semantics-light'));
console.log('\n--- DARK SEMANTICS ---');
console.log(extractSemantics('+theme-dark'));

import { execSync } from 'child_process'

const message = process.argv.slice(2).join(' ')

if (!message) {
    console.error('❌ Please provide a commit message.')
    process.exit(1)
}

execSync('git add .', { stdio: 'inherit' })
execSync(`git commit -m "${message}"`, { stdio: 'inherit' })
execSync('git push', { stdio: 'inherit' })

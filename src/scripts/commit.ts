import { execSync } from 'child_process'

const message = process.argv.slice(2).join(' ')

if (!message) {
    console.error('❌ Commit message required.')
    process.exit(1)
}

try {
    execSync('git add .', { stdio: 'inherit' })
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' })
    execSync('git push', { stdio: 'inherit' })
} catch (err) {
    console.error('❌ Git command failed:', (err as Error).message)
    process.exit(1)
}

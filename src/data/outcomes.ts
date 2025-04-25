export const Outcomes = [
    {
        id: 'R301',
        title: 'Gain: Health',
        content: `<p>The number determines the outcome of the action.</p>
            <p>🔴 <strong>Roll 2-5</strong></p>
            <ul>
                <li><strong>Critical Failure</strong>: The treatment backfires, causing harm.</li>
                <li>+1 Heat</li>
            </ul>
            <p>🔴 <strong>Roll 6-8</strong></p>
            <ul>
                <li><strong>Failure</strong>: Healing stalls. You’re patched, but need more time.</li>
                <li>No Effect</li>
            </ul>
            <p>🟡 <strong>Roll 9-11</strong></p>
            <ul>
                <li><strong>Standard</strong>: Treatment kicks in slowly, stabilizing you.</li>
                <li>+2 Health</li>
                <li>+1 Energy</li>
            </ul>
            <p>🟡 <strong>Roll 12-14</strong></p>
            <ul>
                <li><strong>Good</strong>: Cells respond well, and you feel stronger.</li>
                <li>+4 Health</li>
                <li>+2 Energy</li>
            </ul>
            <p>🟢 <strong>Roll 15-17</strong></p>
            <ul>
                <li><strong>Great</strong>: Nanites accelerate healing, and you gain energy.</li>
                <li>+6 Health</li>
                <li>+3 Energy</li>
                <li>+1 Reputation</li>
            </ul>
            <p>🟢 <strong>Roll 18+</strong></p>
            <ul>
                <li><strong>Exceptional</strong>: Perfect recovery. You feel better than ever.</li>
                <li>+8 Health</li>
                <li>+4 Energy</li>
                <li>+1 Reputation</li>
            </ul>`,
    },
    {
        id: 'R302',
        title: 'Gain: Energy',
        content: `<p>The number determines the outcome of the action.</p>
            <p>🔴 <strong>Roll 2-5</strong></p>
            <ul>
                <li><strong>Critical Failure</strong>: The treatment leaves you feeling more drained than before.</li>
                <li>+1 Heat</li>
            </ul>
            <p>🔴 <strong>Roll 6-8</strong></p>
            <ul>
                <li><strong>Failure</strong>: The process does little to restore your energy, but you feel slightly better.</li>
                <li>No Effect</li>
            </ul>
            <p>🟡 <strong>Roll 9-11</strong></p>
            <ul>
                <li><strong>Standard</strong>: You start to regain some energy, though not at full capacity.</li>
                <li>+2 Energy</li>
                <li>+1 Health</li>
            </ul>
            <p>🟡 <strong>Roll 12-14</strong></p>
            <ul>
                <li><strong>Good</strong>: The treatment has a noticeable effect, and you feel more refreshed.</li>
                <li>+4 Energy</li>
                <li>+2 Health</li>
            </ul>
            <p>🟢 <strong>Roll 15-17</strong></p>
            <ul>
                <li><strong>Great</strong>: Your energy is fully restored, and you feel recharged.</li>
                <li>+6 Energy</li>
                <li>+3 Health</li>
                <li>+1 Reputation</li>
            </ul>
            <p>🟢 <strong>Roll 18+</strong></p>
            <ul>
                <li><strong>Exceptional</strong>: You feel fully revitalized, bursting with energy and vitality.</li>
                <li>+8 Energy</li>
                <li>+4 Health</li>
                <li>+1 Reputation</li>
            </ul>`,
    },
    {
        id: 'R303',
        title: 'Gain: Nuyen',
        content: `<p>The number determines the outcome of the action.</p>
            <p>🔴 <strong>Roll 2-5</strong></p>
            <ul>
                <li><strong>Critical Failure</strong>: Things went wrong, and the payout is nonexistent.</li>
                <li>+1 Heat</li>
            </ul>
            <p>🔴 <strong>Roll 6-8</strong> </p>
            <ul>
                <li><strong>Failure</strong>: You earned something, but it's barely worth the effort.</li>
                <li>+3.000 ¥</li>
            </ul>
            <p>🟡 <strong>Roll 9-11</strong></p>
            <ul>
                <li><strong>Standard</strong>: A modest payout, nothing extravagant.</li>
                <li>+6.000 ¥</li>
            </ul>
            <p>🟡 <strong>Roll 12-14</strong></p>
            <ul>
                <li><strong>Good</strong>: A smooth outcome with fair compensation.</li>
                <li>+9.000 ¥</li>
            </ul>
            <p>🟢 <strong>Roll 15-17</strong></p>
            <ul>
                <li><strong>Great</strong>: Everything went well, and the payout reflects the effort.</li>
                <li>+12.000 ¥</li>
                <li>+1 Reputation</li>
            </ul>
            <p>🟢 <strong>Roll 18+</strong</p>
            <ul>
                <li><strong>Exceptional</strong>: Flawless execution, and the money is well worth it.</li>
                <li>+15.000 ¥</li>
                <li>+1 Reputation</li>
            </ul>`,
    },
    {
        id: 'R304',
        title: 'Reduce: Heat',
        content: `<p>The number determines the outcome of the action.</p>
            <p>🔴 <strong>Roll 2-5</strong></p>
            <ul>
                <li><strong>Critical Failure</strong>: Your actions attract major attention from the authorities.</li>
                <li>+1 Heat</li>
            </ul>
            <p>🔴 <strong>Roll 6-8</strong></p>
            <ul>
                <li><strong>Failure</strong>: You leave behind traces that raise suspicion.</li>
                <li>No Effect</li>
            </ul>
            <p>🟡 <strong>Roll 9-11</strong></p>
            <ul>
                <li><strong>Standard</strong>: You keep a low profile, but eyes are still on you.</li>
                <li>-1 Heat</li>
            </ul>
            <p>🟡 <strong>Roll 12-14</strong></p>
            <ul>
                <li><strong>Good</strong>: You take extra precautions and shake off pursuit.</li>
                <li>-2 Heat</li>
            </ul>
            <p>🟢 <strong>Roll 15-17</strong></p>
            <ul>
                <li><strong>Great</strong>: You reroute your trail and erase your digital footprint.</li>
                <li>-2 Heat</li>
                <li>+1 Reputation</li>
            </ul>
            <p>🟢 <strong>Roll 18+</strong></p>
            <ul>
                <li><strong>Exceptional</strong>: Your actions are so clean, you’re mistaken for a civilian.</li>
                <li>-3 Heat</li>
                <li>+1 Reputation</li>
            </ul>`,
    },
    {
        id: 'R305',
        title: 'Gain: Intel',
        content: `<p>The number determines the outcome of the action.</p>
            <p>🔴 <strong>Roll 2-5</strong></p>
            <ul>
                <li><strong>Critical Failure</strong>: Your attempt to gather intel fails miserably.</li>
                <li>+1 Heat</li>
            </ul>
            <p>🔴 <strong>Roll 6-8</strong></p>
            <ul>
                <li><strong>Failure</strong>: You recover minor insight, but it’s not enough.</li>
                <li>No Effect</li>
            </ul>
            <p>🟡 <strong>Roll 9-11</strong></p>
            <ul>
                <li><strong>Standard</strong>: You gather basic intel that may be useful.</li>
                <li>+1 Intel</li>
            </ul>
            <p>🟡 <strong>Roll 12-14</strong></p>
            <ul>
                <li><strong>Good</strong>: The intel you collect is solid.</li>
                <li>+2 Intel</li>
            </ul>
            <p>🟢 <strong>Roll 15-17</strong></p>
            <ul>
                <li><strong>Great</strong>: Your intel collection goes exceptionally well.</li>
                <li>+3 Intel</li>
                <li>+1 Reputation</li>
            </ul>
            <p>🟢 <strong>Roll 18+</strong></p>
            <ul>
                <li><strong>Exceptional</strong>: You uncover crucial and highly valuable intelligence.</li>
                <li>+4 Intel</li>
                <li>+1 Reputation</li>
            </ul>`,
    },
    {
        id: 'R306',
        title: 'Improve: Attribute',
        content: `<p>The number determines the outcome of the action.</p>
            <p>🔴 <strong>Roll 2-5</strong></p>
            <ul>
                <li><strong>Critical Failure</strong>: Your system rejects the implant violently.</li>
                <li>+1 Heat</li>
            </ul>
            <p>🔴 <strong>Roll 6-8</strong></p>
            <ul>
                <li><strong>Failure</strong>: The enhancement doesn’t sync well with your body.</li>
                <li>No Effect</li>
            </ul>
            <p>🟡 <strong>Roll 9-11</strong></p>
            <ul>
                <li><strong>Standard</strong>: The enhancement settles in properly.</li>
                <li>+1 to Attribute Temporary</li>
            </ul>
            <p>🟡 <strong>Roll 12-14</strong></p>
            <ul>
                <li><strong>Good</strong>: You feel sharp, fast, and focused.</li>
                <li>+1 to Attribute</li>
            </ul>
            <p>🟢 <strong>Roll 15-17</strong></p>
            <ul>
                <li><strong>Great</strong>: Your body and mind align perfectly with the upgrade.</li>
                <li>+1 to Attribute</li>
                <li>+1 to Attribute Temporary</li>
                <li>+1 Reputation</li>
            </ul>
            <p>🟢 <strong>Roll 18+</strong></p>
            <ul>
                <li><strong>Exceptional</strong>: The upgrade merges seamlessly with your essence.</li>
                <li>+2 to Attribute</li>
                <li>+1 Reputation</li>
            </ul>`,
    },
    {
        id: 'R307',
        title: 'Hire: Runner',
        content: `<p>The number determines the outcome of the action.</p>
            <p>🟡 <strong>Roll 2-7</strong></p>
            <ul>
                <li><strong>Standard</strong>: The runner’s skill set is solid, but they’re not exactly cheap.</li>
                <li>+2 Attributes Temporary</li>
            </ul>
            <p>🟡 <strong>Roll 8-12</strong></p>
            <ul>
                <li><strong>Good</strong>: The runner's price is what you would expect for their skill level.</li>
                <li>+2 Attributes Temporary</li>
                <li>+2.000 ¥</li>
            </ul>
            <p>🟢 <strong>Roll 13-17</strong></p>
            <ul>
                <li><strong>Great</strong>: You’ve managed to secure a solid deal for this runner.</li>
                <li>+2 Attributes Temporary</li>
                <li>+4.000 ¥</li>
                <li>+1 Reputation</li>
            </ul>
            <p>🟢 <strong>Roll 18+</strong></p>
            <ul>
                <li><strong>Exceptional</strong>: You’ve managed to convince the runner to work for less than their usual rate.</li>
                <li>+2 Attributes Temporary</li>
                <li>+6.000 ¥</li>
                <li>+1 Reputation</li>
            </ul>`,
    },
]

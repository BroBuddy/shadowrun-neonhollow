export const Outcomes = [
    {
        id: 'R301',
        title: 'Gain: Health',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>
                2-5: <strong>Critical Failure</strong> – The treatment backfires, causing harm.
                <ul>
                    <li>+1 Heat</li>
                </ul>
            </li>
            <li>
                6-8: <strong>Failure</strong> – Healing stalls. You’re patched, but need more time.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>
                9-11: <strong>Standard</strong> – Treatment kicks in slowly, stabilizing you.
                <ul>
                    <li>+2 Health</li>
                    <li>+1 Energy</li>
                </ul>
            </li>
            <li>
                12-14: <strong>Good</strong> – Cells respond well, and you feel stronger.
                <ul>
                    <li>+4 Health</li>
                    <li>+2 Energy</li>
                </ul>
            </li>
            <li>
                15-17: <strong>Great</strong> – Nanites accelerate healing, and you gain energy.
                <ul>
                    <li>+6 Health</li>
                    <li>+3 Energy</li>
                    <li>+1 Reputation</li>
                </ul>
            </li>
            <li>
                18+: <strong>Exceptional</strong> – Perfect recovery. You feel better than ever.
                <ul>
                    <li>+8 Health</li>
                    <li>+4 Energy</li>
                    <li>+1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R302',
        title: 'Gain: Energy',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>
                2-5: <strong>Critical Failure</strong> – The treatment leaves you feeling more drained than before.
                <ul>
                    <li>+1 Heat</li>
                </ul>
            </li>
            <li>
                6-8: <strong>Failure</strong> – The process does little to restore your energy, but you feel slightly better.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>
                9-11: <strong>Standard</strong> – You start to regain some energy, though not at full capacity.
                <ul>
                    <li>+2 Energy, +1 Health</li>
                </ul>
            </li>
            <li>
                12-14: <strong>Good</strong> – The treatment has a noticeable effect, and you feel more refreshed.
                <ul>
                    <li>+4 Energy, +2 Health</li>
                </ul>
            </li>
            <li>
                15-17: <strong>Great</strong> – Your energy is fully restored, and you feel recharged.
                <ul>
                    <li>+6 Energy, +3 Health, +1 Reputation</li>
                </ul>
            </li>
            <li>
                18+: <strong>Exceptional</strong> – You feel fully revitalized, bursting with energy and vitality.
                <ul>
                    <li>+8 Energy, +4 Health, +1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R303',
        title: 'Gain: Nuyen',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>
                2-5: <strong>Critical Failure</strong> – Things went wrong, and the payout is nonexistent.
                <ul>
                    <li>+1 Heat</li>
                </ul>
            </li>
            <li>
                6-8: <strong>Failure</strong> – You earned something, but it's barely worth the effort.
                <ul>
                    <li>+3.000 ¥</li>
                </ul>
            </li>
            <li>
                9-11: <strong>Standard</strong> – A modest payout, nothing extravagant.
                <ul>
                    <li>+6.000 ¥</li>
                </ul>
            </li>
            <li>
                12-14: <strong>Good</strong> – A smooth outcome with fair compensation.
                <ul>
                    <li>+9.000 ¥</li>
                </ul>
            </li>
            <li>
                15-17: <strong>Great</strong> – Everything went well, and the payout reflects the effort.
                <ul>
                    <li>+12.000 ¥, +1 Reputation</li>
                </ul>
            </li>
            <li>
                18+: <strong>Exceptional</strong> – Flawless execution, and the money is well worth it.
                <ul>
                    <li>+15.000 ¥, +1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R304',
        title: 'Reduce: Heat',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>
                2-5: <strong>Critical Failure</strong> – Your actions attract major attention from the authorities.
                <ul>
                    <li>+1 Heat</li>
                </ul>
            </li>
            <li>
                6-8: <strong>Failure</strong> – You leave behind traces that raise suspicion.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>
                9-11: <strong>Standard</strong> – You keep a low profile, but eyes are still on you.
                <ul>
                    <li>-1 Heat</li>
                </ul>
            </li>
            <li>
                12-14: <strong>Good</strong> – You take extra precautions and shake off pursuit.
                <ul>
                    <li>-2 Heat</li>
                </ul>
            </li>
            <li>
                15-17: <strong>Great</strong> – You reroute your trail and erase your digital footprint.
                <ul>
                    <li>-3 Heat, +1 Reputation</li>
                </ul>
            </li>
            <li>
                18+: <strong>Exceptional</strong> – Your actions are so clean, you’re mistaken for a civilian.
                <ul>
                    <li>-4 Heat, +1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R305',
        title: 'Gain: Intel',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>2-5: <strong>Critical Failure</strong> – Your attempt to gather intel fails miserably.
                <ul>
                    <li>+1 Heat</li>
                </ul>
            </li>
            <li>6-8: <strong>Failure</strong> – You recover minor insight, but it’s not enough.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>9-11: <strong>Standard</strong> – You gather basic intel that may be useful.
                <ul>
                    <li>+1 Intel</li>
                </ul>
            </li>
            <li>12-14: <strong>Good</strong> – The intel you collect is solid.
                <ul>
                    <li>+2 Intel</li>
                </ul>
            </li>
            <li>15-17: <strong>Great</strong> – Your intel collection goes exceptionally well.
                <ul>
                    <li>+3 Intel, +1 Reputation</li>
                </ul>
            </li>
            <li>18+: <strong>Exceptional</strong> – You uncover crucial and highly valuable intelligence.
                <ul>
                    <li>+4 Intel, +1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R306',
        title: 'Improve: Attribute',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>
                2-5: <strong>Critical Failure</strong> – Your system rejects the implant violently.
                <ul>
                    <li>+1 Heat</li>
                </ul>
            </li>
            <li>
                6-8: <strong>Failure</strong> – The enhancement doesn’t sync well with your body.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>
                9-11: <strong>Standard</strong> – The enhancement settles in properly.
                <ul>
                    <li>+1 to Attribute Temporary</li>
                </ul>
            </li>
            <li>
                12-14: <strong>Good</strong> – You feel sharp, fast, and focused.
                <ul>
                    <li>+1 to Attribute</li>
                </ul>
            </li>
            <li>
                15-17: <strong>Great</strong> – Your body and mind align perfectly with the upgrade.
                <ul>
                    <li>+1 to Attribute, +1 to Attribute Temporary, +1 Reputation</li>
                </ul>
            </li>
            <li>
                18+: <strong>Exceptional</strong> – The upgrade merges seamlessly with your essence.
                <ul>
                    <li>+2 to Attribute, +1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R307',
        title: 'Hire: Runner',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>
                2-7: <strong>Standard</strong> – The runner’s skill set is solid, but they’re not exactly cheap.
                <ul>
                    <li>+2 Attributes Temporary</li>
                </ul>
            </li>
            <li>
                8-12: <strong>Good</strong> – The runner's price is what you would expect for their skill level.
                <ul>
                    <li>+2 Attributes Temporary</li>
                    <li>+2.000 ¥</li>
                </ul>
            </li>
            <li>
                13-17: <strong>Great</strong> – You’ve managed to secure a solid deal for this runner.
                <ul>
                    <li>+2 Attributes Temporary</li>
                    <li>+4.000 ¥</li>
                    <li>+1 Reputation</li>
                </ul>
            </li>
            <li>
                18+: <strong>Exceptional</strong> – You’ve managed to convince the runner to work for less than their usual rate.
                <ul>
                    <li>+2 Attributes Temporary</li>
                    <li>+6.000 ¥</li>
                    <li>+1 Reputation</li>
                </ul>
            </li>
        </ol>`,
    },
]

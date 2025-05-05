function MissionRules() {
    return (
        <>
            <p>
                Choose one mission to undertake — each can only be completed
                once.
            </p>
            <ul className="list-margin">
                <li>
                    Face three random obstacles. Roll 2d6 for each to determine
                    the difficulty check.
                </li>
                <li>
                    DC is the number of successes required to overcome an
                    obstacle.
                </li>
                <li>After the obstacles, a final twist will be revealed.</li>
                <li>
                    Each success contributes to your overall Performance score.
                </li>
            </ul>
        </>
    )
}

export default MissionRules

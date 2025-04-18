import Card from './Card'

const Town = () => {
    return (
        <section className="flex flex-col py-2 w-full">
            <Card title="NeonHollow">
                <p>
                    <em>Where the lights never die—only the people do.</em>
                </p>
                <p className="flex items-center justify-center">
                    <img src="/images/NeonHollow.jpg" alt="NeonHollow" />
                </p>
                <p>
                    NeonHollow is a fractured sprawl of flickering holo-ads,
                    decaying arcologies, and back-alley deals. The corporations
                    rule from mirrored towers, the gangs own the ground, and the
                    rest just try to survive in the haze of smog and digital
                    noise. Nothing here is clean—least of all your conscience.
                </p>

                <p>
                    <strong>Buildings in NeonHollow:</strong>
                </p>
                <ul>
                    <li>
                        <strong>BioCare:</strong>
                        <br />
                        Gene-hacked meds and synthetic organs in sterile,
                        humming rooms. You’ll walk out fixed. Probably.
                    </li>
                    <li>
                        <strong>CyberBite:</strong>
                        <br />
                        Nutrient paste and synth meat, spiked with nootropics
                        and stim flavoring. Keeps your edge sharp.
                    </li>
                    <li>
                        <strong>DreamSphere:</strong>
                        <br />
                        Immersive simulations, deep dives, and curated dreams.
                        Your mind may wander, but your body pays.
                    </li>
                    <li>
                        <strong>EchoGarden:</strong>
                        <br />
                        Overgrown ruins tuned to ancient tech and spirit
                        circuits. The wind speaks, if you know how to listen.
                    </li>
                    <li>
                        <strong>HoloLounge:</strong>
                        <br />
                        Plug in and drift away—virtual escapism meets social
                        surveillance. Someone’s always watching.
                    </li>
                    <li>
                        <strong>IronGym:</strong>
                        <br />
                        Rusty weights and bloodied mats where bodies are forged
                        and limits shattered.
                    </li>
                    <li>
                        <strong>NeuralNexus:</strong>
                        <br />
                        Hackers' sanctum filled with cold light and hot code.
                        Logic sharpens here like a blade.
                    </li>
                    <li>
                        <strong>PatrolHub:</strong>
                        <br />
                        Half-abandoned precincts where drones recharge and jaded
                        officers monitor chaos from dusty screens.
                    </li>
                    <li>
                        <strong>SmugglerDen:</strong>
                        <br />
                        Crates of contraband, whispered deals, and guarded nods.
                        If it’s illegal or rare, it passed through here.
                    </li>
                </ul>
            </Card>
        </section>
    )
}

export default Town

import { Link } from 'react-router-dom'
import Card from './Card'

function City() {
    return (
        <Card title="NeonHollow">
            <div className="flex gap-4">
                <div className="flex-1 basis-1/2">
                    <img src="/images/NeonHollow.jpg" alt="NeonHollow" />
                </div>
                <div className="flex-1 basis-1/2">
                    <p>
                        <strong>District Lockdowns:</strong>
                    </p>
                    <p>🔴 Heat 1 &#8594; Quantum</p>
                    <p>🟠 Heat 2 &#8594; Serenity</p>
                    <p>🟡 Heat 3 &#8594; Vortex</p>
                </div>
            </div>
            <br />
            <p>
                <strong>🔴 Quantum</strong>
            </p>
            <div className="card">
                <div className="flex gap-4">
                    <div className="flex-1 basis-1/3 text-center">
                        <Link to="/R110">
                            <p>
                                MegaCorp
                                <img
                                    src="/images/MegaCorp.jpg"
                                    alt="MegaCorp"
                                    className="mx-auto"
                                />
                            </p>
                        </Link>
                    </div>
                    <div className="flex-1 basis-1/3 text-center">
                        <Link to="/R180">
                            <p>
                                NeuralNexus
                                <img
                                    src="/images/NeuralNexus.jpg"
                                    alt="NeuralNexus"
                                    className="mx-auto"
                                />
                            </p>
                        </Link>
                    </div>
                    <div className="flex-1 basis-1/3 text-center">
                        <Link to="/R120">
                            <p>
                                PatrolHub
                                <img
                                    src="/images/PatrolHub.jpg"
                                    alt="PatrolHub"
                                    className="mx-auto"
                                />
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <br />
            <p>
                <strong>🟠 Serenity</strong>
            </p>
            <div className="card">
                <div className="flex gap-4">
                    <div className="flex-1 basis-1/3 text-center">
                        <Link to="/R130">
                            <p>
                                BioCare
                                <img
                                    src="/images/BioCare.jpg"
                                    alt="BioCare"
                                    className="mx-auto"
                                />
                            </p>
                        </Link>
                    </div>
                    <div className="flex-1 basis-1/3 text-center">
                        <Link to="/R160">
                            <p>
                                EchoGarden
                                <img
                                    src="/images/EchoGarden.jpg"
                                    alt="EchoGarden"
                                    className="mx-auto"
                                />
                            </p>
                        </Link>
                    </div>
                    <div className="flex-1 basis-1/3 text-center">
                        <Link to="/R150">
                            <p>
                                DreamSphere
                                <img
                                    src="/images/DreamSphere.jpg"
                                    alt="DreamSphere"
                                    className="mx-auto"
                                />
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <br />
            <p>
                <strong>🟡 Vortex</strong>
            </p>
            <div className="card">
                <div className="flex gap-4">
                    <div className="flex-1 basis-1/3 text-center">
                        <Link to="/R140">
                            <p>
                                HoloLounge
                                <img
                                    src="/images/HoloLounge.jpg"
                                    alt="HoloLounge"
                                    className="mx-auto"
                                />
                            </p>
                        </Link>
                    </div>
                    <div className="flex-1 basis-1/3 text-center">
                        <Link to="/R170">
                            <p>
                                IronGym
                                <img
                                    src="/images/IronGym.jpg"
                                    alt="IronGym"
                                    className="mx-auto"
                                />
                            </p>
                        </Link>
                    </div>
                    <div className="flex-1 basis-1/3 text-center">
                        <Link to="/R200">
                            <p>
                                ZeroZone
                                <img
                                    src="/images/ZeroZone.jpg"
                                    alt="ZeroZone"
                                    className="mx-auto"
                                />
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <br />
            <p>
                <strong>🟢 Undercity</strong>
            </p>
            <div className="card">
                <div className="flex gap-4">
                    <div className="flex-1 basis-1/3 text-center">
                        <Link to="/R190">
                            <p>
                                SmugglerDen
                                <img
                                    src="/images/SmugglerDen.jpg"
                                    alt="SmugglerDen"
                                    className="mx-auto"
                                />
                            </p>
                        </Link>
                    </div>
                    <div className="flex-1 basis-1/3 text-center">
                        <Link to="/R210">
                            <p>
                                SafeHouse
                                <img
                                    src="/images/SafeHouse.jpg"
                                    alt="SafeHouse"
                                    className="mx-auto"
                                />
                            </p>
                        </Link>
                    </div>
                    <div className="flex-1 basis-1/3 text-center"></div>
                </div>
            </div>
        </Card>
    )
}

export default City

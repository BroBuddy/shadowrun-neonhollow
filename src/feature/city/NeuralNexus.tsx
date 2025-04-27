import Card from '@/components/Card'
import { Link } from 'react-router-dom'

function NeuralNexus() {
    return (
        <Card title="NeuralNexus">
            <div className="flex gap-4">
                <div className="flex-1 basis-1/2">
                    <img src="/images/NeuralNexus.jpg" alt="NeuralNexus" />
                </div>
                <div className="flex-1 basis-1/2"></div>
            </div>

            <div className="card card-margin">
                <p>
                    <strong className="violet">
                        🏃 Enter &#8594; Roll 2d6:
                    </strong>
                </p>
                <ul>
                    <li>
                        2: <Link to="/R471">System Anomaly</Link>
                    </li>
                    <li>
                        3-4: <strong>Unapproved Experiment</strong> &#8594; +1
                        Heat
                    </li>
                    <li>
                        5-6: <strong>Research Malfunctions</strong> &#8594; -1
                        Health
                    </li>
                    <li>
                        7: <strong>Standard</strong> &#8594; No Effect
                    </li>
                    <li>
                        8-9: <strong>Unexpected Discovery</strong> &#8594; +1
                        Energy
                    </li>
                    <li>
                        10-11: <strong>Laboratory Breakthrough</strong> &#8594;
                        +1 Intel
                    </li>
                    <li>
                        12: <Link to="/R481">Mysterious Encounter</Link>
                    </li>
                </ul>
            </div>

            <div className="card">
                <p>
                    <strong className="violet">💡 Code Decryption:</strong>
                </p>
                <ul>
                    <li>
                        Pay <strong>6.000 ¥</strong> &#8594; Roll 2d6 &#8594;{' '}
                        <strong>+2</strong>
                    </li>
                    <li>
                        Add <strong>Logic</strong> or <strong>Intuition</strong>
                    </li>
                    <li>
                        Gain &#8594; <Link to="/R305">Intel</Link>
                    </li>
                </ul>
                <p>
                    <strong className="violet">🔋 Neural Sync Boost:</strong>
                </p>
                <ul>
                    <li>
                        Pay <strong>4.000 ¥</strong> &#8594; Roll 2d6
                    </li>
                    <li>
                        Add <strong>Logic</strong> or <strong>Charisma</strong>
                    </li>
                    <li>
                        Gain &#8594; <Link to="/R302">Energy</Link>
                    </li>
                </ul>
                <p>
                    <strong className="violet">🧠 Logic Refinement:</strong>
                </p>
                <ul>
                    <li>
                        Pay <strong>1.000 ¥</strong> per point of Logic
                    </li>
                    <li>Roll 2d6 &#8594; Add 10 &#8594; Subtract Logic</li>
                    <li>
                        Improve &#8594; <Link to="/R306">Attribute</Link>
                    </li>
                </ul>
            </div>
        </Card>
    )
}

export default NeuralNexus

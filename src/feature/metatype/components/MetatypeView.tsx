import Card from '@/components/Card'
import { Link } from 'react-router-dom'

function MetatypeView() {
    return (
        <Card>
            <p>
                <strong className="highlight">Metatype:</strong>
            </p>
            <p>Roll 1d6:</p>

            <div className="flex justify-between gap-3">
                <div className="flex-1 basis-1/3 text-center">
                    <Link to="/metatype/human">
                        <p>
                            1. Human
                            <img
                                src="/images/Human.jpg"
                                alt="Human"
                                className="mx-auto"
                            />
                        </p>
                    </Link>
                </div>
                <div className="flex-1 basis-1/3 text-center">
                    <Link to="/metatype/human">
                        <p>
                            2. Human
                            <img
                                src="/images/Human.jpg"
                                alt="Human"
                                className="mx-auto"
                            />
                        </p>
                    </Link>
                </div>
                <div className="flex-1 basis-1/3 text-center">
                    <Link to="/metatype/elf">
                        <p>
                            3. Elf
                            <img
                                src="/images/Elf.jpg"
                                alt="Elf"
                                className="mx-auto"
                            />
                        </p>
                    </Link>
                </div>
            </div>
            <div className="flex justify-between gap-3">
                <div className="flex-1 basis-1/3 text-center">
                    <Link to="/metatype/dwarf">
                        <p>
                            4. Dwarf
                            <img
                                src="/images/Dwarf.jpg"
                                alt="Dwarf"
                                className="mx-auto"
                            />
                        </p>
                    </Link>
                </div>
                <div className="flex-1 basis-1/3 text-center">
                    <Link to="/metatype/ork">
                        <p>
                            5. Ork
                            <img
                                src="/images/Ork.jpg"
                                alt="Ork"
                                className="mx-auto"
                            />
                        </p>
                    </Link>
                </div>
                <div className="flex-1 basis-1/3 text-center">
                    <Link to="/metatype/troll">
                        <p>
                            6. Troll
                            <img
                                src="/images/Troll.jpg"
                                alt="Troll"
                                className="mx-auto"
                            />
                        </p>
                    </Link>
                </div>
            </div>
        </Card>
    )
}

export default MetatypeView

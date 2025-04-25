import Card from '@/components/Card'
import React from 'react'
import { Link } from 'react-router-dom'
import { TownData } from './townData'
import { District } from './TownTypes'

function Town() {
    return (
        <Card title="NeonHollow">
            <p className="flex items-center justify-center">
                <img src="/images/NeonHollow.jpg" alt="NeonHollow" />
            </p>
            <p>
                <em>"Where the lights never die — only the people do."</em>
            </p>
            <p>
                <strong>District Lockdowns:</strong>
            </p>
            <ul>
                {TownData.map((district: District, index: number) => {
                    if (district.heat === undefined) return null

                    return (
                        <li key={index}>
                            Heat {district.heat} &#8594;{' '}
                            <span>{district.name}</span> District
                        </li>
                    )
                })}
            </ul>
            <hr />
            {TownData.map((district: District, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <p>
                            <strong>{district.name} District:</strong>
                        </p>

                        <div className="flex gap-8">
                            {district.facilities.map(
                                (facility: string, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex-1 basis-1/3 text-center mb-4"
                                        >
                                            <Link
                                                to={`/town/${facility.toLowerCase()}`}
                                            >
                                                {facility}
                                            </Link>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </React.Fragment>
                )
            })}
            <hr />
            <p>
                Dive into the <Link to="/R102">Town Rules</Link> to get a taste
                of how things run at <strong>NeonHollow</strong>.
            </p>
        </Card>
    )
}

export default Town

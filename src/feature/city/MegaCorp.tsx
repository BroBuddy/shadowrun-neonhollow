import Card from '@/components/Card'

function MegaCorp() {
    return (
        <Card title="MegaCorp">
            <div className="flex gap-4">
                <div className="flex-1 basis-1/2">
                    <img src="/images/MegaCorp.jpg" alt="MegaCorp" />
                </div>
                <div className="flex-1 basis-1/2">
                    <p>
                        <strong>Rules:</strong>
                    </p>
                    <p>
                        Rather than taking on a mission, you can choose one of
                        these actions. Each action can only be used once.
                    </p>
                </div>
            </div>
            <div className="card card-margin">
                <p>
                    <strong className="violet">🚀 Incite Rebellion:</strong>
                </p>
                <ul>
                    <li>
                        Spend <strong>5 Reputation</strong> &#8594; +3 Heat
                    </li>
                </ul>

                <p>
                    <strong className="violet">🚀 Propaganda Campaign:</strong>
                </p>
                <ul>
                    <li>
                        Pay <strong>30.000 ¥</strong> &#8594; +3 Heat
                    </li>
                </ul>
            </div>
        </Card>
    )
}

export default MegaCorp

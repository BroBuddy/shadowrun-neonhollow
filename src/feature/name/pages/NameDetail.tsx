import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getNameByTag, isValidName } from '../nameData'
import { Name } from '../NameType'
import Headline from '@/components/Headline'
import Card from '@/components/Card'

function NameDetail() {
    const { tag } = useParams()
    const data = useMemo(() => {
        return getNameByTag(tag as string) as Name
    }, [tag])

    if (!data || !isValidName(tag as string)) {
        return (
            <>
                <Headline>Invalid Name</Headline>
                <Card>
                    <p>The tag you provided is invalid.</p>
                </Card>
            </>
        )
    }

    return (
        <>
            <Headline>{data.title}</Headline>
            <Card>
                <p>
                    🎲 Roll <strong>1d6</strong> to get a first name and{' '}
                    <strong>1d6</strong> for a second name from the appropriate
                    list.
                </p>
                <div className="grid grid-cols-2">
                    <div>
                        <p>
                            <strong className="highlight">First Name:</strong>
                        </p>
                        <ol>
                            {data.firstNames.map(
                                (name: string, index: number) => (
                                    <li key={index}>{name}</li>
                                )
                            )}
                        </ol>
                    </div>
                    <div>
                        <p>
                            <strong className="highlight">Last Name:</strong>
                        </p>
                        <ol>
                            {data.lastNames.map(
                                (name: string, index: number) => (
                                    <li key={index}>{name}</li>
                                )
                            )}
                        </ol>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default NameDetail

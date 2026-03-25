import { useEffect, useState } from 'react'
import Headline from '@/components/Headline'
import Card from '@/components/Card'
import { generateMultipleNames, isValidTag } from '../services/NameService'

type Props = {
    tag: string
}

function GenerateNames({ tag }: Props) {
    const [names, setNames] = useState<string[]>([])
    const namesAmount = 5

    if (!tag || !isValidTag(tag)) {
        return (
            <>
                <Headline>Invalid Name</Headline>
                <Card>
                    <p>The tag you provided is invalid.</p>
                </Card>
            </>
        )
    }

    const handleGenerate = () => {
        setNames(generateMultipleNames(tag, namesAmount))
    }

    useEffect(() => {
        handleGenerate()
    }, [])

    return (
        <>
            <button className='font-bold highlight' onClick={handleGenerate}>
                🎲 Generate names
            </button>

            {names.length > 0 && (
                <ol className='list-margin'>
                    {names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ol>
            )}
        </>
    )
}

export default GenerateNames
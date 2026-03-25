const BonusAttribute = ({ bonus }: { bonus: string }) => (
    <>
        <p>
            <strong className="highlight">Bonus Attribute:</strong>
        </p>

        <ul className="list-margin">
            <li>{bonus}</li>
        </ul>
    </>
)

export default BonusAttribute
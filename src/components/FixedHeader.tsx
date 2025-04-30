import Dice from './Dice'

const FixedHeader = () => {
    return (
        <div className="fixed left-0 top-0 w-full bg-black text-white flex justify-center items-center px-4 py-2 shadow-md z-40">
            <div className="flex items-center">
                <Dice dice={1} />
                <span className="mx-2 text-xs">1d6</span>
                <span>|</span>
                <span className="mx-2 text-xs">2d6</span>
                <Dice dice={2} />
            </div>
        </div>
    )
}

export default FixedHeader

import Headline from '@/components/Headline'

const MrJohnson = () => {
    return (
        <>
            <Headline>Mr. Johnson</Headline>
            
            <div className="flex gap-5 p-4">
                <div className="flex-1 basis-2/5">
                    <img src="/images/MrJohnson.jpg" alt="MrJohnson" />
                </div>
                
                <div className="flex-1 basis-3/5">
                    <p>
                        <em>
                            "Mr. Johnson—the polished voice of the shadows.
                            He never asks twice. The job pays… if you make it back."
                        </em>
                    </p>
                </div>
            </div>
        </>
    )
}

export default MrJohnson

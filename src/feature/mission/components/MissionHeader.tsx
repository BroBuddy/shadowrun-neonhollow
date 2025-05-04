import FadeIn from '@/components/FadeIn'

const MissionHeader = () => {
    return (
        <FadeIn>
            <div className="flex gap-5 p-4">
                <div className="flex-1 basis-2/5">
                    <img src="/images/MrJohnson.jpg" alt="MrJohnson" />
                </div>
                <div className="flex-1 basis-3/5">
                    <p>
                        <em>
                            "Mr. Johnson—the polished voice of the shadows.
                            Deals are made, trust is tested, and the job always
                            pays… for those who survive."
                        </em>
                    </p>
                </div>
            </div>
        </FadeIn>
    )
}

export default MissionHeader

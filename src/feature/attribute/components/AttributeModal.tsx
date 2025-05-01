import AttributeEditor from './AttributeEditor'

const AttributeModal = ({
    isOpen,
}: {
    isOpen: boolean
    toggleModal: (state: boolean) => void
}) => {
    return (
        <div
            className={`fixed bg-black inset-0 bg-opacity flex transition-transform z-10 duration-500 ${
                isOpen ? 'translate-y-0' : '-translate-y-full'
            } top-[27px]`}
        >
            <div className="shadow-lg w-3/4 max-w-md pt-5 mt-5 mx-auto">
                <div className="flex">
                    <AttributeEditor />
                </div>
            </div>
        </div>
    )
}

export default AttributeModal

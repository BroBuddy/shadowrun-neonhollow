import AttributeEditor from './AttributeEditor'

const AttributeModal = ({
    isOpen,
}: {
    isOpen: boolean
    toggleModal: (state: boolean) => void
}) => {
    return (
        <div
            className={`fixed bg-black inset-0 bg-opacity-90 flex transition-transform z-40 duration-500 ${
                isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="shadow-lg w-3/4 max-w-md pt-7 mt-7 mx-auto">
                <div className="flex">
                    <AttributeEditor />
                </div>
            </div>
        </div>
    )
}

export default AttributeModal

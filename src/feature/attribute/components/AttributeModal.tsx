import AttributeEditor from './AttributeEditor'

const AttributeModal = ({
    isOpen,
    toggleModal,
    toggleColorScheme,
}: {
    isOpen: boolean
    toggleModal: (state: boolean) => void
    toggleColorScheme: () => void
}) => {
    return (
        <div
            className={`fixed bg-black inset-0 bg-opacity-90 flex transition-transform z-50 duration-500 ${
                isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="shadow-lg w-3/4 max-w-md mt-5 mx-auto">
                <div>
                    <div className="flex items-center justify-between">
                        <span
                            className="highlight p-2 text-md cursor-pointer"
                            onClick={toggleColorScheme}
                        >
                            <strong>Toggle Color Scheme</strong>
                        </span>

                        <span
                            className="text-white cursor-pointer text-xl -mt-3"
                            onClick={() => toggleModal(false)}
                        >
                            ✕
                        </span>
                    </div>
                </div>
                <div className="flex">
                    <AttributeEditor />
                </div>
            </div>
        </div>
    )
}

export default AttributeModal

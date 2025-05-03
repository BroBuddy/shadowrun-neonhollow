import ResourceEditor from '@/feature/resource/components/ResourceEditor'
import AttributeEditor from './AttributeEditor'

const AttributeModal = ({
    isOpen,
}: {
    isOpen: boolean
    toggleModal: (state: boolean) => void
}) => {
    return (
        <div
            style={{ zIndex: 999 }}
            className={`fixed bg-black inset-0 flex transition-transform duration-500 ${
                isOpen ? 'translate-y-0' : '-translate-y-full'
            } top-[28px]`}
        >
            <div className="shadow-lg w-3/4 max-w-md pt-5 mt-5 mx-auto">
                <div className="flex">
                    <ResourceEditor />
                </div>
                <div className="flex">
                    <AttributeEditor />
                </div>
            </div>
        </div>
    )
}

export default AttributeModal

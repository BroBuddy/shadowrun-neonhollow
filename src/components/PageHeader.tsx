type PageHeaderProps = {
    title: string
    image: string
    children: React.ReactNode
}

const PageHeader = ({ title, image, children }: PageHeaderProps) => (
    <div className="flex gap-5 p-4">
        <div className="flex-1 basis-2/5">
            <img
                src={image}
                alt={title}
                loading="lazy"
            />
        </div>

        <div className="flex-1 basis-3/5">
            {children}
        </div>
    </div>
)

export default PageHeader
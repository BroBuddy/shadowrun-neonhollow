import { Resources } from "@/feature/character/types/CharacterType"

type ResourceListProps = {
  resources: Resources
}

const ResourceList = ({ resources }: ResourceListProps) => (
  <ul className="list-margin ml-6">
    {Object.entries(resources).map(([key, value]) => (
      <li key={key}>
        {key === 'Nuyen'
          ? `${value > 0 ? `+${value}` : value}.000`
          : `${value > 0 ? `+${value}` : value}`}{' '}
        {key}
      </li>
    ))}
  </ul>
)

export default ResourceList
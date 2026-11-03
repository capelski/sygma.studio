type Props = { title: string }

export default function Section({ title }: Props) {
  return <h1 className="section-title">{title}</h1>
}
